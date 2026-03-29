'use client'
import { useEffect, useRef } from 'react'

const CONTACT = 'mailto:info@nvforhd.com'

export default function SponsorCardAnimated() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const twRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    ctxRef.current = canvas.getContext('2d')
    const card = canvas.parentElement as HTMLElement
    let W = card.offsetWidth, H = card.offsetHeight, raf = 0
    canvas.width = W; canvas.height = H

    type P = { x:number; y:number; r:number; speed:number; op:number; drift:number }
    const pts: P[] = Array.from({length:38}, () => ({
      x: Math.random()*W, y: H+Math.random()*H,
      r: Math.random()*1.6+0.3, speed: Math.random()*0.45+0.12,
      op: Math.random()*0.5+0.15, drift: (Math.random()-0.5)*0.28,
    }))

    function draw() {
      const c = ctxRef.current; if (!c) return
      c.clearRect(0,0,W,H)
      for (const p of pts) {
        c.beginPath(); c.arc(p.x,p.y,p.r,0,Math.PI*2)
        c.fillStyle=`rgba(245,158,11,${p.op})`; c.fill()
        p.y-=p.speed; p.x+=p.drift; p.op-=0.0015
        if (p.y<-5||p.op<=0) {
          p.y=H+5; p.x=Math.random()*W
          p.op=Math.random()*0.5+0.15; p.speed=Math.random()*0.45+0.12
        }
      }
      raf=requestAnimationFrame(draw)
    }
    draw()

    const ro = new ResizeObserver(() => {
      const cv = canvasRef.current; if (!cv) return
      W=card.offsetWidth; H=card.offsetHeight; cv.width=W; cv.height=H
    })
    ro.observe(card)
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  useEffect(() => {
    const phrases = ['Your logo on the course.','100% goes to UC Davis HD families.','Your name in the fight.']
    let pi=0, ci=0, del=false
    let tid: ReturnType<typeof setTimeout>
    function tick() {
      const el = twRef.current; if (!el) return
      const p = phrases[pi]
      if (!del) {
        el.textContent=p.slice(0,++ci)
        if (ci>=p.length){del=true;tid=setTimeout(tick,1800);return}
      } else {
        el.textContent=p.slice(0,--ci)
        if (ci<=0){del=false;pi=(pi+1)%phrases.length;tid=setTimeout(tick,400);return}
      }
      tid=setTimeout(tick,del?36:65)
    }
    tid=setTimeout(tick,600)
    return () => clearTimeout(tid)
  }, [])

  return (
    <div className="sca-outer">
      <div className="sca-card">
        <canvas ref={canvasRef} className="sca-canvas" />
        <div className="sca-tide" />
        <div className="sca-ink1" />
        <div className="sca-ink2" />
        <div className="sca-content">
          <div className="sca-badge">Limited Spots · 2026</div>
          <h3 className="sca-title">Put your name on the fight against Huntington&apos;s Disease.</h3>
          <p className="sca-prices">Title ($3,500) · Gold ($3,000) · Lunch ($3,000) · Hole signs ($100) · Custom packages available.</p>
          <div className="sca-bold-line">
            <span ref={twRef} /><span className="sca-cursor" />
          </div>
          <a href={CONTACT} target="_blank" rel="noopener" className="sca-btn">
            <span className="sca-shimmer" />
            Get Sponsorship Info →
          </a>
          <p className="sca-phone">📞 775-691-8860 · Call Sean</p>
        </div>
      </div>
    </div>
  )
}

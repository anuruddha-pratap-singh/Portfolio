import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const chapters = [
  { label: '01 / PROFILE', title: 'Systems thinker.', accent: 'Software builder.', copy: 'I’m Anuruddha, a computer science student exploring how thoughtful software connects interfaces, algorithms, and the systems underneath.', note: 'B.TECH CSE · AI   /   LEARNING IN PUBLIC', art: 'portrait' },
  { label: '02 / FOUNDATIONS', title: 'Build to understand', accent: 'the system.', copy: 'I’m studying Computer Science (AI), learning by turning unfamiliar ideas into small implementations I can inspect and improve.', note: 'JAVA   ·   DATA STRUCTURES   ·   SOFTWARE DESIGN', art: 'foundation' },
  { label: '03 / PROJECTS', title: 'Small systems.', accent: 'Real learning.', copy: 'Java problem solving alongside frontend and full-stack coursework. Two public repositories document the work as it grows.', note: 'LEETCODE SOLUTIONS   /   WEB DEVELOPMENT · SEMESTER 3', art: 'projects' },
  { label: '04 / TOOLKIT', title: 'The pieces I’m', accent: 'learning to connect.', copy: 'Java · JavaScript · React · Node.js · Express · MongoDB · REST APIs · data structures · algorithms.', note: 'TOOLS IN PRACTICE · NOT EXPERTISE RATINGS', art: 'toolkit' },
  { label: '05 / APPROACH', title: 'Learn by building.', accent: 'Keep the work visible.', copy: 'Readable code, useful feedback, and accessible interfaces belong in every feature. Build, inspect, refine, repeat.', note: 'STUDY   →   PRACTICE   →   IMPROVE', art: 'approach' },
  { label: '06 / CONTACT', title: 'Let’s make a', accent: 'connection.', copy: 'For a thoughtful conversation, collaboration, or a note about something I’ve built.', note: 'ANURUDDHAPRATAP245@GMAIL.COM', art: 'contact' },
]

export function CanvasStory() {
  const stageRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const portraitRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!stage || !canvas || !context) return
    gsap.registerPlugin(ScrollTrigger)

    const state = { progress: 0 }
    const draw = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      context.fillStyle = '#080c0a'
      context.fillRect(0, 0, width, height)
      const chapterPosition = state.progress * (chapters.length - 0.0001)
      const index = Math.floor(chapterPosition)
      const chapter = chapters[index]
      const local = chapterPosition - index
      const mobile = width < 760
      const pad = mobile ? 26 : Math.max(52, width * .075)
      const rightX = mobile ? width * .56 : width * .69
      const titleSize = mobile ? Math.min(43, width * .105) : Math.min(78, width * .066)
      const fade = Math.min(1, local * 5, (1 - local) * 5)

      context.strokeStyle = 'rgba(120,190,154,.055)'
      context.lineWidth = 1
      for (let x = 0; x < width; x += 56) { context.beginPath(); context.moveTo(x, 0); context.lineTo(x, height); context.stroke() }
      for (let y = 0; y < height; y += 56) { context.beginPath(); context.moveTo(0, y); context.lineTo(width, y); context.stroke() }
      context.save()
      context.globalAlpha = .27
      context.strokeStyle = '#6bd7c5'
      context.setLineDash([4, 13])
      context.beginPath(); context.moveTo(width * .52, 0); context.lineTo(width * .52, height * .3); context.lineTo(width * .63, height * .43); context.lineTo(width, height * .43); context.stroke()
      context.restore()

      context.globalAlpha = fade
      context.fillStyle = '#b5f36b'
      context.font = '11px monospace'
      context.fillText(chapter.label, pad, height * .2)
      context.fillStyle = '#edf3ef'
      context.font = `500 ${titleSize}px "Space Grotesk", sans-serif`
      const titleY = height * .34
      context.fillText(chapter.title, pad, titleY, width - pad * 2)
      context.fillStyle = '#b5f36b'
      context.fillText(chapter.accent, pad, titleY + titleSize * 1.05, width - pad * 2)
      context.fillStyle = '#a1ada5'
      context.font = `${mobile ? 14 : 17}px "Space Grotesk", sans-serif`
      const words = chapter.copy.split(' ')
      const maxWidth = mobile ? width - pad * 2 : width * .43
      let line = ''; let lineY = titleY + titleSize * 2.05
      for (const word of words) {
        const test = `${line}${word} `
        if (context.measureText(test).width > maxWidth && line) { context.fillText(line, pad, lineY); line = `${word} `; lineY += mobile ? 23 : 29 }
        else line = test
      }
      context.fillText(line, pad, lineY)
      context.fillStyle = '#b5f36b'
      context.font = '10px monospace'
      context.fillText(chapter.note, pad, height * .83, width - pad * 2)

      if (chapter.art === 'portrait' && portraitRef.current?.complete) {
        const image = portraitRef.current
        const imageH = Math.min(height * .8, mobile ? height * .49 : height * .84)
        const imageW = imageH * image.naturalWidth / image.naturalHeight
        const x = mobile ? width - imageW + 36 : rightX - imageW * .48
        const y = height - imageH
        context.drawImage(image, x, y, imageW, imageH)
      } else drawArtwork(context, height, rightX, chapter.art, local)
      context.globalAlpha = 1
      context.fillStyle = '#a1ada5'
      context.font = '10px monospace'
      context.fillText('SCROLL TO FOLLOW THE THREAD', pad, height - 30)
    }

    const trigger = gsap.to(state, {
      progress: 1,
      ease: 'none',
      onUpdate: draw,
      scrollTrigger: { trigger: stage, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
    })
    const resizeObserver = new ResizeObserver(draw)
    resizeObserver.observe(canvas)
    const portrait = portraitRef.current
    portrait?.addEventListener('load', draw)
    draw()
    return () => { trigger.scrollTrigger?.kill(); trigger.kill(); resizeObserver.disconnect(); portrait?.removeEventListener('load', draw) }
  }, [])

  return <>
    <img ref={portraitRef} className="canvas-story__source" src="/images/anuruddha-hero-cutout.png" alt="" aria-hidden="true" />
    <main className="canvas-story" id="main-content">
      <section ref={stageRef} className="canvas-story__stage" aria-label="Anuruddha’s portfolio, told as a scroll-driven story">
        <canvas ref={canvasRef} className="canvas-story__canvas" aria-hidden="true" />
        <div className="canvas-story__accessible">
          <h1>Anuruddha Pratap Singh Kushwah — Developer Portfolio</h1>
          {chapters.map((chapter) => <section key={chapter.label}><h2>{chapter.title} {chapter.accent}</h2><p>{chapter.copy}</p></section>)}
          <a href="https://github.com/anuruddha-pratap-singh/Leetcode_Solutions">LeetCode Solutions repository</a>
          <a href="https://github.com/anuruddha-pratap-singh/Web_Development">Web Development repository</a>
          <a href="mailto:anuruddhapratap245@gmail.com">Email Anuruddha</a>
          <a href="https://github.com/anuruddha-pratap-singh">GitHub profile</a>
        </div>
      </section>
    </main>
  </>
}

function drawArtwork(context: CanvasRenderingContext2D, height: number, x: number, kind: string, progress: number) {
  context.save()
  context.translate(x, height * .5)
  context.strokeStyle = 'rgba(107,215,197,.65)'
  context.fillStyle = 'rgba(181,243,107,.1)'
  context.lineWidth = 1.5
  context.shadowColor = '#6bd7c5'
  context.shadowBlur = 18
  if (kind === 'projects') {
    for (let i = 0; i < 3; i++) { context.strokeRect(-60 + i * 18, -94 + i * 22, 116, 148); context.fillRect(-60 + i * 18, -94 + i * 22, 116, 148) }
    context.fillStyle = '#b5f36b'; context.font = '12px monospace'; context.fillText('01 / 02', -40, 0)
  } else if (kind === 'toolkit') {
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4 + progress * 2; context.beginPath(); context.arc(Math.cos(a) * 95, Math.sin(a) * 95, 5, 0, Math.PI * 2); context.fill(); context.beginPath(); context.moveTo(0, 0); context.lineTo(Math.cos(a) * 95, Math.sin(a) * 95); context.stroke() }
    context.strokeRect(-42, -42, 84, 84)
  } else if (kind === 'contact') {
    context.beginPath(); context.arc(0, 0, 118 + Math.sin(progress * 8) * 8, 0, Math.PI * 2); context.stroke(); context.beginPath(); context.arc(0, 0, 78, 0, Math.PI * 2); context.stroke(); context.fillStyle = '#b5f36b'; context.font = '12px monospace'; context.fillText('LET’S TALK', -35, 5)
  } else {
    for (let i = 0; i < 5; i++) { context.beginPath(); context.arc(0, 0, 20 + i * 24, 0, Math.PI * 2); context.stroke() }
    context.beginPath(); context.moveTo(-110, 0); context.lineTo(110, 0); context.moveTo(0, -110); context.lineTo(0, 110); context.stroke()
  }
  context.restore()
}

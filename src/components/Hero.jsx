import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero({ onStart }) {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden flex items-center">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlays for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(59,130,246,0.15),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-slate-900/40 px-3 py-1.5 text-xs text-blue-200/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            interactive • tech • playful
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Terminal Portfolio
          </h1>
          <p className="mt-4 text-blue-200/90 text-lg md:text-xl">
            Tippe Befehle wie <span className="font-mono bg-blue-500/10 text-blue-200 px-1.5 py-0.5 rounded">help</span>,
            <span className="font-mono bg-blue-500/10 text-blue-200 px-1.5 py-0.5 rounded ml-1">about</span> oder
            <span className="font-mono bg-blue-500/10 text-blue-200 px-1.5 py-0.5 rounded ml-1">projects</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 shadow-lg shadow-blue-500/20 transition"
            >
              <span className="i-heroicons-command" />
              Terminal öffnen
            </button>
            <a
              href="#terminal"
              className="rounded-lg border border-blue-500/30 bg-slate-900/40 hover:bg-slate-900/60 text-blue-200 px-5 py-2.5 transition"
            >
              Zu den Befehlen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

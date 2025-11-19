import React, { useState } from 'react'
import Hero from './components/Hero'
import Terminal from './components/Terminal'
import Footer from './components/Footer'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Subtle background decoration */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(800px_600px_at_80%_20%,rgba(147,197,253,0.12),transparent_60%)]" />

      <Hero onStart={() => setStarted(true)} />

      <div className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-blue-200 mb-6">Terminal</h2>
          <p className="text-slate-300/80 mb-6">Erkunde dein Portfolio im interaktiven Terminal. Tippe <span className="font-mono bg-blue-500/10 text-blue-200 px-1.5 py-0.5 rounded">help</span>, um zu starten.</p>
        </div>
        <Terminal />
      </div>

      <Footer />
    </div>
  )
}

export default App

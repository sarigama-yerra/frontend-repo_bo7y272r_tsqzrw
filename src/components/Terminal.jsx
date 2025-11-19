import React, { useEffect, useRef, useState } from 'react'

const commands = {
  help: {
    description: 'Zeigt alle verfügbaren Befehle',
    action: () => ({
      type: 'lines',
      lines: [
        'Befehle:',
        '  help        – diese Hilfe',
        '  about       – über mich',
        '  skills      – tech stack',
        '  projects    – ausgewählte Projekte',
        '  contact     – Kontaktmöglichkeiten',
        '  clear       – Terminal leeren',
      ],
    }),
  },
  about: {
    description: 'Über mich',
    action: () => ({
      type: 'lines',
      lines: [
        'Hi, ich bin Dein Name – Full‑Stack Developer mit Fokus auf moderne Web‑Apps.',
        'Ich liebe performante UIs, saubere APIs und verspielte Interaktionen.',
      ],
    }),
  },
  skills: {
    description: 'Tech‑Stack',
    action: () => ({
      type: 'lines',
      lines: [
        'Frontend: React, Vite, Tailwind, Framer Motion',
        'Backend: FastAPI, Node, MongoDB',
        'Tools: Git, Docker, CI/CD',
      ],
    }),
  },
  projects: {
    description: 'Projekte',
    action: () => ({
      type: 'html',
      html: `
        <ul class="space-y-2">
          <li>• Terminal Portfolio – diese Seite</li>
          <li>• Realtime Chat – WebSocket Chat App</li>
          <li>• E‑Commerce Demo – Headless Shop mit Stripe</li>
        </ul>
      `,
    }),
  },
  contact: {
    description: 'Kontakt',
    action: () => ({
      type: 'html',
      html: `
        <div class="space-y-2">
          <p>Mail: <a class="text-blue-300 underline" href="mailto:you@example.com">you@example.com</a></p>
          <p>GitHub: <a class="text-blue-300 underline" href="https://github.com/yourname" target="_blank" rel="noreferrer">@yourname</a></p>
          <p>LinkedIn: <a class="text-blue-300 underline" href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">Profil</a></p>
        </div>
      `,
    }),
  },
  clear: {
    description: 'Leert das Terminal',
    action: () => ({ type: 'clear' }),
  },
}

function PromptLine({ path = '~', children }) {
  return (
    <div className="flex gap-2 text-blue-200">
      <span className="text-green-400">visitor</span>
      <span className="text-slate-400">@</span>
      <span className="text-blue-300">portfolio</span>
      <span className="text-slate-500">:</span>
      <span className="text-purple-300">{path}</span>
      <span className="text-slate-500">$</span>
      <span className="text-white flex-1">{children}</span>
    </div>
  )
}

function Terminal() {
  const [history, setHistory] = useState([
    { type: 'lines', lines: [
      'Willkommen im Terminal‑Portfolio. Tippe "help" für alle Befehle.',
    ]},
  ])
  const [input, setInput] = useState('')
  const containerRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' })
  }, [history])

  useEffect(() => { inputRef.current?.focus() }, [])

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    const entry = { type: 'input', value: cmd }

    if (commands[cmd]) {
      const res = commands[cmd].action()
      if (res.type === 'clear') {
        setHistory([])
        return
      }
      setHistory((h) => [...h, entry, res])
    } else {
      setHistory((h) => [
        ...h,
        entry,
        { type: 'lines', lines: [
          `Befehl nicht gefunden: ${cmd}`,
          'Tippe "help" für alle verfügbaren Befehle.',
        ]},
      ])
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    runCommand(input)
    setInput('')
  }

  return (
    <section id="terminal" className="relative">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="rounded-xl border border-blue-500/20 bg-slate-900/60 backdrop-blur shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-blue-500/10 bg-slate-900/60">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
            </div>
            <span className="ml-3 text-sm text-slate-300/80">portfolio — bash</span>
          </div>

          <div ref={containerRef} className="h-[420px] overflow-auto p-4 md:p-6 space-y-3 font-mono text-sm text-slate-200">
            {history.map((item, idx) => {
              if (item.type === 'input') {
                return (
                  <PromptLine key={idx}>{item.value}</PromptLine>
                )
              }
              if (item.type === 'lines') {
                return (
                  <div key={idx} className="space-y-1">
                    {item.lines.map((line, i) => (
                      <div key={i} className="text-slate-200">{line}</div>
                    ))}
                  </div>
                )
              }
              if (item.type === 'html') {
                return (
                  <div key={idx} className="prose prose-invert prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: item.html }} />
                )
              }
              return null
            })}
          </div>

          <form onSubmit={onSubmit} className="border-t border-blue-500/10">
            <div className="flex items-center gap-2 px-4 md:px-6 py-3">
              <PromptLine>
                <input
                  ref={inputRef}
                  className="bg-transparent outline-none flex-1 text-white placeholder:text-slate-500"
                  placeholder="help | about | skills | projects | contact"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoComplete="off"
                />
              </PromptLine>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Terminal

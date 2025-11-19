import React from 'react'

function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Dein Name · All rights reserved</p>
          <div className="flex items-center gap-4">
            <a href="mailto:you@example.com" className="hover:text-blue-300">Email</a>
            <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="hover:text-blue-300">GitHub</a>
            <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="hover:text-blue-300">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

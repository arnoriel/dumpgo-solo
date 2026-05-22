'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

const WA_LINK = `https://wa.me/6289681376410?text=Halo%2C%20saya%20ingin%20konsultasi%20pengiriman%20material%20bangunan.`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Material',   href: '#material' },
    { label: 'Cara Order', href: '#cara-order' },
    { label: 'Harga',      href: '#harga' },
    { label: 'Testimoni',  href: '#testimoni' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mounted && scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-amber flex items-center justify-center font-extrabold text-white text-[13px] tracking-tight shadow-sm">
            DG
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-[15px] text-ink block">DumpGo Solo</span>
            <span className="text-[11px] text-ink-muted font-medium">Material Bangunan</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted hover:text-amber transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-bold text-sm px-4 py-2.5 rounded-xl transition-all hover:shadow-md hover:shadow-amber/20"
        >
          <MessageCircle size={15} />
          Chat WA
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 rounded-lg text-ink hover:bg-border/40 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          mounted && menuOpen ? 'max-h-80 border-t border-border' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-5 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-[15px] text-ink hover:text-amber transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber text-white font-bold text-sm px-4 py-3.5 rounded-xl mt-1 hover:bg-amber-dark transition-colors"
          >
            <MessageCircle size={16} />
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </header>
  )
}

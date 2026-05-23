'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, ChevronDown } from 'lucide-react'

const WA_LINK = `https://wa.me/6289681376410?text=Halo%2C%20saya%20ingin%20konsultasi%20pengiriman%20material%20bangunan.`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const handleClickOutside = (e: MouseEvent) => {
      if (pillRef.current && !pillRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { label: 'Material',   href: '#material' },
    { label: 'Cara Order', href: '#cara-order' },
    { label: 'Harga',      href: '#harga' },
    { label: 'Testimoni',  href: '#testimoni' },
    { label: 'Lokasi',     href: '#lokasi' },
  ]

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <div
        ref={pillRef}
        className="pointer-events-auto w-full max-w-3xl"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(26,23,20,0.13))' }}
      >
        {/* Main pill */}
        <div
          className="w-full rounded-[28px] overflow-hidden transition-all duration-300"
          style={{
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(228,221,210,0.7)',
          }}
        >
          {/* Pill top row */}
          <div className="flex items-center justify-between px-4 py-2.5">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 flex-shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              <div
                className="w-8 h-8 rounded-[10px] flex items-center justify-center font-extrabold text-white text-[12px] tracking-tight flex-shrink-0"
                style={{ background: '#E07A2F' }}
              >
                DG
              </div>
              <div className="leading-none">
                <span className="font-extrabold text-[14px] text-ink block">DumpGo Solo</span>
                <span className="text-[10px] font-medium" style={{ color: '#6B6560' }}>Material Bangunan</span>
              </div>
            </a>

            {/* Desktop nav links — hidden on mobile */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-semibold px-3 py-1.5 rounded-full transition-all duration-150"
                  style={{ color: '#6B6560' }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.color = '#E07A2F'
                    ;(e.currentTarget as HTMLElement).style.background = '#FBF0E3'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.color = '#6B6560'
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side: CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 text-white font-bold text-[13px] px-4 py-2 rounded-full transition-all duration-150"
                style={{ background: '#E07A2F' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#C4671F'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#E07A2F'}
              >
                <MessageCircle size={14} />
                Chat WA
              </a>

              {/* Mobile toggle */}
              <button
                className="md:hidden flex items-center gap-1.5 font-bold text-[13px] px-3 py-2 rounded-full transition-all duration-200"
                style={{
                  background: menuOpen ? '#FBF0E3' : 'transparent',
                  color: menuOpen ? '#E07A2F' : '#1A1714',
                }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className="text-[12px] font-semibold">Menu</span>
                <ChevronDown
                  size={13}
                  className="transition-transform duration-200"
                  style={{ transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
            </div>
          </div>

          {/* Mobile expanded menu */}
          <div
            className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: mounted && menuOpen ? '320px' : '0px',
              opacity: mounted && menuOpen ? 1 : 0,
            }}
          >
            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(228,221,210,0.7)', margin: '0 16px' }} />

            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between font-semibold text-[14px] px-3 py-2.5 rounded-xl transition-all duration-150"
                  style={{ color: '#1A1714', animationDelay: `${i * 40}ms` }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.background = '#FBF0E3'
                    ;(e.currentTarget as HTMLElement).style.color = '#E07A2F'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                    ;(e.currentTarget as HTMLElement).style.color = '#1A1714'
                  }}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center gap-2 text-white font-bold text-[14px] px-4 py-3 rounded-2xl transition-all duration-150"
                style={{ background: '#E07A2F' }}
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle size={15} />
                Chat WhatsApp Sekarang
              </a>
            </div>

            {/* Bottom padding */}
            <div className="h-2" />
          </div>
        </div>
      </div>
    </div>
  )
}
import { MapPin, Clock, Phone } from 'lucide-react'

const WA_LINK = `https://wa.me/6289681376410?text=Halo%2C%20saya%20ingin%20konsultasi%20pengiriman%20material%20bangunan.`

const materials = ['Pasir Bangunan', 'Batu Sungai', 'Batu Split', 'Tanah Urug', 'Sirtu']
const areas     = ['Solo', 'Sukoharjo', 'Karanganyar', 'Klaten', 'Boyolali', 'Wonogiri', 'Sragen']

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">

      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-amber flex items-center justify-center font-extrabold text-white text-[13px]">
              DG
            </div>
            <div>
              <p className="font-extrabold text-[15px] text-white leading-tight">DumpGo Solo</p>
              <p className="text-[11px] text-white/40 leading-tight">Material Bangunan</p>
            </div>
          </div>
          <p className="text-white/40 text-[13px] leading-relaxed mb-5 max-w-[220px]">
            Jasa pengiriman pasir dan material bangunan terpercaya untuk area Solo Raya.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-amber text-[13px] font-semibold hover:text-amber-dark transition-colors"
          >
            Hubungi Kami →
          </a>
        </div>

        {/* Material */}
        <div>
          <h4 className="font-bold text-white text-[13px] mb-4">Material</h4>
          <ul className="flex flex-col gap-2.5">
            {materials.map((m) => (
              <li key={m}>
                <a href="#material" className="text-white/40 text-[13px] hover:text-amber transition-colors">
                  {m}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Area */}
        <div>
          <h4 className="font-bold text-white text-[13px] mb-4">Area</h4>
          <ul className="flex flex-col gap-2.5">
            {areas.map((a) => (
              <li key={a} className="text-white/40 text-[13px]">{a}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white text-[13px] mb-4">Kontak</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2.5">
              <Phone size={14} className="text-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] text-white/30 mb-0.5">WhatsApp</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="text-white/60 text-[13px] hover:text-white transition-colors">
                  +62 896-8137-6410
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock size={14} className="text-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] text-white/30 mb-0.5">Jam Operasional</p>
                <p className="text-white/60 text-[13px]">Setiap Hari<br />07.00 – 20.00 WIB</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="text-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] text-white/30 mb-0.5">Area</p>
                <p className="text-white/60 text-[13px]">Solo Raya &amp; Sekitarnya</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-[12px]">
            © {new Date().getFullYear()} DumpGo Solo. Hak cipta dilindungi.
          </p>
          <p className="text-white/15 text-[12px]">
            Jasa Pengiriman Material Bangunan Solo Raya
          </p>
        </div>
      </div>

    </footer>
  )
}

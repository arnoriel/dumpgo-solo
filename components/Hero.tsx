import { MapPin, CheckCircle, ArrowRight, Truck, Clock } from 'lucide-react'
import Image from 'next/image'

const WA_LINK = `https://wa.me/6289681376410?text=Halo%2C%20saya%20ingin%20konsultasi%20pengiriman%20material%20bangunan.`

const materials = [
  'Pasir Bangunan',
  'Batu Split',
  'Batu Sungai',
  'Tanah Urug',
  'Sirtu',
]

const badges = [
  { icon: CheckCircle, text: 'Fast respon WA' },
  { icon: CheckCircle, text: 'Harga transparan' },
  { icon: CheckCircle, text: 'Antar ke lokasi' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg flex items-center pt-20 pb-16 overflow-hidden">
      {/* Warm decorative blob — right side desktop */}
      <div
        className="absolute top-0 right-0 w-[50%] h-full bg-amber-soft rounded-l-[64px] hidden lg:block -z-0"
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">

          {/* ── LEFT COPY ── */}
          <div className="fade-up">

            <h1 className="text-[clamp(2.2rem,4.8vw,3.8rem)] font-extrabold text-ink leading-[1.07] tracking-tight mb-5">
              Kirim Pasir &<br />
              Material Bangunan<br />
              <span className="text-amber">ke Lokasi Kamu</span>
            </h1>

            <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-[440px] mb-8">
              DumpGo Solo dijalankan secara personal untuk melayani pengiriman
              material bangunan di area Solo Raya. Pesan lewat WA, kami konfirmasi
              cepat, dan material langsung dikirim ke titik kamu.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5 mb-9">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink shadow-sm"
                >
                  <Icon size={13} className="text-amber flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-amber hover:bg-amber-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-amber/25"
              >
                {/* WhatsApp icon */}
                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp Sekarang
              </a>
              <a
                href="#harga"
                className="inline-flex items-center gap-2 bg-white hover:bg-bg border border-border text-ink font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-sm"
              >
                Lihat Estimasi Harga
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* ── RIGHT CARD ── */}
          <div className="relative fade-up" style={{ animationDelay: '0.12s' }}>
            <div className="bg-white rounded-2xl shadow-xl shadow-ink/[0.07] border border-border p-6">

              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-amber-soft rounded-xl flex items-center justify-center flex-shrink-0">
                  <Truck size={19} className="text-amber" />
                </div>
                <div>
                  <p className="font-bold text-ink text-[14px]">Material Tersedia</p>
                  <p className="text-[12px] text-ink-muted">Siap kirim ke lokasi kamu</p>
                </div>
              </div>

              {/* Material list */}
              <div className="divide-y divide-border">
                {materials.map((m, i) => (
                  <div key={m} className="flex items-center gap-3 py-2.5">
                    <span className="w-6 h-6 bg-amber-soft rounded-lg flex items-center justify-center text-[11px] font-extrabold text-amber flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-[14px] font-medium text-ink">{m}</span>
                  </div>
                ))}
              </div>

              {/* Ops hours */}
              <div className="mt-5 bg-amber-soft rounded-xl p-4 flex items-center gap-3">
                <Clock size={17} className="text-amber flex-shrink-0" />
                <div>
                  <p className="text-[12px] text-amber font-semibold">Jam Operasional</p>
                  <p className="text-[14px] text-ink font-bold">Setiap Hari, 07.00 – 20.00 WIB</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-3 bg-amber text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-full shadow-md shadow-amber/30 whitespace-nowrap">
              3+ Tahun Melayani
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

import { MapPin, Package, MessageCircle, Info } from 'lucide-react'

const WA_LINK = `https://wa.me/6289681376410?text=Halo%2C%20saya%20ingin%20tanya%20harga%20material%20sesuai%20lokasi%20saya.`

const prices = [
  { material: 'Pasir Bangunan', price: 'Mulai Rp 300.000', per: 'per ritasi' },
  { material: 'Batu Split',     price: 'Mulai Rp 350.000', per: 'per ritasi' },
  { material: 'Batu Sungai',    price: 'Mulai Rp 400.000', per: 'per ritasi' },
  { material: 'Tanah Urug',     price: 'Hubungi kami',     per: 'tergantung jarak' },
  { material: 'Sirtu',          price: 'Hubungi kami',     per: 'tergantung volume' },
]

const notes = [
  { icon: MapPin,    text: 'Harga berubah sesuai jarak lokasi pengirimanmu' },
  { icon: Package,   text: 'Volume material juga mempengaruhi total biaya' },
  { icon: MessageCircle, text: 'Konsultasi gratis lewat WA sebelum order' },
]

export default function Pricing() {
  return (
    <section id="harga" className="bg-bg py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* Left copy */}
          <div>
            <p className="text-amber font-semibold text-sm mb-2">Estimasi harga</p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-ink leading-tight tracking-tight mb-4">
              Harga jujur,<br />gak ada kejutan
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-8">
              Harga di bawah adalah estimasi awal. Harga finalnya disesuaikan
              dengan lokasi dan volume order kamu dan selalu dikonfirmasi dulu
              sebelum pengiriman.
            </p>

            {/* Notes */}
            <div className="flex flex-col gap-4 mb-8">
              {notes.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-soft rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-amber" />
                  </div>
                  <p className="text-ink-muted text-[13.5px] leading-relaxed pt-1">{text}</p>
                </div>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-amber/20"
            >
              <MessageCircle size={16} />
              Tanyakan Harga Lokasi Kamu
            </a>
          </div>

          {/* Right: price cards */}
          <div className="flex flex-col gap-3">
            {prices.map((p) => (
              <div
                key={p.material}
                className="card-lift bg-white rounded-2xl border border-border px-5 py-4 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-bold text-ink text-[15px]">{p.material}</p>
                  <p className="text-ink-faint text-[12px] mt-0.5">{p.per}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-extrabold text-amber text-base">{p.price}</p>
                </div>
              </div>
            ))}

            {/* Guarantee note */}
            <div className="bg-amber-soft border border-amber/20 rounded-2xl p-5 mt-1">
              <div className="flex items-center gap-2 mb-1.5">
                <Info size={14} className="text-amber flex-shrink-0" />
                <p className="font-bold text-amber text-[13px]">Harga dijamin transparan</p>
              </div>
              <p className="text-ink-muted text-[13px] leading-relaxed">
                Tidak ada biaya tambahan yang tiba-tiba muncul. Semua biaya
                dikonfirmasi sebelum order berjalan.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

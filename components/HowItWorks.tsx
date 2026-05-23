import { MessageCircle, ClipboardList, Truck } from 'lucide-react'

const WA_LINK = `https://wa.me/6289681376410?text=Halo%2C%20saya%20ingin%20pesan%20material%20bangunan.`

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Chat WA dulu',
    desc: 'Kamu tinggal chat WA dan ceritain kebutuhanmu jenis material apa, berapa banyak, dan lokasinya di mana.',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Konfirmasi & estimasi harga',
    desc: 'Kami balas cepat, kasih estimasi harga sesuai lokasi kamu, dan konfirmasi ketersediaan material. Gak ada biaya tersembunyi.',
  },
  {
    icon: Truck,
    number: '03',
    title: 'Material dikirim ke lokasi',
    desc: 'Setelah deal, material langsung dijadwalkan dan dikirim pakai dump truck langsung ke titik proyek atau rumah kamu.',
  },
]

export default function HowItWorks() {
  return (
    <section id="cara-order" className="bg-white py-20 md:py-28 border-y border-border">
      <div className="max-w-5xl mx-auto px-5">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-center">

          {/* Left */}
          <div>
            <p className="text-amber font-semibold text-sm mb-2">Cara pesan</p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-ink leading-tight tracking-tight mb-4">
              Pesan material itu<br />gampang, cukup 3 langkah
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-6">
              Gak perlu datang ke mana-mana, gak perlu isi form panjang.
              Semua bisa diselesaikan lewat WA dari tanya harga sampai pengiriman.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-amber/20"
            >
              Mulai Chat WA
            </a>
          </div>

          {/* Right: steps */}
          <div className="flex flex-col gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex items-start gap-4">
                  {/* Icon box */}
                  <div className="w-12 h-12 bg-amber-soft rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-amber" />
                  </div>

                  <div className="pt-0.5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-extrabold text-amber-dark/50 tracking-widest">{step.number}</span>
                      <h3 className="font-bold text-ink text-[15px]">{step.title}</h3>
                    </div>
                    <p className="text-ink-muted text-[13.5px] leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="absolute" aria-hidden />
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

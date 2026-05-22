import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Pak Rudi',
    role: 'Kontraktor · Sukoharjo',
    text: 'Alhamdulillah material cepat datang, proyek jadi lanjut tanpa nunggu lama. Armadanya juga bersih dan tepat waktu.',
    initial: 'R',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Bu Sari',
    role: 'Pemilik Rumah · Solo',
    text: 'Driver responsif dan pengirimannya aman sampai lokasi. Pasir yang dikirim juga sesuai pesanan, tidak ada selisih.',
    initial: 'S',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    name: 'Mas Teguh',
    role: 'Pemborong · Klaten',
    text: 'Sudah langganan kirim pasir dan batu untuk proyek rumah. Harga konsisten dan tidak ada perubahan mendadak.',
    initial: 'T',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Pak Budi',
    role: 'Developer · Karanganyar',
    text: 'Pesanan sesuai dan harga masih masuk akal. Koordinasi pengiriman ke beberapa titik proyek juga lancar-lancar aja.',
    initial: 'B',
    color: 'bg-amber-100 text-amber-700',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} fill="#E07A2F" className="text-amber" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-white py-20 md:py-28 border-y border-border">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <div className="mb-12 max-w-lg">
          <p className="text-amber font-semibold text-sm mb-2">Kata mereka</p>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-ink leading-tight tracking-tight mb-3">
            Customer yang sudah pernah order
          </h2>
          <p className="text-ink-muted text-base leading-relaxed">
            Kepercayaan customer yang bikin kami terus semangat melayani setiap hari.
          </p>
        </div>

        {/* Chat bubble grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-lift bg-bg rounded-2xl p-5 border border-border"
            >
              {/* Bubble */}
              <div className="bg-white rounded-xl rounded-tl-sm p-4 mb-4 shadow-sm border border-border">
                <p className="text-ink text-[14.5px] leading-relaxed">{t.text}</p>
              </div>

              {/* Sender info */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${t.color}`}>
                  {t.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-ink text-[13px] truncate">{t.name}</p>
                  <p className="text-ink-muted text-[12px] truncate">{t.role}</p>
                </div>
                <Stars />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-ink-faint text-[12.5px] italic">
          * Screenshot percakapan WhatsApp asli segera tersedia.
        </p>

      </div>
    </section>
  )
}

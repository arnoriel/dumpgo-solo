import Image from 'next/image'
import { Tag } from 'lucide-react'

const WA_LINK = `https://wa.me/6289681376410?text=Halo%2C%20saya%20ingin%20tanya%20tentang%20material%20bangunan.`

const materials = [
  {
    name: 'Pasir Bangunan',
    desc: 'Paling sering diminta. Cocok buat cor, plester, pondasi, dan pembangunan rumah. Kualitasnya bersih dan siap pakai.',
    img: 'https://images.unsplash.com/photo-1694521788304-1d42378498da?w=900&auto=format&fit=crop&q=60',
    tag: 'Paling Diminati',
  },
  {
    name: 'Batu Sungai',
    desc: 'Untuk pondasi bangunan, talud, dan kebutuhan konstruksi lainnya. Ukuran bervariasi, tinggal bilang kebutuhanmu.',
    img: 'https://images.unsplash.com/photo-1692253060760-ea990a15d843?w=900&auto=format&fit=crop&q=60',
    tag: null,
  },
  {
    name: 'Batu Split',
    desc: 'Material andalan buat pengecoran. Ukurannya seragam jadi hasil cor lebih padat dan kuat.',
    img: 'https://images.unsplash.com/photo-1620914695139-9507be60a425?w=900&auto=format&fit=crop&q=60',
    tag: null,
  },
  {
    name: 'Tanah Urug',
    desc: 'Buat ratain lahan atau nambah tinggi permukaan tanah. Bisa pesan volume kecil sampai besar.',
    img: 'https://images.unsplash.com/photo-1606811883055-0d24f05c8bcd?w=900&auto=format&fit=crop&q=60',
    tag: null,
  },
  {
    name: 'Sirtu',
    desc: 'Campuran pasir dan batu, cocok buat jalan tanah, urugan, dan proyek konstruksi skala besar.',
    img: 'https://images.unsplash.com/photo-1681880511033-b9582a379ce2?w=900&auto=format&fit=crop&q=60',
    tag: null,
  },
  {
    name: 'Material Proyek Custom',
    desc: 'Butuh material dalam jumlah besar atau kombinasi? Kami siap koordinasikan sesuai kebutuhan proyekmu.',
    img: 'https://images.unsplash.com/photo-1613744358026-dd879eba3a8a?w=900&auto=format&fit=crop&q=60',
    tag: 'Custom Order',
  },
]

export default function Services() {
  return (
    <section id="material" className="bg-bg py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <div className="mb-12">
          <p className="text-amber font-semibold text-sm mb-2">Material yang tersedia</p>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-ink leading-tight tracking-tight mb-3">
            Semua material yang kamu butuhkan,<br className="hidden md:block" /> siap dikirim ke lokasi
          </h2>
          <p className="text-ink-muted text-base max-w-md leading-relaxed">
            Mau bangun rumah, renovasi, atau urugan lahan? Semua tersedia dan bisa langsung dikirim pakai dump truck.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {materials.map((mat) => (
            <div
              key={mat.name}
              className="card-lift bg-white rounded-2xl overflow-hidden border border-border group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={mat.img}
                  alt={mat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/20 transition-colors duration-300" />
                {mat.tag && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-amber text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    <Tag size={10} />
                    {mat.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-ink text-base mb-1.5">{mat.name}</h3>
                <p className="text-ink-muted text-[13px] leading-relaxed">{mat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-ink-muted text-sm mb-4">Tidak yakin berapa kubikasi yang kamu butuhkan?</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-amber/20"
          >
            Konsultasi Gratis Lewat WA
          </a>
        </div>

      </div>
    </section>
  )
}

import Image from 'next/image'
import { Camera } from 'lucide-react'

const docs = [
  {
    label: 'Material tiba di lokasi',
    sublabel: 'Proses bongkar muat',
    img: 'https://images.unsplash.com/photo-1689596312367-39a4461504c1?w=900&auto=format&fit=crop&q=60',
    tag: 'Pengiriman',
  },
  {
    label: 'Armada dump truck',
    sublabel: 'Siap jalan setiap hari',
    img: 'https://images.unsplash.com/photo-1686945127938-0296f10937ed?w=900&auto=format&fit=crop&q=60',
    tag: 'Armada',
  },
  {
    label: 'Kondisi material',
    sublabel: 'Kualitas bersih dan siap pakai',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    tag: 'Material',
  },
]

export default function Gallery() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-10 flex-wrap">
          <div>
            <p className="text-amber font-semibold text-sm mb-2">Dokumentasi</p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-ink leading-tight tracking-tight">
              Bukti nyata, bukan cuma kata-kata
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-amber-soft border border-amber/20 rounded-xl px-4 py-2.5 self-end">
            <Camera size={15} className="text-amber flex-shrink-0" />
            <span className="text-[13px] text-amber font-semibold">Foto asli segera diperbarui</span>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {docs.map((doc) => (
            <div
              key={doc.label}
              className="card-lift group relative rounded-2xl overflow-hidden border border-border"
            >
              <div className="relative h-64">
                <Image
                  src={doc.img}
                  alt={doc.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

                {/* Tag */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-ink font-bold text-[11px] px-2.5 py-1 rounded-full">
                  {doc.tag}
                </span>

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-[15px] leading-tight">{doc.label}</p>
                  <p className="text-white/60 text-[12px] mt-0.5">{doc.sublabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

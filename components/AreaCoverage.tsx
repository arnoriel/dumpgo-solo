import { MapPin, Navigation } from 'lucide-react'

const areas = ['Solo', 'Sukoharjo', 'Karanganyar', 'Klaten', 'Boyolali', 'Wonogiri', 'Sragen']

export default function AreaCoverage() {
  return (
    <section id="area" className="bg-bg py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">

          {/* Left */}
          <div>
            <p className="text-amber font-semibold text-sm mb-2">Area layanan</p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-ink leading-tight tracking-tight mb-4">
              Kamu di mana?<br />Kami antar ke sana.
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-6">
              Dari pusat kota Solo sampai kabupaten sekitarnya — selama masih area
              Solo Raya, armada dump truck kami siap menjangkau lokasi proyekmu.
            </p>

            {/* Area pills */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-4 py-2 text-[13px] font-semibold text-ink hover:border-amber hover:text-amber transition-colors"
                >
                  <MapPin size={12} className="text-amber" />
                  {area}
                </span>
              ))}
            </div>

            <p className="text-ink-muted text-sm">
              Area di luar Solo Raya? Hubungi kami dulu, kami lihat apakah bisa dijangkau.
            </p>
          </div>

          {/* Right: 3 service highlight cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: Navigation,
                title: 'Pengiriman Material Bangunan',
                desc: 'Pasir, batu split, batu sungai, tanah urug, sirtu — langsung ke lokasi proyek atau rumah kamu.',
              },
              {
                icon: MapPin,
                title: 'Proyek Konstruksi & Renovasi',
                desc: 'Bangun rumah, ruko, cor jalan, atau urugan lahan — semua bisa kami support dari sisi material.',
              },
              {
                icon: Navigation,
                title: 'Konsultasi Kebutuhan Material',
                desc: 'Tidak yakin butuh berapa? Kami bantu estimasi kubikasi sesuai ukuran proyek kamu, gratis.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-lift bg-white rounded-2xl border border-border p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-soft rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={18} className="text-amber" />
                </div>
                <div>
                  <h3 className="font-bold text-ink text-[14.5px] mb-1">{title}</h3>
                  <p className="text-ink-muted text-[13px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

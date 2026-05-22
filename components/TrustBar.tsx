import { PackageCheck, MapPin, Star, Phone } from 'lucide-react'

const stats = [
  { icon: PackageCheck, value: '500+',    label: 'Pengiriman selesai' },
  { icon: MapPin,        value: '7 Kota', label: 'Area terlayani' },
  { icon: Star,          value: '4.9',    label: 'Rating dari customer' },
  { icon: Phone,         value: '< 5 Menit', label: 'Rata-rata respon WA' },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-border py-10">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-start gap-3.5">
              <div className="w-10 h-10 bg-amber-soft rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={18} className="text-amber" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-ink leading-tight">{value}</p>
                <p className="text-[13px] text-ink-muted leading-tight mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

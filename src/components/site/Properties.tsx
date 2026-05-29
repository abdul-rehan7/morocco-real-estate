import { motion } from "framer-motion";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";

const properties = [
  {
    img: p1,
    name: "Riad Yasmina",
    location: "Medina",
    price: "€1,850 / night",
    features: "6 Bedrooms · Plunge Pool · Hammam",
  },
  {
    img: p2,
    name: "Dar Sahara",
    location: "Hivernage",
    price: "€2,400 / night",
    features: "5 Suites · Private Chef · Spa",
  },
  {
    img: p3,
    name: "Villa Atlas",
    location: "Palmeraie",
    price: "€3,200 / night",
    features: "8 Bedrooms · 30m Pool · Tennis",
  },
  {
    img: p4,
    name: "Riad Al Fassia",
    location: "Kasbah",
    price: "€1,600 / night",
    features: "4 Bedrooms · Rooftop · Library",
  },
];

export function Properties() {
  return (
    <section id="properties" className="px-6 md:px-12 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <p className="eyebrow text-gold mb-4">The Collection</p>
          <h2 className="font-serif text-4xl md:text-6xl max-w-2xl leading-[1.05]">
            Four residences. <span className="italic">One unrepeatable city.</span>
          </h2>
        </div>
        <p className="eyebrow text-muted-foreground">04 Properties / 2026</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
        {properties.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-background overflow-hidden cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-foreground">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={1200}
                height={1500}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-700" />
              <div className="absolute top-6 left-6 eyebrow text-background bg-foreground/70 px-3 py-1.5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="eyebrow text-gold inline-flex items-center gap-2 border-b border-gold pb-1">
                  View Residence →
                </span>
              </div>
            </div>
            <div className="flex items-start justify-between p-6 md:p-8">
              <div>
                <p className="eyebrow text-muted-foreground mb-2">{p.location}</p>
                <h3 className="font-serif text-2xl md:text-3xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.features}</p>
              </div>
              <p className="font-serif text-lg md:text-xl whitespace-nowrap">{p.price}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

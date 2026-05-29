import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="px-6 md:px-12 pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <p className="eyebrow text-gold mb-6">— Find Us</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Derb El Hammam,<br />
              <span className="italic">Medina — 40000.</span>
            </h2>
            <p className="mt-6 text-background/70 max-w-md">
              Five minutes from Jemaa el-Fnaa. A world away from everything else.
            </p>
            <div className="mt-10 flex items-center gap-5">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="border border-background/30 p-3 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-background/15">
              <iframe
                title="Marrakech location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-8.005%2C31.620%2C-7.965%2C31.640&layer=mapnik&marker=31.630%2C-7.985"
                className="w-full h-full grayscale contrast-125 opacity-80"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-foreground text-background eyebrow px-3 py-2 flex items-center gap-2 border border-background/20">
                <MapPin className="w-3 h-3" strokeWidth={2} />
                31.63°N · 7.98°W
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 eyebrow text-background/50">
          <p>© 2026 Luxury Home Marrakech — All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

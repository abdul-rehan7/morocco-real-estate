import { motion } from "framer-motion";
import about from "@/assets/about.jpg";

const stats = [
  { v: "12", l: "Years curating" },
  { v: "04", l: "Private estates" },
  { v: "38", l: "Staff on call" },
  { v: "100%", l: "Bespoke service" },
];

export function About() {
  return (
    <section id="about" className="bg-foreground text-background px-6 md:px-12 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="aspect-[4/5] overflow-hidden bg-background/10">
            <img
              src={about}
              alt="Moroccan mint tea ceremony"
              loading="lazy"
              width={1400}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <p className="eyebrow text-gold mb-6">— Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              Authentic Moroccan<br />
              <span className="italic">Hospitality.</span>
            </h2>
            <div className="mt-10 max-w-xl space-y-6 text-background/75 leading-relaxed">
              <p>
                We are not a hotel. We are stewards of four private homes — each
                with its own butler, chef, and a team trained in the quiet art of
                anticipation.
              </p>
              <p>
                From the first glass of mint tea to the last lantern dimmed on the
                rooftop, every gesture is deliberate. Every silence, intentional.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-background/15"
          >
            {stats.map((s) => (
              <div key={s.l} className="bg-foreground p-6">
                <p className="font-serif text-4xl md:text-5xl text-gold">{s.v}</p>
                <p className="eyebrow text-background/60 mt-3">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

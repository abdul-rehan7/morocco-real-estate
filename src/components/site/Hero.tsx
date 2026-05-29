import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { src: hero1, caption: "Riad Al Mansour — Medina" },
  { src: hero2, caption: "Villa Atlas — Palmeraie" },
  { src: hero3, caption: "Dar Noor — Hivernage" },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-foreground">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4 }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img
            src={slides[i].src}
            alt={slides[i].caption}
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 md:px-12 pt-32 pb-10 text-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="eyebrow text-gold mb-6">Private Residences · Est. 2014</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
            Experience the<br />
            <span className="italic">Soul of Marrakech</span>
          </h1>
          <p className="mt-8 max-w-md text-base md:text-lg text-background/80 leading-relaxed">
            A curated collection of riads and villas, staffed by a private team
            and shaped by generations of Moroccan craft.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#inquire"
              className="group inline-flex items-center gap-3 bg-gold text-gold-foreground px-7 py-4 eyebrow hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              Inquire Now
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#properties" className="eyebrow text-background/80 hover:text-gold transition-colors">
              View Residences
            </a>
          </div>
        </motion.div>

        <div className="flex items-end justify-between">
          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className="h-px w-12 bg-background/40 relative overflow-hidden"
              >
                {idx === i && (
                  <motion.span
                    key={`bar-${i}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-0 origin-left bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
          <motion.p
            key={`cap-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-background/70"
          >
            {String(i + 1).padStart(2, "0")} — {slides[i].caption}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const links = [
  { label: "Properties", href: "#properties" },
  { label: "Philosophy", href: "#about" },
  { label: "Inquire", href: "#inquire" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-background"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Luxury Home <span className="text-gold">Marrakech</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 eyebrow">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#inquire"
          className="md:hidden eyebrow border border-current px-3 py-2"
        >
          Inquire
        </a>
      </div>
    </motion.header>
  );
}

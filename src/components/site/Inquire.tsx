import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const fields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "e.g. Eleanor Whitcomb" },
  { name: "email", label: "Email", type: "email", placeholder: "you@domain.com" },
  { name: "arrival", label: "Arrival", type: "date" },
  { name: "departure", label: "Departure", type: "date" },
  { name: "guests", label: "Guests", type: "number", placeholder: "4" },
  { name: "property", label: "Preferred Residence", type: "text", placeholder: "No preference" },
];

export function Inquire() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!name || !email) {
      toast.error("Please share your name and email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      form.reset();
      toast.success("Inquiry received. Our concierge will reply within 12 hours.");
    }, 900);
  };

  return (
    <section id="inquire" className="px-6 md:px-12 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow text-gold mb-6">— Plan Your Stay</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
            Begin the<br /><span className="italic">conversation.</span>
          </h2>
          <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
            A member of our concierge team will reply personally — usually within
            twelve hours. No automated replies, no waitlists.
          </p>
          <div className="mt-12 space-y-4 text-sm">
            <div className="flex justify-between border-b border-foreground/15 pb-3">
              <span className="eyebrow text-muted-foreground">Concierge</span>
              <span>concierge@luxuryhomemarrakech.com</span>
            </div>
            <div className="flex justify-between border-b border-foreground/15 pb-3">
              <span className="eyebrow text-muted-foreground">Direct</span>
              <span>+212 524 38 80 00</span>
            </div>
            <div className="flex justify-between border-b border-foreground/15 pb-3">
              <span className="eyebrow text-muted-foreground">Hours</span>
              <span>24 / 7, GMT+1</span>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7 border border-foreground/15 p-8 md:p-12 bg-background"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            {fields.map((f) => (
              <label key={f.name} className="block">
                <span className="eyebrow text-muted-foreground">{f.label}</span>
                <input
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 text-base outline-none focus:border-gold transition-colors placeholder:text-muted-foreground/50"
                />
              </label>
            ))}
            <label className="block md:col-span-2">
              <span className="eyebrow text-muted-foreground">Special Requirements</span>
              <textarea
                name="requirements"
                rows={3}
                placeholder="Private chef, airport transfer, in-villa hammam ritual…"
                className="mt-3 w-full bg-transparent border-b border-foreground/30 py-3 text-base outline-none focus:border-gold transition-colors resize-none placeholder:text-muted-foreground/50"
              />
            </label>
          </div>
          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-xs text-muted-foreground max-w-sm">
              By submitting you agree to be contacted by our concierge regarding
              your stay. We never share your details.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 eyebrow hover:bg-gold hover:text-gold-foreground transition-colors duration-500 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Inquiry"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

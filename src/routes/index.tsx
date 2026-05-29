import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Properties } from "@/components/site/Properties";
import { About } from "@/components/site/About";
import { Inquire } from "@/components/site/Inquire";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Home Marrakech — Private Riads & Villas" },
      {
        name: "description",
        content:
          "A curated collection of private Moroccan riads and luxury villas in Marrakech. Bespoke service, authentic hospitality, unrepeatable stays.",
      },
      { property: "og:title", content: "Luxury Home Marrakech" },
      {
        property: "og:description",
        content: "Experience the soul of Marrakech in four private residences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "hsl(0 0% 7%)",
            color: "hsl(0 0% 98%)",
            border: "1px solid hsl(0 0% 100% / 0.1)",
            borderRadius: "0px",
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            letterSpacing: "0.04em",
          },
        }}
      />
      <Nav />
      <Hero />
      <Properties />
      <About />
      <Inquire />
      <Footer />
    </main>
  );
}

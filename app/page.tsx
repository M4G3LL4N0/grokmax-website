import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pipeline from "@/components/Pipeline";
import Honest from "@/components/Honest";
import CLI from "@/components/CLI";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Pipeline />
      <Honest />
      <CLI />
      <Cta />
      <Footer />
    </main>
  );
}
import { Capabilities } from "./components/Capabilities";
import { Categories } from "./components/Categories";
import { Compliance } from "./components/Compliance";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Nav, TopBar } from "./components/Nav";
import { Pillars } from "./components/Pillars";
import { Presence } from "./components/Presence";
import { Process } from "./components/Process";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Pillars />
        <Capabilities />
        <Categories />
        <Stats />
        <Presence />
        <Process />
        <Compliance />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

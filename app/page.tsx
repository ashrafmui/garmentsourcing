import { Capabilities } from "./components/Capabilities";
import { Categories } from "./components/Categories";
import { ClothingRack } from "./components/ClothingRack";
import { Compliance } from "./components/Compliance";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Nav, TopBar } from "./components/Nav";
import { Presence } from "./components/Presence";
import { Process } from "./components/Process";
import { Reveal } from "./components/Reveal";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <Hero />
        {/* <Marquee /> */}
        <Reveal><Capabilities /></Reveal>
        <ClothingRack />
        <Reveal><Categories /></Reveal>
        <Reveal><Stats /></Reveal>
        <Reveal><Presence /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><Compliance /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><CTA /></Reveal>
      </main>
      <Footer />
    </>
  );
}

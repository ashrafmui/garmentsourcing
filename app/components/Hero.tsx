import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "./icons";
import { TypedTitle } from "./TypedTitle";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b hairline">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" aria-hidden />
      <div className="absolute inset-0 -z-10 grain opacity-60" aria-hidden />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 weave opacity-40 lg:block" aria-hidden />

      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-16 lg:pt-28">
        <div className="max-w-[1100px]">
          <div className="mb-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-bone/80">
            <span className="inline-block h-px w-8 bg-bone/70" />
            Buying house · est. on the floor.
          </div>

          <TypedTitle />

          <p className="mt-10 max-w-xl text-[17px] leading-[1.6] text-bone/85">
            Merchandising in New York. Production, QA, and compliance in
            Dhaka. The seam between them is where your collection ships on
            time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-bone px-5 py-3 text-[13px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-madder hover:text-bone"
            >
              Start a project
              <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#capabilities"
              className="group inline-flex items-center gap-2 rounded-full border border-bone/50 px-5 py-3 text-[13px] font-medium uppercase tracking-[0.18em] text-bone hover:bg-bone hover:text-ink"
            >
              Our capabilities
              <IconArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

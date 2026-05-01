import Link from "next/link";
import { IconArrowRight } from "./icons";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-b hairline bg-ink text-bone">
      <div className="absolute inset-0 weave opacity-15" aria-hidden />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-x-6 px-6 py-24 md:py-32">
        <div className="col-span-12 lg:col-span-7">
          <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-bone/60">
            <span className="inline-block h-px w-8 bg-bone" />
            Build with us
          </div>
          <h2 className="font-display text-5xl font-light leading-[1] tracking-tight md:text-7xl">
            Send us a tech-pack.
            <br />
            <span className="italic text-bone/70">We&apos;ll send you a calendar.</span>
          </h2>
          <p className="mt-8 max-w-xl text-[16px] leading-[1.7] text-bone/70">
            First costing in five working days, no commitment. We&apos;ll
            tell you whether your program is a fit for our floor before you
            spend a dollar with us.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:hello@atelierandmill.com"
              className="group inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-[13px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-madder hover:text-bone"
            >
              hello@atelierandmill.com
              <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-[13px] font-medium uppercase tracking-[0.18em] text-bone hover:bg-bone hover:text-ink"
            >
              See our process
            </Link>
          </div>
        </div>

        <div className="col-span-12 mt-16 lg:col-span-5 lg:mt-0">
          <dl className="divide-y divide-bone/15 border-t border-bone/15 lg:border-t-0">
            <Row term="Direct line, NYC" value="+1 (212) 555-0110" />
            <Row term="Direct line, Dhaka" value="+880 1700 555 010" />
            <Row term="WhatsApp" value="+880 1700 555 010" />
            <Row term="Average reply time" value="Under 4 hours" />
            <Row term="First costing turnaround" value="5 working days" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-6 py-4">
      <dt className="text-[12px] uppercase tracking-[0.22em] text-bone/55">
        {term}
      </dt>
      <dd className="font-display text-[18px] tracking-tight text-bone">
        {value}
      </dd>
    </div>
  );
}

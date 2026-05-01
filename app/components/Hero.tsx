import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b hairline">
      <div className="absolute inset-0 -z-10 grain opacity-60" aria-hidden />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 weave opacity-40 lg:block" aria-hidden />

      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-x-6 px-6 pb-20 pt-16 lg:pt-24">
        <div className="col-span-12 lg:col-span-8">
          <div className="mb-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span className="inline-block h-px w-8 bg-ink" />
            Buying house · est. on the floor, sold from the city
          </div>

          <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.92] tracking-[-0.025em]">
            From Dhaka&apos;s mills
            <br />
            <span className="italic">to</span> New York&apos;s racks.
          </h1>

          <p className="mt-10 max-w-xl text-[17px] leading-[1.6] text-ink-muted">
            We are a buying house with two halves. A merchandising and
            commercial team in New York that listens like a partner — and a
            production, QA, and compliance team in Dhaka that lives on the
            factory floor. The seam between them is where your collection
            ships on time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-medium uppercase tracking-[0.18em] text-bone transition-colors hover:bg-madder"
            >
              Start a project
              <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#capabilities"
              className="group inline-flex items-center gap-2 rounded-full border hairline-strong px-5 py-3 text-[13px] font-medium uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-bone"
            >
              Our capabilities
              <IconArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <aside className="col-span-12 mt-16 lg:col-span-4 lg:mt-0">
          <div className="flex h-full flex-col justify-end gap-8 lg:items-end lg:text-right">
            <Stat label="Years on the floor" value="14" />
            <Stat label="Vetted factory partners" value="60+" />
            <Stat label="Annual units shipped" value="9.4M" />
            <Stat label="Markets" value="EU · UK · US · CA" />
          </div>
        </aside>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x hairline px-0 md:grid-cols-4">
          {[
            { kpi: "On-time shipment", value: "98.6%" },
            { kpi: "Right-first-time AQL", value: "1.5" },
            { kpi: "Avg. lead time, knit", value: "55 days" },
            { kpi: "Client retention, 3-yr", value: "92%" },
          ].map((m) => (
            <div key={m.kpi} className="px-6 py-6 md:px-8 md:py-7">
              <div className="font-display text-3xl font-light tracking-tight">
                {m.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                {m.kpi}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-ink pl-4 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-4">
      <div className="font-display text-4xl font-light tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </div>
    </div>
  );
}

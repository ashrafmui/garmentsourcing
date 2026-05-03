import { CountUp } from "./CountUp";

type Item =
  | { kind: "static"; v: string; l: string }
  | {
      kind: "count";
      target: number;
      prefix?: string;
      suffix?: string;
      decimals?: number;
      l: string;
    };

const items: Item[] = [
  { kind: "static", v: "2011", l: "Year founded" },
  { kind: "count", target: 60, suffix: "+", l: "Vetted factory partners" },
  {
    kind: "count",
    target: 9.4,
    suffix: "M",
    decimals: 1,
    l: "Annual units shipped",
  },
  {
    kind: "count",
    target: 98.6,
    suffix: "%",
    decimals: 1,
    l: "On-time shipment rate",
  },
  { kind: "count", target: 14, l: "QA inspectors on the floor" },
  { kind: "count", target: 4, l: "Continents shipped to" },
];

export function Stats() {
  return (
    <section className="border-b hairline bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
            Receipts.
          </h2>
          <p className="max-w-sm text-[14.5px] leading-[1.65] text-bone/70">
            Numbers we measure every Monday morning, audited every quarter,
            and we&apos;ll show you ours when you show us your line plan.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-bone/15 md:grid-cols-3 lg:grid-cols-6">
          {items.map((s) => (
            <div key={s.l} className="bg-ink px-6 py-10">
              <div className="font-display text-5xl font-light tracking-tight tabular-nums">
                {s.kind === "static" ? (
                  s.v
                ) : (
                  <CountUp
                    target={s.target}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                )}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-bone/55">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

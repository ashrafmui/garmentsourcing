const pillars = [
  {
    n: "01",
    title: "Sourcing & merchandising",
    body: "Tech-pack to first-cost in days, not weeks. We negotiate fabric, trims, and capacity directly with mills we've worked with for a decade — and we tell you the truth about MOQs.",
  },
  {
    n: "02",
    title: "Production & quality",
    body: "Our QA team lives in the factories: pre-production, inline, mid-line, and final. Every shipment is AQL 1.5 — and you see the photos before the box leaves the floor.",
  },
  {
    n: "03",
    title: "Compliance & logistics",
    body: "Sedex, BSCI, WRAP, GOTS, GRS — fully papered. We handle export documentation, freight, and the customs paperwork that catches new importers off-guard.",
  },
];

export function Pillars() {
  return (
    <section className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span className="inline-block h-px w-8 bg-ink" />
            What we do
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
            One partner from sketch to seafreight.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.n} className="bg-bone p-8 md:p-10">
              <div className="font-mono text-[11px] tracking-[0.2em] text-madder">
                {p.n}
              </div>
              <h3 className="mt-6 font-display text-2xl font-normal tracking-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.65] text-ink-muted">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

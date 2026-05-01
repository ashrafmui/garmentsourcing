const steps = [
  {
    n: "01",
    title: "Brief & first costing",
    days: "Day 0–5",
    body: "You send tech-packs or sketches. We map the right factory and return a first cost, MOQ, and lead time within five working days.",
  },
  {
    n: "02",
    title: "Sampling",
    days: "Day 5–25",
    body: "Proto, fit, and SMS. We open conversations with the factory technical team early so the production sample fits the floor, not just the form.",
  },
  {
    n: "03",
    title: "PP meeting & booking",
    days: "Day 25–35",
    body: "Pre-production meeting on the factory floor with you on Zoom. Raw materials booked, capacity locked, calendar signed.",
  },
  {
    n: "04",
    title: "Bulk production",
    days: "Day 35–80",
    body: "Inline and mid-line audits, weekly WIP, and unannounced AQL inspections. Photos and inspection reports in your inbox before any carton seals.",
  },
  {
    n: "05",
    title: "Final inspection",
    days: "Day 80–90",
    body: "AQL 1.5 final, lab tests where applicable, and packing list reconciliation. We don't release until you sign.",
  },
  {
    n: "06",
    title: "Logistics & handoff",
    days: "Day 90+",
    body: "Consolidation, FCL/LCL, or air. Customs, HTS guidance, and a post-mortem with cost-out for the next season.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-b hairline bg-bone-2/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              <span className="inline-block h-px w-8 bg-ink" />
              Process
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
              Ninety days, predictably.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.65] text-ink-muted">
            A six-step calendar that holds whether you&apos;re placing 600
            units of one style or six containers of fifty.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative flex flex-col bg-bone p-8 md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.22em] text-madder">
                  Step {s.n}
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] text-ink-muted">
                  {s.days}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-normal tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-ink-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

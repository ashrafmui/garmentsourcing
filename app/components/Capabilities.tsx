import {
  IconCompass,
  IconPalette,
  IconLoom,
  IconShield,
  IconTruck,
  IconSpark,
} from "./icons";

const items = [
  {
    Icon: IconCompass,
    title: "Sourcing & vendor mapping",
    body: "Fiber, fabric, and factory selection across knit, woven, sweater, denim, and outerwear specialists.",
  },
  {
    Icon: IconPalette,
    title: "Design & development",
    body: "In-house pattern, sample room, and tech-pack support. We close the gap between your design intent and what stitches at scale.",
  },
  {
    Icon: IconLoom,
    title: "Production management",
    body: "PP meetings, capacity bookings, raw-material booking, and a daily WIP report you actually read.",
  },
  {
    Icon: IconShield,
    title: "Quality & compliance",
    body: "On-floor inspectors, AQL audits, lab testing, and fully-papered social and environmental compliance.",
  },
  {
    Icon: IconTruck,
    title: "Logistics & duty",
    body: "Consolidation, FCL/LCL, air on critical orders, and HTS guidance for first-time importers.",
  },
  {
    Icon: IconSpark,
    title: "Cost re-engineering",
    body: "Where the spec meets the floor we cut grams, not corners. Most clients save 9–14% on their second season with us.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b hairline bg-bone-2/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              <span className="inline-block h-px w-8 bg-ink" />
              Capabilities
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
              Every step of the line, taken seriously.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.65] text-ink-muted">
            Six functions, one accountable team. You email one merchandiser
            in New York; the work happens across two time zones, fourteen
            hours apart.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="group relative bg-bone p-8 transition-colors hover:bg-bone-3/60 md:p-10"
            >
              <Icon className="size-7 text-ink" />
              <h3 className="mt-8 font-display text-xl font-normal tracking-tight">
                {title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-muted">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

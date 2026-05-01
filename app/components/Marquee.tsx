const labels = [
  "Pacific Heritage Co.",
  "North Mercer",
  "Field & Loom",
  "Hudson Standard",
  "Birchwood Mfg.",
  "Atlas Provisions",
  "Madison Knit",
  "Wren Apparel",
  "Saltwater Brand",
  "Bowery Goods",
];

export function Marquee() {
  const doubled = [...labels, ...labels];
  return (
    <section
      aria-label="Selected clients"
      className="border-b hairline bg-bone-2/40 py-10"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-6 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          <span>Selected clients · under NDA, names redacted</span>
          <span className="hidden md:inline">A — Z</span>
        </div>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max gap-12">
            {doubled.map((l, i) => (
              <span
                key={i}
                className="font-display text-2xl font-light tracking-tight text-ink/70"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Capabilities",
    links: [
      { label: "Sourcing", href: "#capabilities" },
      { label: "Production", href: "#capabilities" },
      { label: "Quality", href: "#capabilities" },
      { label: "Logistics", href: "#capabilities" },
      { label: "Compliance", href: "#sustainability" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Knit", href: "#categories" },
      { label: "Woven", href: "#categories" },
      { label: "Denim", href: "#categories" },
      { label: "Sweater", href: "#categories" },
      { label: "Outerwear", href: "#categories" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "#" },
      { label: "Process", href: "#process" },
      { label: "Sustainability", href: "#sustainability" },
      { label: "Clients", href: "#clients" },
      { label: "Careers", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="font-display text-5xl font-light leading-[0.95] tracking-tight md:text-6xl">
              Atelier
              <span className="mx-2 inline-block size-2 translate-y-[-0.4em] rounded-full bg-madder align-middle" />
              Mill
            </div>
            <p className="mt-6 max-w-sm text-[14.5px] leading-[1.7] text-ink-muted">
              An apparel buying house operating between New York and Dhaka.
              Sourcing, production, and compliance for brands that ship to
              the United States, Canada, the United Kingdom, and the EU.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <Address
                city="New York"
                lines={["55 Greenwich Ave, Suite 4F", "New York, NY 10014"]}
              />
              <Address
                city="Dhaka"
                lines={["House 18, Road 7, Banani", "Dhaka 1213, Bangladesh"]}
              />
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-3 gap-6 md:col-span-7">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  {c.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[14px] tracking-tight text-ink hover:text-madder"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t hairline pt-6 text-[12px] tracking-tight text-ink-muted">
          <div>© {new Date().getFullYear()} Atelier &amp; Mill, Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-ink">Privacy</Link>
            <Link href="#" className="hover:text-ink">Terms</Link>
            <Link href="#" className="hover:text-ink">Modern Slavery Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Address({ city, lines }: { city: string; lines: string[] }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-madder">
        {city}
      </div>
      <div className="mt-3 text-[13.5px] leading-[1.6] text-ink-muted">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
    </div>
  );
}

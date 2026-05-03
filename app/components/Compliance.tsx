import { IconLeaf, IconShield } from "./icons";

const accreditations = [
  { name: "Sedex SMETA 4-Pillar", note: "All production partners audited" },
  { name: "BSCI", note: "Floor-level workplace assessment" },
  { name: "WRAP Gold", note: "Workplace rights & ethics" },
  { name: "OEKO-TEX 100", note: "Tested chemistry" },
  { name: "GOTS", note: "Organic content, certified chain" },
  { name: "GRS", note: "Recycled content, certified chain" },
  { name: "Higg FEM", note: "Facility environmental module" },
  { name: "ZDHC MRSL", note: "Zero discharge of hazardous chemicals" },
];

export function Compliance() {
  return (
    <section id="sustainability" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              <span className="inline-block h-px w-8 bg-ink" />
              Compliance & sustainability
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
              Papered, audited, and walked through every quarter.
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[1.7] text-ink-muted">
              We publish a quarterly sustainability scorecard to all clients
              — including the items we&apos;re still working on.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px bg-line">
              <Highlight
                Icon={IconShield}
                kpi="100%"
                label="Sedex / BSCI coverage"
              />
              <Highlight
                Icon={IconLeaf}
                kpi="42%"
                label="Lower water use, 2024"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
              {accreditations.map((a) => (
                <li
                  key={a.name}
                  className="flex items-start gap-4 bg-bone p-6"
                >
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-madder" />
                  <div>
                    <div className="font-display text-[18px] tracking-tight">
                      {a.name}
                    </div>
                    <div className="mt-1 text-[13px] text-ink-muted">
                      {a.note}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlight({
  Icon,
  kpi,
  label,
}: {
  Icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  kpi: string;
  label: string;
}) {
  return (
    <div className="bg-bone p-6">
      <Icon className="size-6" />
      <div className="mt-6 font-display text-3xl font-light tracking-tight">
        {kpi}
      </div>
      <div className="mt-1 text-[11.5px] uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </div>
    </div>
  );
}

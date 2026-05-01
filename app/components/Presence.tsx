import { IconGlobe } from "./icons";

export function Presence() {
  return (
    <section className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              <span className="inline-block h-px w-8 bg-ink" />
              Two cities, one team
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              <span>New York</span>{" "}
              <span className="text-madder">×</span>{" "}
              <span className="italic">Dhaka</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.65] text-ink-muted">
            Most buying houses are an inbox in Dhaka with a fax to a brand
            in Brooklyn. We staff both ends — same Slack, same calendar,
            handed off with sunset.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-line lg:grid-cols-2">
          <Office
            city="New York"
            country="USA"
            role="Commercial · Merchandising · Design"
            address="55 Greenwich Ave, Suite 4F · New York, NY 10014"
            local="EDT (UTC −4)"
            heads={[
              ["Commercial", "Director of accounts, two senior merchandisers"],
              ["Design", "Two designers, one technical designer"],
              ["Sample studio", "Pattern, fitting, photo"],
            ]}
            tone="light"
          />
          <Office
            city="Dhaka"
            country="Bangladesh"
            role="Production · Quality · Compliance"
            address="House 18, Road 7, Banani · Dhaka 1213"
            local="BST (UTC +6)"
            heads={[
              ["Production", "Six merchandisers across category lines"],
              ["Quality", "Fourteen inspectors, on the factory floor daily"],
              ["Compliance", "Two auditors, full BSCI / Sedex coverage"],
            ]}
            tone="dark"
          />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t hairline pt-6 text-[12px] tracking-tight text-ink-muted">
          <div className="flex items-center gap-2">
            <IconGlobe className="size-4" />
            <span>14-hour overlap window. Sunset hand-off, sunrise reply.</span>
          </div>
          <div className="font-mono text-[11px] tracking-[0.18em]">
            NYC 09:14 · DAC 19:14
          </div>
        </div>
      </div>
    </section>
  );
}

function Office({
  city,
  country,
  role,
  address,
  local,
  heads,
  tone,
}: {
  city: string;
  country: string;
  role: string;
  address: string;
  local: string;
  heads: [string, string][];
  tone: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <article
      className={
        dark
          ? "bg-ink p-10 text-bone md:p-14"
          : "bg-bone p-10 text-ink md:p-14"
      }
    >
      <div
        className={`flex items-center justify-between text-[11px] uppercase tracking-[0.22em] ${
          dark ? "text-bone/60" : "text-ink-muted"
        }`}
      >
        <span>{country}</span>
        <span>{local}</span>
      </div>

      <h3 className="mt-6 font-display text-6xl font-light tracking-tight md:text-7xl">
        {city}
      </h3>

      <p
        className={`mt-3 text-[14px] uppercase tracking-[0.18em] ${
          dark ? "text-madder-soft" : "text-madder"
        }`}
      >
        {role}
      </p>

      <p
        className={`mt-8 max-w-md text-[14px] leading-[1.7] ${
          dark ? "text-bone/75" : "text-ink-muted"
        }`}
      >
        {address}
      </p>

      <ul className={`mt-10 divide-y ${dark ? "divide-bone/15" : "divide-line"}`}>
        {heads.map(([k, v]) => (
          <li key={k} className="flex items-start justify-between gap-6 py-4">
            <span
              className={`text-[12px] uppercase tracking-[0.2em] ${
                dark ? "text-bone/55" : "text-ink-muted"
              }`}
            >
              {k}
            </span>
            <span
              className={`max-w-[60%] text-right text-[14px] leading-[1.55] ${
                dark ? "text-bone" : "text-ink"
              }`}
            >
              {v}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

import { IconQuote } from "./icons";

const quotes = [
  {
    body: "We came in burned by a previous vendor and they rebuilt the program from raw fabric up. First season on time, second season 11% under target cost. They tell us no when we need to hear it.",
    name: "Director of Sourcing",
    org: "Heritage knitwear brand · NYC",
  },
  {
    body: "What we get is two teams that act like one. The merchandising notes from New York are in our deck before the QC photos from Dhaka are out of the camera. It is the most honest sourcing relationship we have.",
    name: "VP of Production",
    org: "Outerwear · Pacific Northwest",
  },
  {
    body: "I trust their AQL more than I trust mine. The week we placed our first denim PO they flew their senior tech designer in for the PP meeting. We've been with them six seasons.",
    name: "Founder & Designer",
    org: "Denim & workwear · Brooklyn",
  },
];

export function Testimonials() {
  return (
    <section id="clients" className="border-b hairline bg-bone-2/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span className="inline-block h-px w-8 bg-ink" />
            Clients
          </div>
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
            What our partners say,
            <br />
            <span className="italic text-ink-muted">when no one is in the room.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="relative flex flex-col justify-between bg-bone p-8 md:p-10"
            >
              <IconQuote className="size-8 text-madder" />
              <blockquote className="mt-8 font-display text-[20px] font-light leading-[1.45] tracking-tight">
                &ldquo;{q.body}&rdquo;
              </blockquote>
              <figcaption className="mt-10 border-t hairline pt-4 text-[12.5px]">
                <div className="font-medium text-ink">{q.name}</div>
                <div className="text-ink-muted">{q.org}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

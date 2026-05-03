const cats = [
  {
    name: "Knit",
    desc: "Tees, polos, fleece, jersey",
    moq: "MOQ 600 / color",
    img: "/categories/knit.jpg",
  },
  {
    name: "Woven tops",
    desc: "Shirts, blouses, overshirts",
    moq: "MOQ 800 / color",
    img: "/categories/woven.jpg",
  },
  {
    name: "Denim",
    desc: "Bottoms, jackets, washed program",
    moq: "MOQ 1,000 / wash",
    img: "/categories/denim.jpg",
  },
  {
    name: "Sweater",
    desc: "Flat-knit 3–14 gg, intarsia, jacquard",
    moq: "MOQ 500 / color",
    img: "/categories/sweater.jpg",
  },
  {
    name: "Outerwear",
    desc: "Down, padded, technical shells",
    moq: "MOQ 600 / style",
    img: "/categories/outerwear.jpg",
  },
  {
    name: "Activewear",
    desc: "Performance knits, seamless",
    moq: "MOQ 800 / color",
    img: "/categories/activewear.jpg",
  },
  {
    name: "Lingerie",
    desc: "Lounge, intimates, sleep",
    moq: "MOQ 1,000 / sku",
    img: "/categories/lingerie.jpg",
  },
  {
    name: "Accessories",
    desc: "Caps, bags, scarves, socks",
    moq: "MOQ 1,200 / sku",
    img: "/categories/accessories.jpg",
  },
];

export function Categories() {
  return (
    <section id="categories" className="border-b hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-[32px] uppercase tracking-[0.22em] ">
              <span className="inline-block h-px w-8 bg-ink" />
              Product categories
            </div>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
              Eight categories.
              <br />
              <span className="italic text-ink-muted">Specialists in each.</span>
            </h2>
          </div>
          {/* <p className="max-w-sm text-[15px] leading-[1.65] text-ink-muted">
            We don&apos;t pretend to do everything everywhere. We pick the
            best line in Bangladesh for each category and stay with them for
            years.
          </p> */}
        </div>

        <div className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {cats.map((c, i) => (
            <article
              key={c.name}
              className="group relative aspect-[4/5] overflow-hidden bg-ink"
            >
              <img
                src={c.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15"
                aria-hidden
              />
              <div className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.22em] text-bone/85 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                {String(i + 1).padStart(2, "0")} / 08
              </div>
              <div className="absolute inset-x-5 bottom-5 text-bone [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
                <div className="font-display text-2xl font-normal tracking-tight">
                  {c.name}
                </div>
                <div className="mt-1 text-[12.5px] text-bone/85">{c.desc}</div>
                <div className="mt-3 inline-flex items-center gap-2 border-t border-bone/40 pt-2 text-[10.5px] uppercase tracking-[0.18em] text-bone/85">
                  {c.moq}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClothingRack() {
  return (
    <section className="relative isolate overflow-hidden border-b hairline bg-ink">
      <img
        src="/clothing_rack.jpg"
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/10"
        aria-hidden
      />

      <div className="mx-auto flex min-h-[55vh] max-w-[1400px] items-end px-6 py-20 md:min-h-[70vh] md:py-28">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-bone/80">
            <span className="inline-block h-px w-8 bg-bone/70" />
            On the floor
          </div>
          <p className="font-display text-3xl font-light leading-[1.1] tracking-tight text-bone md:text-5xl [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            Every hanger on the rack has a PO behind it &mdash;{" "}
            <span className="italic text-bone/85">and a name we know.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

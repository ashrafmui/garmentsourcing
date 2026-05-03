"use client";

import { useEffect, useState } from "react";

type Part =
  | { kind: "text"; text: string; italic?: boolean }
  | { kind: "br" };

const PLAN: Part[] = [
  { kind: "text", text: "From Bangladesh’s mills" },
  { kind: "br" },
  { kind: "text", text: "to ", italic: true },
  { kind: "text", text: " global retail floors." },
];

const TOTAL = PLAN.reduce(
  (n, p) => n + (p.kind === "text" ? p.text.length : 0),
  0,
);

function FullTitle() {
  return (
    <>
      From Bangladesh&rsquo;s mills
      <br />
      <span className="italic">to </span> global retail floors.
    </>
  );
}

export function TypedTitle() {
  const [count, setCount] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setCount(TOTAL);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion || count >= TOTAL) return;
    const id = setTimeout(() => setCount((c) => c + 1), 55);
    return () => clearTimeout(id);
  }, [count, reducedMotion]);

  const done = count >= TOTAL;
  let remaining = count;
  const visible: React.ReactNode[] = [];

  for (let i = 0; i < PLAN.length; i++) {
    const p = PLAN[i];
    if (p.kind === "br") {
      if (remaining >= 0) visible.push(<br key={i} />);
      continue;
    }
    const shown = p.text.slice(0, Math.max(0, remaining));
    remaining -= p.text.length;
    if (shown.length === 0) continue;
    visible.push(
      p.italic ? (
        <span key={i} className="italic">
          {shown}
        </span>
      ) : (
        <span key={i}>{shown}</span>
      ),
    );
  }

  return (
    <h1 className="relative font-display text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.92] tracking-[-0.025em] text-bone [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
      <span aria-hidden className="invisible">
        <FullTitle />
      </span>
      <span
        className="absolute inset-0"
        aria-label="From Bangladesh's mills to global retail floors."
      >
        {visible}
        <span
          aria-hidden
          className={`ml-[0.04em] inline-block h-[0.78em] w-[0.06em] translate-y-[0.06em] bg-current ${done ? "animate-pulse" : ""}`}
        />
      </span>
    </h1>
  );
}

import Link from "next/link";
import { IconArrowUpRight } from "./icons";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#categories", label: "Categories" },
  { href: "#process", label: "Process" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#clients", label: "Clients" },
];

export function TopBar() {
  return (
    <div className="border-b hairline bg-bone-2/60">
      <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-6 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
        <div className="flex items-center gap-6">
          <span className="hidden items-center gap-2 sm:flex">
            <span className="inline-block size-1.5 rounded-full bg-madder" />
            New York · 09:14 EDT
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-ink" />
            Dhaka · 19:14 BST
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@atelierandmill.com"
            className="hidden hover:text-ink sm:inline"
          >
            hello@atelierandmill.com
          </a>
          <span className="hidden sm:inline">EN</span>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b hairline bg-bone/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-tight text-ink-muted hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden text-[13px] text-ink-muted hover:text-ink md:inline"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[12px] font-medium uppercase tracking-[0.16em] text-bone transition-colors hover:bg-madder"
          >
            Start a project
            <IconArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Wordmark() {
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-display text-[20px] font-semibold leading-none tracking-tight">
        Atelier
      </span>
      <span className="size-1 rounded-full bg-madder" />
      <span className="font-display text-[20px] font-semibold leading-none tracking-tight">
        Mill
      </span>
    </span>
  );
}

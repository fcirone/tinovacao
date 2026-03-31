"use client";

import { useState } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface SiteHeaderProps {
  links: NavLink[];
}

export default function SiteHeader({ links }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10 pb-5">
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 min-w-0 hover:opacity-80 transition-opacity">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 ring-1 ring-slate-500/60 shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
            <span className="text-lg font-semibold tracking-tight text-cyan-300">FC</span>
          </div>
          <div className="min-w-0 space-y-0.5">
            <p className="truncate text-sm font-medium tracking-tight text-slate-200">Fabio Cirone</p>
            <p className="truncate text-xs text-slate-400">CTO · Gambling · Payments · Cloud Platforms</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300/90 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-cyan-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 text-slate-300 transition hover:border-cyan-500/60 hover:text-cyan-300 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="mt-4 flex flex-col gap-1 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-900/60 hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Hours", href: "/#hours" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Fade District — home">
          <Image
            src="/logo.png"
            alt="Fade District logo"
            height={44}
            width={44}
            className="h-11 w-auto"
            priority
          />
          <span className="hidden font-heading text-base font-bold uppercase tracking-widest text-white sm:block">
            Fade District
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-heading text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:text-amber-400"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:6044992551"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-5 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-amber-300"
          >
            <PhoneIcon />
            Call
          </a>
        </nav>

        {/* Mobile: call + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:6044992551"
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-black"
          >
            <PhoneIcon />
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-1 text-white transition-colors hover:text-amber-400"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Barber pole stripe */}
      <div className="flex h-0.5" aria-hidden>
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-blue-700" />
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          className="border-t border-zinc-800 bg-black pb-2 md:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:text-amber-400"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

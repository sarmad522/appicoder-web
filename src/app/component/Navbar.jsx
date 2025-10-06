"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Choose Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/products", label: "Products" },
  { href: "/testimonial", label: "Testimonial" },
  { href: "/technologies", label: "Technologies" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="z-50 text-white absolute w-[100%] ">
      <div className="relative sticky top-0 ">
       

        <div className="mx-auto  lg:max-w-[1600px] xl:max-w-[1920px]  xl:w-[90%] px-4 sm:px-6 lg:px-2   lg:py-5 py-3 md:py-6 ">
          <div className="flex  items-center justify-between ">
            {/* Left: Logo */}
            <div className="flex items-center gap-3 lg:max-w-[40%] w-[35%] md:w-[30%] lg:w-[22%]  ">
              <Link href="/">
                <Image
                  src="/images/logo.png" // replace with your actual logo path
                  alt="Appicoders Inc. logo"
                  width={220}
                  height={60}
                  priority
                />
              </Link>
            </div>

            {/* Center: Nav (Desktop) */}
            <div   className="lg:max-w-[82%] lg:w-[77%]  lg:flex   justfiy-between flex-col  items-end">
            <nav className="hidden lg:flex  flex-wrap ">
              <ul className="flex items-center gap-7 text-[14px]  lg:text-[14px] xl:text-[18px]">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-2 transition-opacity hover:opacity-90   "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+18008268018"
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/90 px-4 py-2 text-sm font-semibold tracking-tight shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset] transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (800) 826-8018</span>
              </a>

              <button
                className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:hidden"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={`fixed inset-y-0 right-0 z-[60] w-80 max-w-[85%] transform border-l border-white/10 bg-[#d71920]/98 backdrop-blur-md transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-16 items-center justify-between px-4">
            <div className="text-base font-semibold">Menu</div>
            <button
              className="rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 pb-6">
            <a
              href="tel:+18008268018"
              className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/80 px-4 py-2 text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4" /> +1 (800) 826-8018
            </a>
            <nav>
              <ul className="space-y-1">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-[15px] hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Backdrop */}
        {open && (
          <button
            aria-hidden
            tabIndex={-1}
            className="fixed inset-0 z-50 bg-black/20 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
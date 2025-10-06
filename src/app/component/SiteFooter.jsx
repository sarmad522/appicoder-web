"use client";

import Image from "next/image";
import Link from "next/link";

const CONTACT = {
  phoneLabel: "Tel: +1 (800) 826-8018",
  emailLabel: "Email: info@appicoders.com",
  phoneHref: "tel:+18008268018",
  emailHref: "mailto:info@appicoders.com",
};

const ABOUT_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT US" },
];

const SERVICES = [
  "IPHONE APPLICATION DEVELOPMENT",
  "ANDROID APPLICATION DEVELOPMENT",
  "ENTERPRISE APP DEVELOPMENT",
];

export default function SiteFooter() {
  return (
    <footer className="relative text-white lg:pt-[50px]">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#21242c]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#232733] via-[#242836] to-[#1f232d] opacity-90" />

      <div className="mx-auto w-[90%] xl:max-w-[1920px] md:pt-10  lg:py-5 ">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand + Contact */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png" // your logo path
                alt="Appicoders Inc."
                width={220}
                height={56}
                className="h-auto w-[180px] sm:w-[200px] md:w-[220px]"
                priority
              />
            </Link>

            <h3 className="mt-6  md:text-[18px] lg:text-[22px] font-semibold text-white">Contact Us</h3>
            <div className="mt-2 space-y-1 text-[14px] text-white/85">
              <a href={CONTACT.phoneHref} className="hover:text-white">{CONTACT.phoneLabel}</a>
              <div>
                <span className="sr-only">Email: </span>
                <a href={CONTACT.emailHref} className="hover:text-white">
                  {CONTACT.emailLabel}
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-3">
              <Social icon="facebook" href="https://facebook.com/" />
              <Social icon="twitter" href="https://twitter.com/" />
              <Social icon="linkedin" href="https://linkedin.com/" />
            </div>
          </div>

          {/* About */}
          <div className="md:col-span-3">
            <h4 className=" md:text-[18px] lg:text-[22px] font-semibold text-white">About</h4>
            <ul className="mt-4 space-y-3  text-[12px] lg:text-[14px] ">
              {ABOUT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block text-white/85 hover:text-white tracking-wide"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="t md:text-[18px] lg:ext-[22px] font-semibold text-white">Appicoders Services</h4>
            <ul className="mt-4 space-y-3 text-[12px] lg:text-[14px]">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span aria-hidden className="mt-[6px] text-white/70">»</span>
                  <span className="text-white/85 hover:text-white tracking-wide">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-white/10" />

        {/* Bottom note */}
        <div className="py-5 text-center text-[11px]  md:text-[12.5px] tracking-wide text-white/70">
          © {new Date().getFullYear()} APPICODERS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

/* ---------------- helpers ---------------- */

function Social({ icon, href }) {
  const paths = {
    facebook:
      "M13.5 3h2.8v3.2h-2c-.9 0-1.3.5-1.3 1.2v1.8h3.2l-.4 3.1h-2.8V21h-3.3v-8.7H7.5v-3.1h2.2V7.4C9.7 5.2 11 3 13.5 3z",
    twitter:
      "M22 6.1c-.8.4-1.6.6-2.5.8.9-.6 1.5-1.4 1.8-2.4-.8.5-1.8.9-2.8 1.1A4.24 4.24 0 0 0 12 8.8c0 .3 0 .5.1.8-3.4-.2-6.3-1.8-8.3-4.2-.4.7-.6 1.5-.6 2.3 0 1.5.8 2.9 2 3.7-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.8 3.5 4.2-.4.1-.9.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.2 3.2A8.53 8.53 0 0 1 2 19.6c1.9 1.2 4.1 1.9 6.5 1.9 7.8 0 12.1-6.5 12.1-12.1v-.6c.8-.5 1.4-1.2 1.9-1.9z",
    linkedin:
      "M5.2 3.5C5.2 4.5 4.4 5.3 3.4 5.3S1.6 4.5 1.6 3.5 2.4 1.6 3.4 1.6s1.8.8 1.8 1.9zM1.9 7.2h3.1V21H1.9V7.2zM9.2 7.2h3v1.9c.5-.9 1.8-2.1 3.7-2.1 3.1 0 5.4 2 5.4 6.3V21h-3.1v-6.8c0-2.3-.8-3.8-2.7-3.8-1.5 0-2.3 1-2.7 2v8.6H9.2V7.2z",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white
                 hover:bg-white/15 transition"
      aria-label={icon}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d={paths[icon]} />
      </svg>
    </a>
  );
}

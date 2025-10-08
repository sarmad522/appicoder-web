"use client";

import Image from "next/image";
import React from "react";

export default function ContactCta({
  titleEyebrow = "LET’S TALK",
  title = "Got an idea? Let’s get in touch!",
  subtitle = "Have queries? Not sure of your App Strategy? Discuss with us and we'll guide you the way forward.",
  heroImage = "/images/contactimage.png",
  phone = "+1-(800) 826 8018",
  email = "info@appicoders.com",
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // TODO: send form via API route or service
    alert(`Thanks, ${form.get("name")}! We’ll reach out soon.`);
    e.currentTarget.reset();
  }

  return (
    <section className="relative bg-[#d71920]">
      <div className="mx-auto w-[95%] max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 lg:gap-8">
          {/* LEFT – form */}
          <div className="md:col-span-7 px-0 sm:px-0 py-8 sm:py-10   ">
            <p className="text-white font-semibold tracking-[.12em] text-[12px] text-sm">
              {titleEyebrow}
            </p>

            <h2 className="mt-2 text-white font-bold leading-[1.1] text-[22px] sm:text-[34px] md:text-[30px] lg:text-[35px] ">
              {title}
            </h2>

            <p className="mt-3 text-white max-w-[58ch] text-[12px] md:text-[14px]">
              {subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-[720px]">
              <Input name="name" placeholder="Your Name" />
              <Input name="email" type="email" placeholder="Email Address" />
              <Input name="phone" type="tel" placeholder="Phone" />
              <Textarea name="message" placeholder="Message" rows={6} />

              <button
                type="submit"
                className="w-full rounded-lg py-4 text-white font-semibold tracking-wide
                           bg-gradient-to-b from-[#b3161c] to-[#7c0f13] shadow-[0_8px_24px_rgba(0,0,0,.25)]
                           ring-1 ring-black/10 hover:translate-y-[1px] transition"
                aria-label="Submit contact form"
              >
                LET’S GET IN TOUCH
              </button>
            </form>
          </div>

          {/* RIGHT – image + contact block */}
          <div className="md:col-span-5">
            {/* top image */}
            <div className="relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
              <Image
                src={heroImage}
                alt="People collaborating"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* bottom dark card */}
            <div className="bg-[#1f2329] text-white px-6 sm:px-8 py-8 grid place-items-center text-center relative overflow-hidden">
              {/* soft vignette shape */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
              </div>

              <p className="text-white/90  text-[12px] lg:text-[15px] max-w-[48ch]">
                Please submit your inquiry and our App Development Strategist will contact you shortly
              </p>

              {/* phone icon */}
              <div className="mt-6 grid place-items-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#1f2329]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M6.6 10.8c1.5 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.1-.2 1 .4 2 .6 3.1.6.5 0 .9.4.9.9v3.5c0 .5-.4.9-.9.9C10.8 21 3 13.2 3 3.9c0-.5.4-.9.9-.9H7.4c.5 0 .9.4.9.9 0 1.1.2 2.1.6 3.1.1.4 0 .8-.3 1.1L6.6 10.8z" fill="currentColor"/>
                  </svg>
                </span>
              </div>

              <div className="mt-4 text-[24px] sm:text-[28px] md:text-[22px] lg:text-[30px] font-extrabold tracking-tight">
                {phone}
              </div>
              <div className="mt-2 text-white/80 text-sm">{email}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- small form pieces ---------------- */

function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-md bg-white text-[#1b1d22] placeholder-[#9aa3ad]
                  h-12 px-4 outline-none ring-1 ring-black/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]
                  focus:ring-2 focus:ring-white/70 ${className}`}
      {...props}
      required
    />
  );
}

function Textarea({ className = "", rows = 5, ...props }) {
  return (
    <textarea
      rows={rows}
      className={`w-full rounded-md bg-white text-[#1b1d22] placeholder-[#9aa3ad]
                  px-4 py-3 outline-none ring-1 ring-black/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]
                  focus:ring-2 focus:ring-white/70 ${className}`}
      {...props}
      required
    />
  );
}

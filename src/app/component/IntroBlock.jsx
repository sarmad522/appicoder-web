"use client";

import React from "react";

/**
 * IntroBlock
 * Matches the screenshot: large left headline with brand-red first word,
 * right paragraph, and a red gradient CTA with a soft drop shadow.
 * Responsive with clean spacing.
 */
export default function IntroBlock() {
  return (
    <section className="relative ">
      <div className="mx-auto xl:w-[90%] xl:max-w-[1920px] lg:max-w-[1500px] py-10 sm:py-12 px-5 lg:px-5 xl:px-5 lg:py-16  xl:py-30">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-10">
          {/* LEFT: Headline */}
          <div className="md:col-span-6">
            <h2 className="text-[#0f1824] font-bold leading-[1.2] tracking-tight">
              <span className="text-[22px] sm:text-[28px] md:text-[30px] lg:text-[40px] xl:text-[52px] block">
                <span className="text-[#d71920]">Appicoders</span>
                <span className="text-[#0f1824]"> – #1. Mobile</span>
              </span>
              <span className="text-[22px] sm:text-[28px] md:text-[30px] lg:text-[40px] xl:text-[52px] block">
                App & Web Development
              </span>
              <span className="text-[22px] sm:text-[28px] md:text-[30px] lg:text-[40px] xl:text-[52px] block">
                Company in USA
              </span>
            </h2>
          </div>

          {/* RIGHT: Copy + CTA */}
          <div className="md:col-span-6 lg:pl-4 xl:pl-0">
            <p className=" text-[12px] sm:text-[12px]  md:text-[14px] lg:text-[22px] xl:text-[22px] leading-[1.75] text-[#20222D] font-semibold">
              Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years
              of experience, we specialize in designing, developing, and marketing cutting-edge solutions for all major
              mobile platforms, including Android, iOS, and Windows.
            </p>

            <div className="mt-8">
              <a
                href="#read-more"
                className="inline-flex select-none items-center justify-center rounded-[3px] bg-gradient-to-r from-[#FF0000] via-[#8D0D0D] to-[#FF0000] px-15 py-3 text-[14px] font-semibold uppercase tracking-wide text-white shadow-[0_6px_0_0_rgba(0,0,0,0.18)] ring-1 ring-black/10 transition-transform duration-150 hover:translate-y-[1px] active:translate-y-[2px]"
              >
                Read More
              </a>
              {/* subtle soft shadow under the button (like screenshot) */}
              <div className="mt-2 h-[10px] w-[160px] rounded-[10px] bg-black/10 blur-[2px]" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

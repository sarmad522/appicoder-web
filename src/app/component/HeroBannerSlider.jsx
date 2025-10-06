"use client";
import "swiper/css";
import "swiper/css/navigation";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
// NOTE: Import Swiper CSS globally in src/app/globals.css:
// @import "swiper/css";
// @import "swiper/css/navigation";

/**
 * HeroBannerSlider
 * - Left side: fixed phone mockups (non-sliding)
 * - Right side: sliding text (heading, paragraph, CTA button)
 * - Arrows + autoplay like a carousel
 * - Pixel‑friendly paddings and breakpoints to match the provided design
 *
 * Props:
 *   slides: Array<{ title: string, subtitle?: string, ctaText?: string, ctaHref?: string }>
 *   frontImg: string (e.g. "/images/phone-front.png")
 *   backImg: string (e.g. "/images/phone-back.png")
 */

export default function HeroBannerSlider({
  slides = [
    {
      title: "Leading the Way in App\nDevelopment Innovation",
      subtitle:
        "We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.",
      ctaText: "GET A FREE QUOTE",
      ctaHref: "#quote",
    },
    {
      title: "Leading the Way in App\nDevelopment Innovation",
      subtitle:
        "We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.",
      ctaText: "BOOK A CONSULT",
      ctaHref: "#consult",
    },
    {
      title: "Leading the Way in App\nDevelopment Innovation",
      subtitle:
        "We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.",
      ctaText: "SEE CASE STUDIES",
      ctaHref: "#work",
    },
  ],
  frontImg = "/images/phone-front.png",
  backImg = "/images/phone-back.png",
}) {
  return (
    <section className="relative isolate overflow-hidden  ">
      {/* Big red rounded layer matching the screenshot shape */}
 <div
    className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center
               sm:bg-[length:auto] md:bg-cover"
    style={{ backgroundImage: "url('/images/bannerimage.png')" }}
  />      <div className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full opacity-70 blur-[2px]" />

      <div className="relative mx-auto xl:max-w-[1920px] w-[95%] px-4 sm:px-6 lg:px-8 py-10 md:pt-20 lg:pt-10 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center  gap-1 lg:gap-10">
          {/* LEFT: fixed stacked phones */}
          <div className="order-1 lg:order-1    md:col-span-4 flex items-end lg:pt-10 xl:pt-20 justify-center lg:justify-start relative">
  {/* Back phone */}
  <div className="relative hidden sm:block  lg:w-full">   {/* 👈 add w-full */}
    <Image
      src="/images/mobile.png"
      alt="Phone back app preview"
      width={800}   // 👈 increase this width
      height={800}  // 👈 maintain proportion
      className="w-full h-auto "  // 👈 this line is key
      priority
    />
  </div>
</div>


          {/* RIGHT: slider text */}
          <div className="order-2 lg:order-2 md:col-span-8 relative">
            <Swiper
              modules={[Navigation, Autoplay, A11y]}
              autoplay={{ delay: 3800, disableOnInteraction: false }}
              speed={700}
              navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
              allowTouchMove={true}
              loop
              className="w-full"
            >
              {slides.map((s, idx) => (
                <SwiperSlide key={idx}>
                  <div className="min-h-[300px] md:min-h-[360px] lg:min-h-[420px] flex items-center">
                    <div className="">
                      <h1 className="whitespace-pre-line text-3xl leading-tight font-extrabold text-white text-[20px] sm:text-[28px] md:text-[30px] lg:text-[45px] xl:text-[60px] lg:leading-[1]">
                        {s.title}
                      </h1>
                      {s.subtitle && (
                        <p className="mt-4 max-w-[54ch] text-white text-base  text-[12px] sm:text-[13px]  md:text-[16px] lg:text-[24px]  xl:text-[24px]">
                          {s.subtitle}
                        </p>
                      )}
                      <div className="mt-6">
                        <a
                          href={s.ctaHref || "#"}
                          className="inline-flex items-center gap-3  text-[12px] md:text-[14px] lg:text-[16px] rounded-md bg-gradient-to-b from-[#b3161c] to-[#7c0f13] px-6 py-3 text-white font-semibold shadow-lg ring-1 ring-black/10 hover:translate-y-[1px] transition-transform"
                        >
                          {s.ctaText || "GET STARTED"}
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows bottom-right like screenshot */}
            <div className="absolute flex items-center gap-3 pointer-events-none 
                right-2 -bottom-0 
                md:right-15 md:-bottom-0 
                lg:right-[100px] lg:-bottom-4 
                xl:right-[160px] xl:-bottom-[80px]">
              <button aria-label="Previous" className="pointer hero-prev pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:scale-105">
                {/* left arrow */}
<svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
<circle cx="25.3711" cy="25.5391" r="25" fill="white"/>
<path d="M14.3104 24.4784C13.7246 25.0642 13.7246 26.0139 14.3104 26.5997L23.8564 36.1457C24.4422 36.7315 25.3919 36.7315 25.9777 36.1457C26.5635 35.5599 26.5635 34.6101 25.9777 34.0243L17.4924 25.5391L25.9777 17.0538C26.5635 16.468 26.5635 15.5182 25.9777 14.9325C25.3919 14.3467 24.4422 14.3467 23.8564 14.9325L14.3104 24.4784ZM15.3711 25.5391V27.0391H35.3711V25.5391V24.0391H15.3711V25.5391Z" fill="black"/>
</svg>              </button>
              <button aria-label="Next" className="hero-next pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:scale-105">
                {/* right arrow */}
<svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
<circle cx="25.3711" cy="25.5391" r="25" fill="white"/>
<path d="M36.4318 24.4784C37.0175 25.0642 37.0175 26.0139 36.4318 26.5997L26.8858 36.1457C26.3 36.7315 25.3503 36.7315 24.7645 36.1457C24.1787 35.5599 24.1787 34.6101 24.7645 34.0243L33.2498 25.5391L24.7645 17.0538C24.1787 16.468 24.1787 15.5182 24.7645 14.9325C25.3503 14.3467 26.3 14.3467 26.8858 14.9325L36.4318 24.4784ZM35.3711 25.5391V27.0391H15.3711V25.5391V24.0391H35.3711V25.5391Z" fill="black"/>
</svg>              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

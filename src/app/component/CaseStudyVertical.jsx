// components/CaseStudyVertical.jsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CaseStudyVertical({
  title = "Caviar - Order Food Delivery",
  tags = ["iOS Development", "Android Development", "UI/UX Design"],
  description = `Get Food delivered from curated lists of local restaurants right at your fingertips with Caviar. Enjoy quality dining at home and make any night a special occasion.`,
  ctaText = "View Case Study",
  ctaHref = "#",
  storeBadges = [
    { src: "/images/appstore.png", alt: "Download on the App Store" },
    { src: "/images/google.png", alt: "Get it on Google Play" },
  ],
  slides = [
    { src: "/images/pic1.png", alt: "Caviar screen 1" },
    { src: "/images/pick2.png", alt: "Caviar screen 2" },
    { src: "/images/pick3.png", alt: "Caviar screen 3" },
  ],
  bgImage = "/images/slideback.png",
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative overflow-hidden w-full -mt-80 md:-mt-[420px] -z-10 pt-[50px] md:pt-[20px]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover blur-[2px] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="mx-auto w-[90%] xl:max-w-[1920px] py-10 md:py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* LEFT: Text Block */}
          <div className="md:col-span-6 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white text-[#E01923] px-3 py-1  text-[8px] md:text-xs font-semibold tracking-tight ring-1 ring-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <h2 className="font-bold text-[22px] md:text-[40px] lg:text-[48px] leading-tight tracking-tight">
              {title.split(" - ")[0]}{" "}
              <span className="block sm:inline">- {title.split(" - ")[1]}</span>
            </h2>

            <p className="mt-4 max-w-[60ch] text-[12px] md:text-[14px] lg:text-[16px] text-white leading-relaxed">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 ">
              {storeBadges.map((b) => (
                <Image
                  key={b.alt}
                  src={b.src}
                  alt={b.alt}
                  width={160}
                  height={48}
                  className="h-6 md:h-10 w-auto"
                />
              ))}
            </div>

            <div className="mt-6">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-b from-[#d01a21] to-[#891117] text-[14px] md:text-[16px] p-3 md:px-6 md:py-3 text-white font-semibold shadow-lg ring-1 ring-black/10 hover:translate-y-[1px] transition"
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* RIGHT: Vertical Swiper */}
          <div className="md:col-span-6 relative flex justify-center items-center">
            <Swiper
              modules={[Navigation, Autoplay, A11y]}
              direction="vertical"
              loop
              speed={650}
              autoplay={{ delay: 2600, disableOnInteraction: false }}
              slidesPerView={3}          // desktop default
              centeredSlides
              spaceBetween={50}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                  centeredSlides: true,
                },
              }}
              onBeforeInit={(swiper) => {
                // Bind refs BEFORE init for reliable navigation
                swiper.params.navigation = {
                  ...(swiper.params.navigation || {}),
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                };
              }}
              onInit={(swiper) => {
                // Now that refs exist, init/update nav
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="h-[250px] md:h-[760px] lg:h-[780px] w-full"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-full md:max-w-[700px] rounded-xl">
                      <div className="relative h-[240px] sm:h-[260px] md:h-[300px] overflow-hidden rounded-lg">
                        <Image
                          src={s.src}
                          alt={s.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 95vw, 700px"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Up/Down arrows */}
            <div className="absolute inset-y-0  -right-2 md:right-0 flex flex-col items-center justify-center gap-3 pr-1 md:pr-3">
              <button
                ref={prevRef}
                aria-label="Previous"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-105 transition"
              >
                {/* Up chevron */}
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                  <circle cx="25" cy="25" r="25" transform="matrix(1 0 0 -1 0.371094 50.4717)" fill="white" />
                  <path d="M26.4285 14.4077C25.8409 13.8238 24.8911 13.8267 24.3072 14.4143L14.7908 23.9898C14.2069 24.5774 14.2098 25.5271 14.7974 26.1111C15.385 26.6951 16.3348 26.6921 16.9187 26.1045L25.3777 17.593L33.8892 26.0519C34.4768 26.6359 35.4265 26.633 36.0105 26.0454C36.5945 25.4578 36.5915 24.508 36.0039 23.924L26.4285 14.4077ZM25.3711 15.4717L23.8711 15.4763L23.9331 35.4762L25.4331 35.4716L26.9331 35.4669L26.8711 15.467L25.3711 15.4717Z" fill="black" />
                </svg>
              </button>

              <button
                ref={nextRef}
                aria-label="Next"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-105 transition"
              >
                {/* Down chevron */}
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                  <circle cx="25.3711" cy="25.4717" r="25" fill="white" />
                  <path d="M24.2502 36.5263C24.8328 37.1153 25.7825 37.1204 26.3715 36.5379L35.9693 27.0441C36.5583 26.4615 36.5635 25.5117 35.9809 24.9228C35.3983 24.3338 34.4486 24.3286 33.8596 24.9112L25.3282 33.3501L16.8893 24.8188C16.3067 24.2298 15.357 24.2246 14.768 24.8072C14.179 25.3898 14.1739 26.3395 14.7564 26.9285L24.2502 36.5263ZM25.3167 35.4714L26.8166 35.4796L26.9256 15.4799L25.4256 15.4717L23.9256 15.4636L23.8167 35.4633L25.3167 35.4714Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";

const SLIDES = [
  {
    title: "Cloud Solutions",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du.",
    image: "/images/techni.png",
    bg: "/images/technology.png",
  },
  {
    title: "Cloud Solutions",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du.",
    image: "/images/techni.png",
    bg: "/images/technology.png",
  },
  {
    title: "Cloud Solutions",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du.",
    image: "/images/techni.png",
    bg: "/images/technology.png",
  },
  {
    title: "Cloud Solutions",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du.",
    image: "/images/techni.png",
    bg: "/images/technology.png",
  },
  
];

export default function TechnologyShowcase({ slides = SLIDES }) {
  const [active, setActive] = React.useState(0);
  const current = slides[active] ?? slides[0];

  return (
    <section className="relative isolate overflow-hidden py-12 sm:py-14 lg:py-18">
      {/* Dynamic background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={current.bg}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="mx-auto w-[90%] xl:max-w-[1920px]">
        <h2 className="text-center text-white text-[34px] sm:text-[40px]  lg:text-[50px] font-extrabold mb-6 sm:mb-8">
          Technologies
        </h2>

        {/* Content row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: text slider card */}
          <div className="md:col-span-6 ">
            <div className="relative rounded-xl bg-white shadow-[0_20px_60px_rgba(0,0,0,.25)] overflow-hidden  min-h-[300px] lg:min-h-[400px] xl:min-h-[500px] flex justify-center items-center p-5">
              <Swiper
                modules={[Pagination, Autoplay, A11y]}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                speed={650}
                loop
                pagination={{
                  el: ".tech-bullets",
                  clickable: true,
                  bulletClass: "tech-bullet swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                onSlideChange={(sw) => setActive(sw.realIndex)}
                className="px-6 sm:px-8 pt-10 pb-14"
              >
                {slides.map((s, i) => (
                  <SwiperSlide key={i}>
                    <div>
                      <h3 className="text-[28px] sm:text-[26px]  md:text-[24px] lg:text-[32px] xl:text-[40px]  font-bold text-black">
                        {s.title}
                      </h3>
                      <p className="mt-4 text-[14px] sm:text-[15px]  md:text-[14px] lg:text-[16px] xl:text-[20px] lg:leading-7 text-black/80 max-w-[42ch]">
                        {s.desc}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* custom bullets bottom-left */}
              <div className="tech-bullets absolute left-6 bottom-6 flex gap-2" />
            </div>
          </div>

          {/* RIGHT: image card that reacts to active slide */}
         {/* RIGHT: image card that reacts to active slide */}
<div className="md:col-span-6 z-10 relative">
  {/* ⬇️ overflow-visible so the image can stick out */}
  <div className="relative  z-10 h-[280px] sm:h-[360px] md:h-[300px]  lg:h-[400px] xl:h-[550px] ">
    
    {/* centered, smaller, shifted up */}
    <div className="absolute z-10 inset-0 flex items-center justify-center pointer-events-none">
      {/* control the visible size here (80%) and lift it up */}
      <div className="relative w-[100%] h-[100%] xl:-translate-x-50   lg:-translate-x-30 z-10">
        <Image
          key={current.image}
          src={current.image}
          alt={current.title}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>

    {/* optional subtle ring stays on the box */}
    <div className="pointer-events-none absolute inset-0 rounded-xl" />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

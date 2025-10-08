"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

const defaultItems = [
  {
    title: "Focused Business Approach",
    desc:
      "We research, plan, and execute — and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: "/images/brain.png",
  },
  {
    title: "Professional Team",
    desc:
      "Our mobile development company has extremely professional & expert developers who specialize in 2D, 3D, & Isometric apps for Android, iOS, & webapp platforms.",
    icon: "/images/creative-team.png",
  },
  {
    title: "Flexible Payment Terms",
    desc:
      "Get your apps developed with most affordable price and with our flexible payment terms, you pay as your project progresses.",
    icon: "/images/credit-card.png",
  },
  {
    title: "Focused Business Approach",
    desc:
      "We research, plan, and execute — and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: "/images/brain.png",
  },
  {
    title: "Professional Team",
    desc:
      "Our mobile development company has extremely professional & expert developers who specialize in 2D, 3D, & Isometric apps for Android, iOS, & webapp platforms.",
    icon: "/images/creative-team.png",
  },
  {
    title: "Flexible Payment Terms",
    desc:
      "Get your apps developed with most affordable price and with our flexible payment terms, you pay as your project progresses.",
    icon: "/images/credit-card.png",
  },
];

export default function WhyChooseUs({
  items = defaultItems,
  title = "Why Choose Us?",
  subtitle = `With our unique approach and cost-effective solutions, your business will prosper because quality is the top priority for us.`,
}) {
  const [active, setActive] = React.useState(1); // center by default

  return (
    <section className="relative bg-[#eef0f2]">
      <div className="mx-auto xl:max-w-[1920px] py-10 md:py-25">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[22px] md:text-4xl font-extrabold text-[#20222D]">
            {title}
          </h2>
          <p className="mt-3 mx-auto max-w-3xl    text-[12px]  md:text-sm md:text-base  max-w-[650px] font-bold text-[#20222D]">
            {subtitle}
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            slidesPerView={1.1}
            centeredSlides
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
            loop
            breakpoints={{
              640: { slidesPerView: 1.6, spaceBetween: 22 },
              768: { slidesPerView: 2.1, spaceBetween: 24 },
              1024: { slidesPerView: 3.1, spaceBetween: 15 },
              1920: { slidesPerView: 3.1, spaceBetween: 15 },
            }}
            className="pb-10"
          >
            {items.map((item, idx) => {
              const isActive = idx === active;
              return (
                <SwiperSlide key={item.title}>
                  <div className="flex items-center justify-center">
                    {/* Card */}
                    <div
                      className={[
                        "relative flex flex-col items-center justify-center text-center rounded-full ",
                        "bg-white w-[280px] h-[280px] sm:w-[300px] sm:h-[350px] md:w-[320px] md:h-[320px]",
                        "transition-all duration-300",
                        isActive ? "scale-[1.0]" : "opacity-60",
                      ].join(" ")}
                    >
                      {/* Icon bubble */}
                      <div
                        className={[
                          "relative ",
                          "h-[64px] w-[64px] rounded-2xl grid place-items-center",
                          "shadow-[0_6px_18px_rgba(0,0,0,0.18)]",
                          isActive
                            ? "bg-[#d71920]"
                            : "bg-[#e9ecef] grayscale contrast-75",
                        ].join(" ")}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={34}
                          height={34}
                          className="object-contain"
                        />
                      </div>

                      {/* Text */}
                      <div className="px-6 pt-5">
                        <h3 className="text-[#363a40] font-extrabold text-[14px]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[11px] leading-5 text-[#6c7177]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

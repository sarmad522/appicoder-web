"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import React from "react";

const TESTIMONIALS = [
  {
    name: "Scarlett Lawrence",
    role: "Product Owner",
    avatar: "/images/testimonialimage.png",
    text: `Thank you Team Appingine you guys have a great understanding of what’s current, and get things done very quickly compared to others. Reliable communication and qualitative suggestions on useful functionality during the planning stage made for a final product that surpassed initial expectations. Their Project management is amazing. Tight deadlines were reliably met without issue. Our strong recommendations if you're looking for quality work.`,
  },
  {
    name: "Scarlett Lawrence",
    role: "Product Owner",
    avatar: "/images/testimonialimage.png",
    text: `Thank you Team Appingine you guys have a great understanding of what’s current, and get things done very quickly compared to others. Reliable communication and qualitative suggestions on useful functionality during the planning stage made for a final product that surpassed initial expectations. Their Project management is amazing. Tight deadlines were reliably met without issue. Our strong recommendations if you're looking for quality work.`,
  },
  {
    name: "Scarlett Lawrence",
    role: "Product Owner",
    avatar: "/images/testimonialimage.png",
    text: `Thank you Team Appingine you guys have a great understanding of what’s current, and get things done very quickly compared to others. Reliable communication and qualitative suggestions on useful functionality during the planning stage made for a final product that surpassed initial expectations. Their Project management is amazing. Tight deadlines were reliably met without issue. Our strong recommendations if you're looking for quality work.`,
  },
  {
    name: "Scarlett Lawrence",
    role: "Product Owner",
    avatar: "/images/testimonialimage.png",
    text: `Thank you Team Appingine you guys have a great understanding of what’s current, and get things done very quickly compared to others. Reliable communication and qualitative suggestions on useful functionality during the planning stage made for a final product that surpassed initial expectations. Their Project management is amazing. Tight deadlines were reliably met without issue. Our strong recommendations if you're looking for quality work.`,
  },
  
];

export default function Testimonials({
  bgImage = "/images/imge.png",
  panelColor = "bg-[#E01923]/65", // the red panel
  items = TESTIMONIALS,
}) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={bgImage}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Red panel */}
      <div className="relative z-0">
        <div className="mx-auto  xl:w-[90%] max-w-[1920px] py-10 md:py-25">
          <div
            className={`rounded-xl lg:rounded-2xl ${panelColor} shadow-[0_15px_60px_rgba(0,0,0,0.25)] relative`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 px-5 sm:px-7 md:px-10 py-8 lg:py-10">
              {/* Left text */}
              <div className="lg:col-span-6 text-white">
                <div className="mb-6 ">
                  <div className=" absolute -top-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#d71920] shadow-md">
                    {/* quote icon */}
                    <img src="/images/svg.png"/>
                  </div>
                </div>

                <p className="uppercase tracking-tight text-white/85 text-sm  xl:text-[18px]">
                  Client Testimonials
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-[1.15]   xl:text-[45px]">
                  What our clients<br />are Saying.
                </h2>
              </div>

              {/* Right slider */}
              <div className="lg:col-span-6">
                <div className="relative">
                  <Swiper
                    modules={[Pagination, Autoplay, A11y]}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop
                    speed={650}
                    pagination={{
                      clickable: true,
                      el: ".t-bullets",
                      bulletClass: "t-bullet",
                      bulletActiveClass: "t-bullet-active",
                      renderBullet: (index, className) =>
                        `<span class="${className}"></span>`,
                    }}
                    className="w-full"
                  >
                    {items.map((it, i) => (
                      <SwiperSlide key={i}>
                        <div className="rounded-xl bg-white p-5 sm:p-6 md:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                          {/* Header: avatar + name */}
                          <div className="flex items-center gap-4  md:py-5">
                            <div className="relative h-16 w-16 shrink-0 ">
                              <Image
                                src={it.avatar}
                                alt={it.name}
                                fill
                                className="rounded-full object-cover"
                              />
                              {/* small red quote badge */}
                              <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-[#d71920] text-white text-[28px]">
                                “
                              </span>
                            </div>
                            <div>
                              <div className="font-bold text-[#1b1d22] leading-tight  xl:text-[28px]">
                                {it.name}
                              </div>
                              {/* {it.role && (
                                <div className="text-xs text-[#1b1d22]/60">
                                  {it.role}
                                </div>
                              )} */}
                            </div>
                          </div>

                          {/* body */}
                          <p className="mt-4 text-[12px] sm:text-[12px] xl:text-[16px] font-bold leading-5 md:leading-6 text-[#26303a]">
                            {it.text}
                          </p>

                          {/* bottom accent line */}
                          <div className="mt-6 flex justify-end gap-1">
                            <span className="h-[3px] w-6 rounded-full bg-[#d71920]" />
                            <span className="h-[3px] w-4 rounded-full bg-[#d71920]" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* custom bullets container (bottom-right like screenshot) */}
                  <div className="t-bullets absolute -bottom-7 right-2 flex gap-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
}

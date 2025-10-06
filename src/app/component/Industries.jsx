"use client";

import React from "react";
import Image from "next/image";

const DEFAULT_ITEMS = [
  {
    title: "Medical & Pharma Services",
    desc:
      "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: "/images/pills.png",
  },
  {
    title: "Training & Fitness",
    desc:
      "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: "/images/running-shoes.png",
  },
  {
    title: "Fintech",
    desc:
      "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: "/images/digital-economy.png",
  },
  {
    title: "Health & Fitness",
    desc:
      "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: "/images/healthcare.png",
  },
  {
    title: "Business & Services",
    desc:
      "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: "/images/briefcasetest.png",
  },
  {
    title: "Cleaning Services",
    desc:
      "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: "/images/cleaning.png",
  },
];

export default function Industries({
  items = DEFAULT_ITEMS,
  heading = "Industries",
  initialActive = 1, // highlight the second card by default (like screenshot)
}) {
  const [active, setActive] = React.useState(initialActive);

  return (
    <section className="relative bg-[#eef0f2]">
      <div className="mx-auto w-[95%] max-w-[1200px] py-10 md:py-14">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-[#2b2f36]">
            {heading}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(idx)}
                className={[
                  "group relative text-left rounded-xl bg-white p-6 md:p-7",
                  "shadow-[0_6px_24px_rgba(0,0,0,0.08)]",
                  "transition-all duration-200",
                  isActive ? "ring-1 ring-[#ffd7da]" : "hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)]",
                ].join(" ")}
              >
                {/* top content */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 grid h-15 w-15 place-items-center rounded-md ">
                    {/* Replace with your SVG or PNG */}
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={35}
                      height={35}
                      className="object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[15px] md:text-[16px]  lg:text-[16px] xl:text-[18px] lg:leading-tight font-extrabold text-[#2f3339]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] lg:text-[12px]  xl:text-[14px] lg:leading-6 text-[#20222D]">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* bottom accent (red underline on active) */}
                <span
                  className={[
                    "pointer-events-none absolute left-0 right-0 bottom-0 h-[6px] rounded-b-xl",
                    "transition-all duration-200",
                    isActive ? "bg-[#d71920]" : "bg-transparent group-hover:bg-[#f6f7f8]",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

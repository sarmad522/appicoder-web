"use client";

import Image from "next/image";

const AWARDS = [
  { src: "/images/items1.png", alt: "ITFirms — Top Mobile App Development Company" },
  { src: "/images/award2.png", alt: "TopDevelopers — Top Mobile App Developers 2020", featured: true },
  { src: "/images/award3.png", alt: "Clutch — Top React Native Developers" },
  { src: "/images/award4.png", alt: "AppFutura — Top Mobile App Development Companies" },
];

export default function Awards({ title = "Awards and Recognitions", items = AWARDS }) {
  return (
    <section className="relative bg-white">
      <div className="mx-auto w-[95%] max-w-[1280px] py-10 md:py-14">
        <h2 className="text-center text-[#1b1d22] font-bold tracking-tight text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[42px] ">
          {title}
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
          {items.map(({ src, alt, featured }, i) => {
            const isBig = featured || i === 1;

            // ✅ Explicit widths per breakpoint (no w-auto)
            const base =
              "relative mx-auto grid place-items-center rounded-full overflow-hidden aspect-square";
            const normalW =
              "w-[220px] sm:w-[240px] md:w-[220px] lg:w-[260px] xl:w-[280px]";
            const bigW =
              "w-[220px] sm:w-[240px] md:w-[240px] lg:w-[300px] xl:w-[340px]";

            return (
              <div key={i} className={`${base} ${isBig ? bigW : normalW}`}>
                <div className="relative h-full w-full">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    // match the visual widths above so Next.js picks correct srcset
                    sizes="(max-width: 768px) 240px, (max-width: 1024px) 25vw, 20vw"
                    priority={i === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* optional soft bg */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[8%] top-[58%] h-40 w-40 -translate-y-1/2 rounded-full bg-[#1b1d22]/[0.03] blur-2xl" />
          <div className="absolute right-[10%] top-[62%] h-48 w-48 -translate-y-1/2 rounded-full bg-[#1b1d22]/[0.03] blur-2xl" />
        </div>
      </div>
    </section>
  );
}

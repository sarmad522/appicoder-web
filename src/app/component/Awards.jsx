"use client";

import Image from "next/image";

const AWARDS = [
  {
    src: "/images/items1.png",
    alt: "ITFirms — Top Mobile App Development Company",
  },
  {
    src: "/images/award2.png", // the big round one
    alt: "TopDevelopers — Top Mobile App Developers 2020",
    featured: true,
  },
  {
    src: "/images/award3.png",
    alt: "Clutch — Top React Native Developers",
  },
  {
    src: "/images/award4.png",
    alt: "AppFutura — Top Mobile App Development Companies",
  },
];

export default function Awards({
  title = "Awards and Recognitions",
  items = AWARDS,
}) {
  return (
    <section className="relative bg-white">
      <div className="mx-auto w-[95%] max-w-[1280px] py-10 md:py-14">
        {/* Heading */}
        <h2 className="text-center text-[#1b1d22] font-bold tracking-tight text-[24px] sm:text-[28px] md:text-[44px]">
          {title}
        </h2>

        {/* Badges row */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
  {items.map(({ src, alt, featured }, i) => {
    const isBig = featured || i === 1; // 👉 2nd badge always slightly larger

    const base =
      "relative mx-auto grid place-items-center rounded-full overflow-hidden aspect-square w-full";
    const normalSizes =
      "max-w-[140px] sm:max-w-[160px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[280px]";
    const bigSizes =
      "max-w-[160px] sm:max-w-[180px] md:max-w-[240px] lg:max-w-[300px] xl:max-w-[340px]";

    return (
      <div key={i} className={`${base} ${isBig ? bigSizes : normalSizes}`}>
        <div className="relative h-[70%] w-[70%] sm:h-[72%] sm:w-[72%] md:h-full md:w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 20vw"
            priority={i === 0}
          />
        </div>
      </div>
    );
  })}
</div>



        {/* soft vignette background circles to match the polished look (optional) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[8%] top-[58%] h-40 w-40 -translate-y-1/2 rounded-full bg-[#1b1d22]/[0.03] blur-2xl" />
          <div className="absolute right-[10%] top-[62%] h-48 w-48 -translate-y-1/2 rounded-full bg-[#1b1d22]/[0.03] blur-2xl" />
        </div>
      </div>
    </section>
  );
}

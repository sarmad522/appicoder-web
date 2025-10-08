// components/ServicesSection.jsx
"use client";
import Image from "next/image";

/**
 * Pixel-perfect Services section
 * - Background is a real image clipped by rounded card corners
 * - Left: title + subtitle + 2-column bullet list with circular icon badges (icons via URL)
 * - Right: illustration image
 * - Fully responsive
 */

const services = [
  {
    title: "Custom Mobile Applications",
    blurb: "iOS, Android and Wearable Apps",
    iconUrl: "/images/textmon.png",
  },
  {
    title: "Artificial Intelligence",
    blurb: "Innovative AI & ML Solutions",
    iconUrl: "/images/artificial.png",
  },
  {
    title: "Custom Web Development",
    blurb: "Robust Webs, Progressive Web Apps",
    iconUrl: "/images/webdevelopemtn.png",
  },
  {
    title: "Blockchain Development",
    blurb: "Custom Blockchain Solutions",
    iconUrl: "/images/blockchaing.png",
  },
  {
    title: "Augmented Reality",
    blurb: "Futuristic AR Apps",
    iconUrl: "/images/arugumented.png",
  },
  {
    title: "MVP Development",
    blurb: "For Startups & Entrepreneurs",
    iconUrl: "/images/mvpdevelopment.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative isolate ">
      <div className="relative mx-auto xl:max-w-[1920px] w-[100%]  min-h-screen">
        {/* Card with clipped background image */}
<div className="relative overflow-hidden  min-h-[1400px] md:min-h-[820px] lg:min-h-[920px] xl:min-h-[1400px]">
          {/* Background image (exact look) */}
          <Image
            src="/images/service.png" // <= put your background here (rename from 'Group 170.png')
            alt="Services background"
            fill
            priority
            className=" object-center  object-cover   md:object-[60%_center] w-[100%]   h-[1200px]"
          />

          {/* Optional: top diagonal soft shadow */}

          {/* Content over bg */}
          <div className="absolute left-[5%]  bottom-[40%] md:bottom-[30%]   md:left-[2%] xl:left-[5%] z-10 w-[90%]  mx-auto " >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-10">
              {/* LEFT: Heading + bullets */}
              <div className="md:col-span-8  lg:col-span-8 text-white  flex flex-col  md:justify-end items-start overflow-hidden">
                <h3 className="text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[64px] font-bold leading-tight tracking-tight">
                  Our Services
                </h3>
                <p className="mt-2 text-white text-base sm:text-[17px] xl:text-[26px]">
                  Get to know about what we’re good at.
                </p>

                {/* Bullets */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2  ">
                  {services.map(({ title, blurb, iconUrl }, idx) => (
                    <div key={idx} className="flex items-start  gap-4 xl:pb-[20px]  ">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#d71920] shadow-sm ring-1 ring-black/5">
                        <Image
                          src={iconUrl}
                          alt={title}
                          width={35}
                          height={35}
                          className="h-16 w-16 object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold leading-tight">
                          <span className="text-[17px] sm:text-[18px] md:text-[14px] lg:text-[16px]  xl:text-[24px]">{title}</span>
                        </div>
                        <div className="mt-0.5 text-white text-[13.5px] sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                          {blurb}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Illustration */}
              <div className="md:col-span-4  lg:col-span-4 relative mt-4 lg:mt-0">
<div className="absolute w-full   md:mt-0 inset-0 top-[-220px] md:[inset:unset] md:top-0 md:-right-20 md:ml-auto max-w-[800px] mx-auto w-[70%] md:w-full lg:w-full lg:min-h-[600px]">
                  <Image
                    src="/images/compute.png"
                    alt="Services illustration"
                    width={700}
                    height={800}
                    className="select-none w-full  object-cover  md:min-h-[580px] lg:min-h-[700px]  xl:min-h-[1000px]  md:absolute   lg:-right-8  md:-bottom-102 lg:bottom-55  xl:bottom-25"
                    priority
                    
                  />
                </div>
              </div>
            </div>

            {/* Decorative dark curve (optional) */}
            
          </div>
        </div>
      </div>
    </section>
  );
}

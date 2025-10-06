"use client";

import React from "react";
import Image from "next/image";

export default function ProductsGallery() {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [active, setActive] = React.useState("ALL");

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/products.json", { cache: "no-store" });
        const data = await res.json();
        if (!cancelled) {
          setProducts(data.products || []);
          setLoading(false);
        }
      } catch (e) {
        console.error("Failed to load products.json", e);
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const categories = React.useMemo(() => {
    const set = new Set(products.map(p => p.category));
    return ["ALL", ...Array.from(set)];
  }, [products]);

  const visible = React.useMemo(
    () => (active === "ALL" ? products : products.filter(p => p.category === active)),
    [active, products]
  );

  return (
    <section className="relative isolate overflow-hidden bg-[#d71920]">
      {/* background pattern (optional) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
        style={{ backgroundImage: "url('/images/bagproduct.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      />

      <div className="mx-auto w-[95%] xl:max-w-[1920px] py-10 md:py-14">
        <h2 className="text-center text-white text-[36px] md:text-[44px] lg:text-[48px] font-extrabold">
          Products
        </h2>

        {/* tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {categories.map(cat => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative pb-2 text-sm md:text-[15px] font-semibold tracking-tight transition
                  ${isActive ? "text-white" : "text-white/85 hover:text-white"}`}
              >
                {cat}
                <span
                  className={`absolute -bottom-[6px] left-0 right-0 mx-auto h-[3px] rounded-full bg-white
                             transition-all duration-200 ${isActive ? "w-10 opacity-100" : "w-0 opacity-0"}`}
                />
              </button>
            );
          })}
        </div>

        {/* grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[260px] md:h-[280px] rounded-xl bg-white/15 animate-pulse"
              />
            ))}

          {!loading &&
            visible.map(p => (
              <article
                key={p.id}
                className="group relative rounded-xl bg-white p-1 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              >
                <div className="relative h-[240px] md:h-[260px] rounded-[14px] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />

                  {/* hover overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-black/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {/* focus bracket icon mimic */}
                    <div className="mb-3 h-10 w-10 rounded-md ring-2 ring-white/80" />
                    <h3 className="text-white font-extrabold text-lg">{p.title}</h3>
                    {p.desc && (
                      <p className="mt-2 text-white/85 text-[13px] leading-5 max-w-[36ch]">
                        {p.desc}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}

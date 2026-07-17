"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Canlı Müzik Faslı",
    description: "Sahne",
    image: "/images/sanatci-2.jpg",
  },
  {
    title: "Çiğ Köfte Şovu",
    description: "Gelenek",
    image: "/images/cigkofte.webp",
  },
  {
    title: "Urfa Kebabı İkramı",
    description: "Lezzet",
    image: "/images/kebap.webp",
  },
  {
    title: "Geleneksel Mırra",
    description: "Ritüel",
    image: "/images/mirra.jpg",
  },
  {
    title: "Halay ve Oyunlar",
    description: "Eğlence",
    image: "/images/Eglencee-3.jpg",
  },
  {
    title: "Tarihi Avlu ve Teras",
    description: "Atmosfer",
    image: "/images/balkon.jpg",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="gece-akisi" className="scroll-mt-24 bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Gecenin Her Anı,
          <br />
          Yüzyıllık Bir Gelenek.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Gecenin Akışı
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

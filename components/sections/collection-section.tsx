"use client";

import { FadeImage } from "@/components/fade-image";

const menuItems = [
  {
    id: 1,
    name: "İçli Köfte",
    label: "Arasıcak",
    image: "/images/iclikofte.jpg",
  },
  {
    id: 2,
    name: "Fındık Lahmacun",
    label: "Arasıcak",
    image: "/images/lahmacun.jpeg",
  },
  {
    id: 3,
    name: "Urfa Kebabı",
    label: "Ana Yemek",
    image: "/images/kebap.webp",
  },
  {
    id: 4,
    name: "Lebeni Çorbası",
    label: "Çorba",
    image: "/images/lebeni.webp",
  },
  {
    id: 5,
    name: "Bostana Salatası",
    label: "Salata",
    image: "/images/bostana.webp",
  },
  {
    id: 6,
    name: "Çiğ Köfte",
    label: "Gecenin Yıldızı",
    image: "/images/cigkofte.webp",
  },
  {
    id: 7,
    name: "Baklava",
    label: "Tatlı",
    image: "/images/baklava.jpg",
  },
  {
    id: 8,
    name: "Ayran",
    label: "İçecek",
    image: "/images/ayran.jpg",
  },
  {
    id: 9,
    name: "Çay",
    label: "İçecek",
    image: "/images/cay.jpeg",
  },
  {
    id: 10,
    name: "Geleneksel Mırra",
    label: "İkram",
    image: "/images/mirra.jpg",
  },
];

export function CollectionSection() {
  return (
    <section id="menu" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Sıra Gecesi Menüsü
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Tüm ikramlar sıra gecesi ücretine dahildir. Su gece boyunca sınırsızdır.
        </p>
      </div>

      {/* Menu Grid: 2 sütun mobil, 5 sütun masaüstü */}
      <div className="grid grid-cols-2 gap-4 px-6 pb-24 md:grid-cols-5 md:gap-5 md:px-12 lg:px-20">
        {menuItems.map((item) => (
          <div key={item.id} className="group">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
              <FadeImage
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-3">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                {item.label}
              </p>
              <h3 className="mt-1 text-sm font-medium leading-snug text-foreground md:text-base">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

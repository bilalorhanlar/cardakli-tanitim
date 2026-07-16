"use client";

import { FadeImage } from "@/components/fade-image";

const menuItems = [
  {
    id: 1,
    name: "İçli Köfte",
    description: "Arasıcak olarak servis edilen el yapımı içli köfte",
    image: "/images/menu-icli-kofte.jpg",
  },
  {
    id: 2,
    name: "Fındık Lahmacun",
    description: "İncecik hamuruyla ağızda dağılan Urfa usulü lahmacun",
    image: "/images/menu-findik-lahmacun.jpg",
  },
  {
    id: 3,
    name: "Urfa Kebabı",
    description: "Közde pişen, gecenin ana yemeği Urfa kebabı",
    image: "/images/menu-urfa-kebabi.jpg",
  },
  {
    id: 4,
    name: "Lebeni Çorbası",
    description: "Yoğurtlu geleneksel Urfa çorbası ve bostana salatası",
    image: "/images/menu-lebeni-corbasi.jpg",
  },
  {
    id: 5,
    name: "Çiğ Köfte",
    description: "Gecenin yıldızı; gözünüzün önünde yoğrulan çiğ köfte",
    image: "/images/menu-cig-kofte.jpg",
  },
  {
    id: 6,
    name: "Baklava ve Mırra",
    description: "Tatlı faslı; baklava, çay, ayran ve geleneksel mırra",
    image: "/images/menu-baklava.jpg",
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
          Tüm ikramlar sıra gecesi ücretine dahildir: içli köfte, fındık lahmacun, 1 porsiyon
          Urfa kebabı, lebeni yoğurt çorbası, bostana salatası, çiğ köfte, baklava, ayran,
          çay, su ve geleneksel mırra.
        </p>
      </div>

      {/* Menu Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {menuItems.map((item) => (
            <div key={item.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {menuItems.map((item) => (
            <div key={item.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

const testimonials = [
  {
    quote:
      "Çardaklı Köşk'te sıra gecesine katılmak, Urfa'da yaşadığım en özel deneyimlerden biriydi. Hem sanatçılar hem de servis mükemmeldi. Menüdeki lezzetler gerçekten yöreseldi.",
    author: "Ayşe K.",
    city: "İstanbul",
  },
  {
    quote:
      "Sahne performansı çok keyifliydi. Halaylara katıldık, mırra ikramı ile geceyi tamamladık. Grubumuzun hepsi çok memnun kaldı.",
    author: "Mehmet D.",
    city: "Ankara",
  },
  {
    quote:
      "Rezervasyon kolay oldu, karşılama samimiydi. Urfa kebabı ve çiğ köfte efsaneydi. Mutlaka tekrar geleceğiz.",
    author: "Elif & Ali",
    city: "İzmir",
  },
];

export function TestimonialsSection() {
  return (
    <section id="hakkimizda" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 lg:pb-24">
        <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          19. yüzyılın sonlarında geleneksel Urfa evi planında kesme taştan inşa edilen
          Çardaklı Köşk; şark odaları, avlusu ve Balıklıgöl manzaralı terasıyla
          Şanlıurfa&apos;nın kültürel mirasını bugün de yaşatıyor.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-3 md:px-12 lg:px-20">
        {testimonials.map((t) => (
          <figure key={t.author} className="rounded-2xl bg-secondary p-8">
            <blockquote className="text-base leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              — {t.author}, {t.city}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/hero-avlu.jpg"
          alt="Çardaklı Köşk avlusunda akşam"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - background color at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
}

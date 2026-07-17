"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          19. yüzyılın sonlarında geleneksel Urfa evi planında kesme taştan inşa edilen
          Çardaklı Köşk; şark odaları, avlusu ve Balıklıgöl manzaralı terasıyla
          Şanlıurfa&apos;nın kültürel mirasını bugün de yaşatıyor.
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/anasayfa.webp"
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

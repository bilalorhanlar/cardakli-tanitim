"use client";

import Image from "next/image";

const specs = [
  { label: "Program", value: "20:00 – 23:00" },
  { label: "Şark Odası", value: "4" },
  { label: "İkram Çeşidi", value: "12" },
  { label: "Kapasite", value: "50 kişi" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-r border-border p-6 text-center last:border-r-0 md:border-b-0 md:p-8"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-medium text-foreground text-2xl md:text-4xl">
              {spec.value}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width Image */}
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <Image
          src="/images/hakkimizda-kosk.jpg"
          alt="Çardaklı Köşk'ün tarihi taş mimarisi"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}

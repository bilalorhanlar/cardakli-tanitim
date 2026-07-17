"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [musicTranslateX, setMusicTranslateX] = useState(-100);
  const [tableTranslateX, setTableTranslateX] = useState(100);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);
  const isMobile = useIsMobile();

  // Smaller slide distance on mobile for a calmer animation
  const slideDistance = isMobile ? 40 : 100;

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;

    // Calculate progress based on scroll position
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));

    // Music image comes from left
    setMusicTranslateX((1 - progress) * -slideDistance);

    // Table image comes from right
    setTableTranslateX((1 - progress) * slideDistance);

    // Title fades out as blocks come together
    setTitleOpacity(1 - progress);
  }, [slideDistance]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransforms]);

  return (
    <section id="sira-gecesi" className="bg-background">
      {/* Scroll-Animated Grid - shorter scrub on mobile */}
      <div ref={sectionRef} className="relative" style={{ height: isMobile ? "150vh" : "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full">
            {/* Title - positioned behind the blocks */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
              style={{ opacity: titleOpacity }}
            >
              <h2 className="text-[12vw] font-medium leading-[0.95] tracking-tighter text-foreground md:text-[10vw] lg:text-[8vw] text-center px-6">
                Müzik &amp; Sofra.
              </h2>
            </div>

            {/* Image Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-12 lg:px-20">
              {/* Music Image - comes from left */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${musicTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${musicTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/images/sanatci-3.jpg"
                  alt="Sıra gecesinde canlı müzik faslı"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                    Canlı Müzik
                  </span>
                </div>
              </div>

              {/* Table Image - comes from right */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${tableTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${tableTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/images/sofra-menu.webp"
                  alt="Yöresel Urfa sofrası"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                    Yöresel Sofra
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36 lg:pb-14">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Her akşam 19:30 – 23:00
          </p>
          <p className="mt-8 leading-relaxed text-muted-foreground text-xl md:text-2xl lg:text-3xl text-center">
            Çardaklı Köşk&apos;te her akşam, usta sanatçılar Tekin Tatar ve Hakim Aslan ile
            ekiplerinin canlı sahne performansları eşliğinde yöresel türküler söylenir,
            halaylar çekilir ve Urfa mutfağının en özel lezzetleri aynı sofrada buluşur.
          </p>
        </div>
      </div>
    </section>
  );
}

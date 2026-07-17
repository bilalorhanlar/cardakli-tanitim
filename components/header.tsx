"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sıra Gecesi", href: "#gece-akisi" },
  { label: "Menü", href: "#menu" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "İletişim", href: "#rezervasyon" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü açıkken de açık zemin kullan ki içerik okunur kalsın
  const isSolid = isScrolled || isMenuOpen;

  // Hover'da alttan beliren ince çizgi efekti
  const linkClass = `relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
    isSolid
      ? "text-muted-foreground hover:text-foreground"
      : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]"
  }`;

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl transition-all duration-300 ${isSolid ? `bg-background/90 backdrop-blur-md ${isMenuOpen ? "rounded-3xl" : "rounded-full"}` : "bg-transparent"}`}
      style={{
        boxShadow: isSolid ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex h-14 items-center justify-between px-4 transition-all duration-300 md:h-16 md:px-6">
        {/* Logo - left */}
        <Link href="#" className="flex min-w-0 shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Çardaklı Köşk Konukevi"
            width={200}
            height={100}
            className={`h-12 w-auto object-contain transition-all duration-300 md:h-14 ${isSolid ? "" : "drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"}`}
            priority
          />
        </Link>

        {/* Desktop Navigation + CTA - right */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
          <Link
            href="#rezervasyon"
            className={`px-5 py-2 text-sm font-medium transition-all rounded-full ${isSolid ? "bg-primary text-primary-foreground shadow-sm hover:opacity-90" : "bg-white text-foreground shadow-md hover:bg-white/90"}`}
          >
            Rezervasyon
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors md:hidden ${isSolid ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"}`}
          aria-label="Menüyü aç/kapat"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border/60 py-4 text-base font-medium text-foreground transition-colors last:border-b-0 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#rezervasyon"
              className="mt-5 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Rezervasyon
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

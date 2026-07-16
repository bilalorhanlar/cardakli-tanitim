"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sıra Gecesi", href: "#sira-gecesi" },
  { label: "Menü", href: "#menu" },
  { label: "Galeri", href: "#galeri" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "İletişim", href: "#iletisim" },
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

  const linkClass = `text-sm transition-colors ${isSolid ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`;

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl transition-all duration-300 ${isSolid ? `bg-background/90 backdrop-blur-md ${isMenuOpen ? "rounded-3xl" : "rounded-full"}` : "bg-transparent"}`}
      style={{
        boxShadow: isSolid ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex h-14 items-center justify-between px-4 transition-all duration-300 md:h-16 md:px-6">
        {/* Logo - left */}
        <Link href="#" className="flex min-w-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Çardaklı Köşk Konukevi"
            width={200}
            height={100}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation + CTA - right */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
          <Link
            href="#iletisim"
            className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${isSolid ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-white text-foreground hover:bg-white/90"}`}
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
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#iletisim"
              className="mt-4 bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground rounded-full"
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

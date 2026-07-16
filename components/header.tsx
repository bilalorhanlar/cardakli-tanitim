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

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md rounded-full" : "bg-transparent"}`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Çardaklı Köşk Konukevi"
            width={48}
            height={38}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className={`text-lg font-medium tracking-tight transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
            ÇARDAKLI KÖŞK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#iletisim"
            className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${isScrolled ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-white text-foreground hover:bg-white/90"}`}
          >
            Rezervasyon
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Menüyü aç/kapat"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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

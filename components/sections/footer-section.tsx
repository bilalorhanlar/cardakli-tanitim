"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Landmark, Speaker, UtensilsCrossed, Music, Instagram } from "lucide-react";

const eventFeatures = [
  { icon: Landmark, label: "Kapalı alan + tarihi atmosfer" },
  { icon: Speaker, label: "Profesyonel ses ve ışık sistemi" },
  { icon: UtensilsCrossed, label: "Zengin menü seçenekleri" },
  { icon: Music, label: "Sanatçı ekibiyle özel program imkânı" },
];

const footerLinks = {
  kesfet: [
    { label: "Sıra Gecesi", href: "#sira-gecesi" },
    { label: "Gecenin Akışı", href: "#gece-akisi" },
    { label: "Menü", href: "#menu" },
    { label: "Galeri", href: "#galeri" },
    { label: "Hakkımızda", href: "#hakkimizda" },
  ],
};

export function FooterSection() {
  return (
    <footer id="iletisim" className="bg-background">
      {/* Special Events & Group Reservations */}
      <div className="border-t border-border px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Özel Etkinlik ve Grup Rezervasyonları
        </p>
        <h2 className="mt-6 max-w-3xl text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Sadece sıra gecesi değil, özel etkinlikler için de doğru adres.
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Tur grupları, kurumsal organizasyonlar, doğum günü kutlamaları ve arkadaş
          buluşmaları için özel rezervasyon imkânı sunuyoruz. Misafirlerinize
          Şanlıurfa&apos;nın otantik sıra gecesi kültürünü yaşatmak için bizimle
          iletişime geçin.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {eventFeatures.map((feature) => (
            <div key={feature.label} className="flex items-center gap-3 rounded-2xl bg-secondary p-6">
              <feature.icon size={20} className="shrink-0 text-primary" />
              <span className="text-sm text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation CTA */}
      <div className="border-t border-border px-6 py-20 text-center md:px-12 md:py-28 lg:px-20">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Rezervasyon
        </p>
        <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Urfa&apos;nın ruhunu yaşamak için yerinizi ayırtın.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Bireysel misafirler, tur grupları, kurumsal organizasyonlar ve özel
          kutlamalar için her akşam rezervasyon alıyoruz.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+905325798308"
            className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Hemen Ara: 0532 579 83 08
          </a>
          <a
            href="https://wa.me/905325798308"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            WhatsApp ile Yazın
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Çardaklı Köşk Konukevi"
                width={140}
                height={110}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Balıklıgöl&apos;ün karşısında, tarihi bir Urfa konağında otantik sıra
              gecesi deneyimi. Canlı müzik, yöresel sofra ve yüzyıllık gelenek.
            </p>
          </div>

          {/* Keşfet */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Keşfet</h4>
            <ul className="space-y-3">
              {footerLinks.kesfet.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">İletişim</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Balıklıgöl Cad. Yeni Mah. No:40, 63000 Eyyübiye / Şanlıurfa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+905325798308" className="transition-colors hover:text-foreground">
                  0532 579 83 08
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+905422374848" className="transition-colors hover:text-foreground">
                  0542 237 48 48
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@urfasiragecelerim.com" className="transition-colors hover:text-foreground">
                  info@urfasiragecelerim.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0" />
                <span>Her akşam 19:30 – 23:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="shrink-0" />
                <a
                  href="https://www.instagram.com/cardaklikoskonukevi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  @cardaklikoskonukevi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Çardaklı Köşk. Tüm hakları saklıdır.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/cardaklikoskonukevi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

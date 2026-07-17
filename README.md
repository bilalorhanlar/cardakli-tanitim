# Çardaklı Köşk — Urfa Sıra Gecesi Tanıtım Sitesi

Şanlıurfa'da, Balıklıgöl'ün karşısındaki tarihi Çardaklı Köşk'te düzenlenen sıra geceleri için Next.js tabanlı tanıtım sitesi.

## Teknolojiler

- Next.js (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
- lucide-react (ikonlar)

## Geliştirme

```bash
npm install
npm run dev
```

Site http://localhost:3000 adresinde açılır.

## Üretim (Production) derlemesi

```bash
npm run build
npm run start
```

## Görseller

Tüm görseller `public/images/` klasöründe duruyor:

| Dosya | Kullanıldığı yer |
| --- | --- |
| `anasayfa.webp` | Açılış (hero) ana görseli ve Hakkımızda alt görseli |
| `merdiven.jpg`, `sanatci-2.jpg`, `cigkofte.webp`, `balkon.jpg` | Hero kaydırma animasyonundaki yan görseller (masaüstü) |
| `sanatci-3.jpg`, `sofra-menu.webp` | "Müzik & Sofra" bölümü |
| `sanatci-2.jpg`, `cigkofte.webp`, `kebap.webp`, `mirra.jpg`, `sanatci-3.jpg`, `balkon.jpg` | "Gecenin Akışı" kartları |
| `gece-mekan.jpg` (merkez), `merdiven.jpg`, `sofra-menu.webp`, `sanatci-2.jpg`, `mirra.jpg` (yanlar) | "Gelenek Burada Yaşıyor" animasyonlu bölüm |
| `gece-mekan.jpg`, `sanatci-*.jpg`, `balkon.jpg`, `cigkofte.webp`, `sofra-menu.webp`, `mirra.jpg`, `merdiven.jpg` | Yatay kaydırmalı galeri |
| `iclikofte.jpg`, `lahmacun.jpeg`, `kebap.webp`, `lebeni.webp`, `bostana.webp`, `cigkofte.webp`, `baklava.jpg`, `ayran.jpg`, `cay.jpeg`, `mirra.jpg` | Sıra gecesi menüsü kartları |
| `logo.png` | Navbar, footer ve favicon |

## Sayfa Bölümleri

1. **Hero** — Scroll animasyonlu açılış, "ÇARDAKLI" başlığı
2. **Sıra Gecesi (Müzik & Sofra)** — İki görselin birleştiği scroll animasyonu
3. **Gecenin Akışı** — Canlı müzik, çiğ köfte şovu, Urfa kebabı, mırra, halay, şark odaları
4. **Gelenek Burada Yaşıyor** — Tam ekran scroll animasyonu + kelime kelime beliren tanıtım metni
5. **Galeri** — Yatay kaydırmalı fotoğraf galerisi
6. **Menü** — Ücrete dahil ikramlar
7. **Bilgi Kartları** — Program saati, şark odası, ikram çeşidi, kapasite
8. **Hakkımızda** — Köşkün tarihçesi + misafir yorumları
9. **İletişim / Footer** — Rezervasyon CTA, telefon, WhatsApp, adres

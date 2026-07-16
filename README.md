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

Tüm görseller `public/images/` klasöründe açıklayıcı isimlerle placeholder olarak duruyor. Gerçek fotoğraflarla değiştirmek için aynı dosya adlarını koruyarak üzerine yazmanız yeterli:

| Dosya | Kullanıldığı yer |
| --- | --- |
| `hero-avlu.jpg` | Açılış (hero) ana görseli ve Hakkımızda alt görseli |
| `hero-sol-1.jpg`, `hero-sol-2.jpg`, `hero-sag-1.jpg`, `hero-sag-2.jpg` | Hero kaydırma animasyonundaki yan görseller |
| `sira-gecesi-muzik.jpg`, `sira-gecesi-sofra.jpg` | "Müzik & Sofra" bölümü |
| `akis-*.jpg` (6 adet) | "Gecenin Akışı" kartları |
| `gelenek-ana.jpg`, `gelenek-sol-*.jpg`, `gelenek-sag-*.jpg` | "Gelenek Burada Yaşıyor" animasyonlu bölüm |
| `galeri-1.jpg` … `galeri-8.jpg` | Yatay kaydırmalı galeri |
| `menu-*.jpg` (6 adet) | Sıra gecesi menüsü kartları |
| `hakkimizda-kosk.jpg` | Bilgi kartlarının altındaki geniş görsel |

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

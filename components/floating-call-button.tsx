"use client";

import { Phone } from "lucide-react";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.25 8.24-8.25Zm-3.53 4.1c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.16-.47-.28-.25-.13-1.46-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.15.17-.29.19-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43-.14 0-.31-.01-.47-.01Z" />
    </svg>
  );
}

export function FloatingCallButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 md:hidden">
      {/* WhatsApp */}
      <a
        href="https://wa.me/905325798308"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile rezervasyon: 0532 579 83 08"
        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-[#128C7E]/40 ring-1 ring-white/30 transition-transform active:scale-95"
      >
        <span className="absolute -inset-1 rounded-3xl bg-[#25D366]/20 blur-md" />
        <WhatsAppIcon size={26} />
      </a>

      {/* Phone */}
      <a
        href="tel:+905325798308"
        aria-label="Rezervasyon için ara: 0532 579 83 08"
        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/40 ring-1 ring-white/30 transition-transform active:scale-95"
      >
        <span className="absolute inset-0 animate-ping rounded-2xl bg-primary/30" />
        <span className="absolute -inset-1 rounded-3xl bg-accent/20 blur-md" />
        <Phone size={24} className="relative" />
      </a>
    </div>
  );
}

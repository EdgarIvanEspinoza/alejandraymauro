"use client";

import Image from "next/image";

export default function FloralDecoration() {
  return (
    <>
      {/* Decoración Móvil (Centrada) */}
      <div className="md:hidden fixed left-1/2 -translate-x-1/2 bottom-0 w-[24rem] h-screen pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/flower-background.webp"
            alt="Decoración floral"
            fetchPriority="high"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "bottom center",
            }}
            className="opacity-75"
            priority
          />
        </div>
      </div>

      {/* Decoración Izquierda (Desktop/Tablet) */}
      <div className="hidden md:block fixed -left-32 bottom-0 h-screen w-160 pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/flower-background.webp"
            alt="Decoración floral"
            fetchPriority="high"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "bottom left",
            }}
            className="opacity-90 scale-x-100"
            priority
          />
        </div>
      </div>

      {/* Decoración Derecha (Desktop/Tablet) */}
      <div className="hidden md:block fixed -right-32 bottom-0 h-screen w-160 pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/flower-background.webp"
            alt="Decoración floral"
            fetchPriority="high"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "bottom right",
            }}
            className="opacity-90 scale-x-[-1]"
            priority
          />
        </div>
      </div>
    </>
  );
}

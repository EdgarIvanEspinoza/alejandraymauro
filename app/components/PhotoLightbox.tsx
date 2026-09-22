"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PhotoLightboxProps = {
  src: string;
  alt: string;
};

export default function PhotoLightbox({ src, alt }: PhotoLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block h-full w-full cursor-zoom-in text-left"
        aria-label={`Expandir ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex animate-lightbox-in items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative h-[85vh] w-full max-w-6xl animate-lightbox-image-in"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl leading-none text-white transition-colors hover:bg-white hover:text-black"
              aria-label="Cerrar imagen"
            >
              &times;
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

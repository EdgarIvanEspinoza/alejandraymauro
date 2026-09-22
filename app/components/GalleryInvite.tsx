import Image from "next/image";

const galleryImages = [
  "/history1.jpg",
  "/history2.jpg",
  "/history3.jpg",
  "/history4.jpg",
  "/history5.jpg",
  "/history1.jpg",
  "/history2.jpg",
  "/history3.jpg",
  "/history4.jpg",
  "/history5.jpg",
  "/history2.jpg",
  "/history4.jpg",
];

export default function GalleryInvite() {
  const galleryUrl = process.env.NEXT_PUBLIC_GALLERY_URL || "/media";
  const galleryLinks = [
    {
      href: galleryUrl,
      label: "Galeria oficial",
      external: galleryUrl.startsWith("http"),
      featured: true,
    },
    {
      href: "/media/imanes",
      label: "Fotos de los imanes",
      external: false,
      featured: false,
    },
    {
      href: "/media/camara-desechable",
      label: "Cámaras desechables",
      external: false,
      featured: false,
    },
  ];

  return (
    <section
      id="fotos"
      className="relative mt-8 w-full min-h-[360px] md:min-h-[450px] overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 grid-rows-3 md:grid-rows-2 opacity-30 blur-[1px]">
        {galleryImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative w-full h-full animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-transparent to-black/45" />

      <div className="relative z-10 flex h-full min-h-[360px] md:min-h-[450px] items-center justify-center px-6 py-10">
        <div className="max-w-2xl text-center rounded-xl border border-white/50 bg-black/30 p-8 md:p-10 shadow-2xl backdrop-blur-sm">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-4 drop-shadow-lg">
            Revive la magia
          </h3>
          <p className="text-white/95 text-lg md:text-xl leading-relaxed mb-6 drop-shadow-md">
            Explora los momentos mas especiales de nuestra boda. Pronto
            compartiremos aqui todas las fotos para que puedas revivir cada
            instante.
          </p>
          <div className="flex flex-col gap-3">
            {galleryLinks.slice(0, 1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className={`block w-full rounded-md border-2 px-5 py-3 text-center font-semibold uppercase tracking-wide transition-colors ${
                  link.featured
                    ? "border-white bg-white text-black hover:border-black hover:bg-black hover:text-white"
                    : "border-white bg-black/25 text-white hover:bg-black/45"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {galleryLinks.slice(1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block w-full rounded-md border-2 border-white bg-black/25 px-5 py-3 text-center font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black/45"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

type GalleryFile = {
  key: string;
  url: string;
  lastModified: string | null;
  size: number;
};

type MediaGalleryProps = {
  initialFiles: GalleryFile[];
};

const categories = [
  {
    id: "oficiales",
    title: "Fotos Oficiales",
    tokens: ["oficial", "official", "fotos-oficiales", "oficiales/"],
  },
  {
    id: "camara-prestada",
    title: "Fotos de la Camara Prestada",
    tokens: ["camara", "camera", "prestada", "camara-prestada"],
  },
  {
    id: "chapas",
    title: "Fotos de las Chapas",
    tokens: ["chapas", "chapa", "cabina", "photobooth", "photo-booth"],
  },
] as const;

function normalizeForMatch(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function groupFilesByCategory(files: GalleryFile[]) {
  const grouped: Record<string, GalleryFile[]> = {
    oficiales: [],
    "camara-prestada": [],
    chapas: [],
  };

  for (const file of files) {
    const normalizedKey = normalizeForMatch(file.key);
    const category = categories.find((item) =>
      item.tokens.some((token) => normalizedKey.includes(token)),
    );

    if (category) {
      grouped[category.id].push(file);
    }
  }

  return grouped;
}

export default function MediaGallery({ initialFiles }: MediaGalleryProps) {
  const groupedFiles = groupFilesByCategory(initialFiles);
  const totalPhotos = categories.reduce(
    (sum, category) => sum + groupedFiles[category.id].length,
    0,
  );

  return (
    <main className="min-h-screen bg-cream-gradient py-24 px-4">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-serif text-lavender-dark mb-3">
            Galeria de Fotos
          </h1>
          <p className="text-lavender-dark/90 text-lg">
            Revive cada momento en nuestras tres colecciones.
          </p>
        </div>

        <div className="rounded-2xl border border-lavender/20 bg-white/80 backdrop-blur-sm p-6 mb-8 shadow-lg">
          <div className="text-sm text-lavender-dark/90 text-center">
            {totalPhotos} fotos publicadas
          </div>
        </div>

        <div className="space-y-10">
          {categories.map((category) => {
            const files = groupedFiles[category.id];

            return (
              <section key={category.id}>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-serif text-lavender-dark">
                    {category.title}
                  </h2>
                  <span className="text-sm text-lavender-dark/80">
                    {files.length} fotos
                  </span>
                </div>

                {files.length === 0 ? (
                  <div className="text-center rounded-xl border border-dashed border-lavender/30 p-8 text-lavender-dark bg-white/60">
                    Aun no hay fotos en esta categoria.
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {files.map((file) => (
                      <div
                        key={file.key}
                        className="group relative aspect-square overflow-hidden rounded-xl bg-white shadow-md"
                      >
                        <Image
                          src={file.url}
                          alt={`${category.title} - foto`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}

          {totalPhotos === 0 ? (
            <div className="text-center rounded-xl border border-dashed border-lavender/30 p-10 text-lavender-dark bg-white/60">
              No hay fotos disponibles en las categorias configuradas.
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}

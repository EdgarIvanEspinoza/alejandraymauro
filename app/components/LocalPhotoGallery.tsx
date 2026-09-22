import Navigation from "./Navigation";
import PhotoLightbox from "./PhotoLightbox";
import FloralDecoration from "./FloralDecoration";

type LocalPhotoGalleryProps = {
  title: string;
  folder: string;
  files: string[];
  collections?: {
    title: string;
    folder: string;
    files: string[];
  }[];
};

export default function LocalPhotoGallery({
  title,
  folder,
  files,
  collections,
}: LocalPhotoGalleryProps) {
  const galleryCollections = collections ?? [
    {
      title,
      folder,
      files,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream-gradient">
      <Navigation />
      <FloralDecoration />
      <main className="min-h-screen px-4 py-16">
        <section className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-4xl text-lavender-dark md:text-6xl font-serif">
              {title}
            </h1>
            <p className="text-lg text-lavender-dark/90">
              {files.length} fotos para revivir cada momento.
            </p>
          </div>

          {galleryCollections.every(
            (collection) => collection.files.length === 0,
          ) ? (
            <div className="rounded-xl border border-dashed border-lavender/30 bg-white/60 p-10 text-center text-lavender-dark">
              Las fotos estaran disponibles pronto.
            </div>
          ) : (
            <div
              className={
                galleryCollections.length > 1
                  ? "grid gap-8 md:grid-cols-2"
                  : "mx-auto max-w-5xl"
              }
            >
              {galleryCollections.map((collection) => (
                <section key={collection.folder}>
                  <div className="mb-4 text-center">
                    <h2 className="text-3xl text-lavender-dark font-serif">
                      {collection.title}
                    </h2>
                    <p className="text-sm text-lavender-dark/80">
                      {collection.files.length} fotos
                    </p>
                  </div>

                  {collection.files.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-lavender/30 bg-white/60 p-8 text-center text-lavender-dark">
                      Las fotos estaran disponibles pronto.
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {collection.files.map((file) => (
                        <div
                          key={`${collection.folder.endsWith("CAM1") ? "cam1" : "cam2"}-${file}`}
                          className="group relative aspect-square overflow-hidden rounded-xl bg-white shadow-md"
                        >
                          <PhotoLightbox
                            src={`/media/${collection.folder}/${encodeURIComponent(file)}`}
                            alt={`${collection.title} - ${file}`}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

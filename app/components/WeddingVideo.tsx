import Image from "next/image";

function getYoutubeVideoId(value?: string) {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);
    const embedMatch = url.pathname.match(/\/embed\/([^/]+)/);

    if (embedMatch?.[1]) {
      return embedMatch[1];
    }

    const queryId = url.searchParams.get("v");
    if (queryId) {
      return queryId;
    }
  } catch {
    // The value can also be a plain YouTube video ID.
  }

  return value.split(/[?&]/)[0].trim() || null;
}

export default function WeddingVideo() {
  const videoId = getYoutubeVideoId(process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID);

  return (
    <section id="video" className="w-full mt-12 mb-12">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
        <h2 className="text-3xl text-center text-lavender-dark font-bold font-serif">
          Un recuerdo para volver a vivir
        </h2>
      </div>

      {videoId ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-xl">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Video de Alejandra y Mauro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black/10 shadow-xl">
          <Image
            src="/history1.jpg"
            alt="Recuerdo de la boda"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-6 text-center text-white">
            <p className="text-lg font-semibold drop-shadow-md">
              Agrega el ID del video de YouTube en NEXT_PUBLIC_YOUTUBE_VIDEO_ID.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

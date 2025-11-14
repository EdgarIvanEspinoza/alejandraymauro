"use client";

export default function OurStory() {
  const chapters = [
    {
      number: "I",
      title: "Dos caminos, un destino",
      content:
        "Desde Venezuela hasta Madrid, llegamos en momentos distintos, buscando nuevos comienzos. Sin imaginarlo, el destino ya había decidido cruzar nuestros caminos.",
    },
    {
      number: "II",
      title: "Entre risas y amistad",
      content:
        "Nos conocimos en el trabajo, pero fue gracias a una amiga en común que comenzamos a coincidir. Así nació una amistad sincera, rodeada de un grupo de amigos que hoy sentimos como familia. Compartimos risas, apoyo y compañía en cada etapa de nuestras vidas.",
    },
    {
      number: "III",
      title: "Cuando el amor floreció",
      content:
        "Después de años de amistad, el cariño se transformó en amor. Nos descubrimos de nuevo, esta vez desde el corazón, y desde entonces caminamos juntos.",
    },
    {
      number: "IV",
      title: "Nuestra pequeña familia",
      content:
        "Balú llegó a nuestras vidas, para llenar nuestra casa de alegría, más amor y completar nuestro hogar.",
    },
    {
      number: "V",
      title: "Bajo un cielo de estrellas",
      content:
        "En una noche tranquila, iluminada por una luna menguante, el camino que habíamos recorrido juntos nos llevó a un momento único: bajo un cielo lleno de estrellas, llegó la sorpresa que marcaría nuestro nuevo comienzo, ese instante en el que decidimos compartir la vida entera.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-4">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-6 mb-8 text-center">
        <div className="text-3xl mb-2">🌿</div>
        <h2 className="text-3xl md:text-4xl font-serif text-lavender-dark font-bold">
          Nuestra Historia
        </h2>
      </div>

      {/* Story Chapters */}
      <div className="space-y-8">
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg hover:bg-white/70 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-lavender/20 flex items-center justify-center">
                  <span className="text-lavender-dark font-serif text-xl font-bold">
                    {chapter.number}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-serif text-lavender-dark font-semibold mb-3">
                  {chapter.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {chapter.content}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Closing message */}
        <div className="relative rounded-xl p-6 md:p-8 text-center bg-linear-to-br from-lavender-light/30 to-gold/20 backdrop-blur-md border-2 border-lavender/30 shadow-[0_8px_32px_rgba(150,123,182,0.2)]">
          <p className="text-lavender font-bold text-lg md:text-xl leading-relaxed italic text-glow">
            Ese fue el comienzo de nuestro &ldquo;para siempre&rdquo;, y
            queremos celebrarlo con quienes han sido parte de esta historia y de
            nuestras vidas.
          </p>
        </div>
      </div>
    </div>
  );
}

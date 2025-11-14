"use client";

import Image from "next/image";

export default function OurStory() {
  const chapters = [
    {
      number: "I",
      title: "DOS CAMINOS, UN DESTINO",
      content:
        "Desde Venezuela hasta Madrid, llegamos en momentos distintos, buscando nuevos comienzos. Sin imaginarlo, el destino ya había decidido cruzar nuestros caminos.",
      align: "right",
      image: "/history1.jpg",
      imageAlt: "Venezuela y Madrid",
    },
    {
      number: "II",
      title: "ENTRE RISAS Y AMISTAD",
      content:
        "Nos conocimos en el trabajo, pero fue gracias a una amiga en común que comenzamos a coincidir. Así nació una amistad sincera, rodeada de un grupo de amigos que hoy sentimos como familia. Compartimos risas, apoyo y compañía en cada etapa de nuestras vidas.",
      align: "left",
      image: "/history2.jpg",
      imageAlt: "Grupo de amigos",
    },
    {
      number: "III",
      title: "CUANDO EL AMOR FLORECIÓ",
      content:
        "Después de años de amistad, el cariño se transformó en amor. Nos descubrimos de nuevo, esta vez desde el corazón, y desde entonces caminamos juntos.",
      align: "right",
      image: "/history3.jpg",
      imageAlt: "Alejandra y Mauro enamorados",
    },
    {
      number: "IV",
      title: "NUESTRA PEQUEÑA FAMILIA",
      content:
        "Balú llegó a nuestras vidas, para llenar nuestra casa de alegría, más amor y completar nuestro hogar.",
      align: "left",
      image: "/history4.jpg",
      imageAlt: "Alejandra, Mauro y Balú",
    },
    {
      number: "V",
      title: "BAJO UN CIELO DE ESTRELLAS",
      content:
        "En una noche tranquila, iluminada por una luna menguante, el camino que habíamos recorrido juntos nos llevó a un momento único: bajo un cielo lleno de estrellas, llegó la sorpresa que marcaría nuestro nuevo comienzo, ese instante en el que decidimos compartir la vida entera.",
      align: "right",
      image: "/history5.jpg",
      imageAlt: "La propuesta bajo las estrellas",
    },
  ];

  return (
    <div className="w-full mb-12 flex flex-col items-center">
      {/* Title Section */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
        <h3 className="text-3xl text-center text-lavender-dark font-bold font-serif">
          Nuestra Historia
        </h3>
      </div>

      {/* Main Card Container */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-6xl w-full shadow-xl border border-lavender/20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-lavender-dark mb-4 tracking-wider">
            NUESTRA HISTORIA
          </h2>
        </div>

        {/* Story Timeline with Serpentine Path */}
        <div className="relative">
          {/* SVG Path for Desktop */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
            style={{ zIndex: 0 }}
            viewBox="0 0 1000 2400"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M 700 100 
                 C 700 200, 650 250, 550 310
                 C 450 370, 300 410, 300 550
                 C 300 630, 350 670, 450 730
                 C 550 790, 700 830, 700 970
                 C 700 1050, 650 1090, 550 1150
                 C 450 1210, 300 1250, 300 1390
                 C 300 1470, 350 1510, 450 1570
                 C 550 1630, 700 1670, 700 1810
                 C 700 1930, 600 2030, 500 2230
                 "
              stroke="#d4c5b9"
              strokeWidth="100"
              fill="none"
              opacity="0.5"
              strokeLinecap="round"
            />
          </svg>

          {/* SVG Path for Mobile - Subtle curves */}
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 h-full pointer-events-none block md:hidden"
            style={{ zIndex: 0, width: "150px" }}
            viewBox="0 0 150 2400"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M 75 -50 
                 C 75 100, 90 200, 75 350
                 C 60 500, 75 600, 75 750
                 C 75 900, 90 1000, 75 1150
                 C 60 1300, 75 1400, 75 1550
                 C 75 1700, 90 1800, 75 1950
                 C 60 2100, 75 2250, 75 2250"
              stroke="#d4c5b9"
              strokeWidth="40"
              fill="none"
              opacity="0.4"
              strokeLinecap="round"
            />
          </svg>

          {/* Chapters */}
          <div
            className="relative space-y-24 md:space-y-32"
            style={{ zIndex: 1 }}
          >
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  chapter.align === "right"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
                style={{ zIndex: 1 }}
              >
                {/* Image */}
                <div
                  className={`w-full md:w-5/12 ${
                    chapter.align === "right" ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <div className="relative w-full aspect-4/3 rounded-lg shadow-xl border-4 border-white/80 mx-auto max-w-sm overflow-hidden">
                    <Image
                      src={chapter.image}
                      alt={chapter.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    chapter.align === "right" ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="text-5xl md:text-6xl font-serif text-center text-lavender-dark mb-3">
                    {chapter.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-center text-lavender-dark mb-4 tracking-wide">
                    {chapter.title}
                  </h3>
                  <p className="text-base md:text-lg text-center text-lavender-dark/80 leading-relaxed">
                    {chapter.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing message */}
          <div className="mt-24 text-center max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-lavender-dark leading-relaxed font-serif">
              Ese fue el comienzo de nuestro &ldquo;para siempre&rdquo;. Y hoy
              queremos celebrarlo con quienes han sido parte de esta historia y
              de nuestras vidas, que uuunas vidas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

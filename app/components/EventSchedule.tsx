"use client";

import Image from "next/image";

interface Event {
  time: string;
  title: string;
  location?: string;
  mapsUrl?: string;
  image: string;
}

const events: Event[] = [
  {
    time: "17:30",
    title: "Ceremonia",
    location: "Iglesia Santa Cristina",
    mapsUrl: "https://maps.app.goo.gl/ZUCM7WT8731GYUPX8",
    image: "/santacristina.webp",
  },
  {
    time: "19:00",
    title: "Cóctel",
    location: "Casa de Burgos",
    mapsUrl: "https://maps.app.goo.gl/k3XyM5Gsdgnw5DjZ8",
    image: "/casaburgos.webp",
  },
  {
    time: "20:30",
    title: "Banquete",
    location: "Casa de Burgos",
    mapsUrl: "https://maps.app.goo.gl/k3XyM5Gsdgnw5DjZ8",
    image: "/casaburgosfiesta.webp",
  },
  {
    time: "23:00",
    title: "Fiesta",
    location: "Casa de Burgos",
    mapsUrl: "https://maps.app.goo.gl/k3XyM5Gsdgnw5DjZ8",
    image: "/tartara.webp",
  },
];

export default function EventSchedule() {
  return (
    <div className="w-full max-w-4xl mx-auto px-3 md:px-6">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 h-full w-px bg-lavender-light"></div>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={event.time}
              className={`flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Círculo en la línea de tiempo */}
              <div className="relative ml-2 md:ml-0 mt-2 md:mt-0"></div>

              {/* Contenido del evento */}
              <div
                className="flex-1 bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-lavender/20 
                            w-[calc(100%-2rem)] md:w-auto relative"
              >
                {/* Contenedor flex para imagen y texto */}
                <div className="flex flex-col md:flex-row md:h-[150px]">
                  {/* Imagen del evento */}
                  <div
                    className={`relative w-full md:w-1/2 h-32 md:h-full shrink-0 ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <Image
                      src={event.image}
                      alt={`Imagen de ${event.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div
                      className={`absolute inset-0 ${
                        index % 2 === 0
                          ? "bg-linear-to-r from-white via-white/10 to-transparent"
                          : "bg-linear-to-l from-white via-white/10 to-transparent"
                      }`}
                    ></div>
                  </div>

                  {/* Información del evento */}
                  <div
                    className={`md:w-1/2 p-5 md:p-8 flex flex-col justify-center ${
                      index % 2 === 0
                        ? "md:order-1 md:text-right"
                        : "md:order-2 md:text-left"
                    }`}
                  >
                    <div className="text-2xl font-serif text-gold-dark mb-1">
                      {event.time}
                    </div>
                    <h3 className="text-xl text-lavender-dark font-medium mb-2">
                      {event.title}
                    </h3>
                    {event.location && (
                      <a
                        href={event.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-forest-dark hover:text-forest transition-colors ${
                          index % 2 === 0 ? "md:ml-auto" : ""
                        }`}
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {event.location}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

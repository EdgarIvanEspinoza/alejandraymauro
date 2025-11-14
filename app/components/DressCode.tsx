"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
}

export default function DressCode() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Fecha de la boda: 22 de mayo de 2026
        const weddingDate = "2026-05-22";
        const response = await fetch(
          `/api/weather?date=${weddingDate}&location=Madrid,ES`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
        // Fallback data
        setWeather({
          temp: 22,
          description: "Soleado y agradable",
          icon: "🌤️",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);
  const menSuits = [
    { color: "Navy", bgColor: "bg-[#1a1f3a]" },
    { color: "Charcoal", bgColor: "bg-[#36454f]" },
    { color: "Forest", bgColor: "bg-forest-dark" },
    { color: "Burgundy", bgColor: "bg-[#800020]" },
  ];

  const womenDresses = [
    { color: "Navy", bgColor: "bg-[#1a1f3a]" },
    { color: "Sage", bgColor: "bg-[#9caf88]" },
    { color: "Blush", bgColor: "bg-[#ffc0cb]" },
    { color: "Gold", bgColor: "bg-gold" },
    { color: "Burgundy", bgColor: "bg-[#800020]" },
  ];

  return (
    <section className="w-full mb-12 flex flex-col items-center">
      {/* Title */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
        <h3 className="text-3xl text-center text-lavender-dark font-bold font-serif">
          Código de Vestimenta
        </h3>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-xl border border-lavender/20">
        {/* Dress Code Type */}
        <div className="text-center mb-8">
          <h4 className="text-4xl md:text-5xl font-serif text-lavender-dark mb-2">
            Formal
          </h4>
          <p className="text-lg text-forest-dark">
            Te invitamos a vestir elegante para celebrar con nosotros
          </p>
        </div>

        {/* Weather Info */}
        <div className="bg-gradient-to-r from-lavender/10 via-gold/10 to-lavender/10 rounded-xl p-6 mb-8 border border-lavender/20">
          {loading ? (
            <div className="text-center py-4">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-lavender"></div>
              <p className="text-sm text-forest-dark mt-2">
                Cargando información del clima...
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">☀️</span>
                  <div>
                    <h6 className="text-lg font-serif text-lavender-dark font-semibold">
                      Clima Esperado
                    </h6>
                    <p className="text-sm text-forest-dark">Mayo en Madrid</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold-dark">
                      {weather?.temp || 22}°C
                    </div>
                    <div className="text-xs text-forest-dark">Temperatura</div>
                  </div>
                  <div className="h-12 w-px bg-lavender/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-lavender">
                      {weather?.icon || "🌤️"}
                    </div>
                    <div className="text-xs text-forest-dark">
                      {weather?.description || "Soleado y agradable"}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gold-dark mt-4 italic">
                Recomendamos telas ligeras y considera traer una chaqueta o chal
                para la noche
              </p>
            </>
          )}
        </div>

        {/* Men's Section */}
        <div className="mb-10">
          <h5 className="text-2xl font-serif text-lavender-dark mb-4 text-center md:text-left">
            Para Caballeros
          </h5>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <p className="text-forest-dark mb-3">
                Traje completo con corbata o pajarita. Colores sugeridos:
              </p>
              <div className="flex flex-wrap gap-3">
                {menSuits.map((suit) => (
                  <div
                    key={suit.color}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${suit.bgColor} shadow-lg border-2 border-white`}
                    ></div>
                    <span className="text-sm text-forest-dark">
                      {suit.color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-gold-dark italic mt-3">
            * Zapatos de vestir en cuero negro o marrón
          </p>
        </div>

        {/* Women's Section */}
        <div className="mb-8">
          <h5 className="text-2xl font-serif text-lavender-dark mb-4 text-center md:text-left">
            Para Damas
          </h5>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <p className="text-forest-dark mb-3">
                Vestido largo o midi elegante. Colores sugeridos:
              </p>
              <div className="flex flex-wrap gap-3">
                {womenDresses.map((dress) => (
                  <div
                    key={dress.color}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${dress.bgColor} shadow-lg border-2 border-white`}
                    ></div>
                    <span className="text-sm text-forest-dark">
                      {dress.color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-gold-dark italic mt-3">
            * Tacones o zapatos elegantes
          </p>
        </div>

        {/* Important Notes */}
        <div className="border-t border-lavender/30 pt-6 mt-6">
          <div className="bg-cream/50 rounded-xl p-4 text-center">
            <p className="text-forest-dark">
              <span className="font-semibold">Nota importante:</span> Por favor
              evita usar blanco, marfil o colores muy claros que puedan
              confundirse con el vestido de la novia y derivados del violeta que
              esta dedicado a la decoración del lugar. 💜
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-lavender">
            <span className="text-2xl">👔</span>
            <span className="text-lg font-light">+</span>
            <span className="text-2xl">👗</span>
          </div>
        </div>
      </div>
    </section>
  );
}

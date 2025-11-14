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
          <div className="space-y-4">
            <p className="text-forest-dark">
              Traje completo con corbata o pajarita.
            </p>
            <a
              href="https://pin.it/4z5yp8uAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lavender to-lavender-dark text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-xl">👔</span>
              <span className="font-medium">Ver referencias de trajes</span>
              <span className="text-sm">↗</span>
            </a>
            <p className="text-sm text-gold-dark italic">
              * Zapatos de vestir en cuero negro o marrón
            </p>
          </div>
        </div>

        {/* Women's Section */}
        <div className="mb-8">
          <h5 className="text-2xl font-serif text-lavender-dark mb-4 text-center md:text-left">
            Para Damas
          </h5>
          <div className="space-y-4">
            <p className="text-forest-dark">Vestido largo o midi elegante.</p>
            <a
              href="https://pin.it/22DSPYpSy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lavender to-lavender-dark text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-xl">👗</span>
              <span className="font-medium">Ver referencias de vestidos</span>
              <span className="text-sm">↗</span>
            </a>
            <p className="text-sm text-gold-dark italic">
              * Tacones o zapatos elegantes
            </p>
          </div>
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

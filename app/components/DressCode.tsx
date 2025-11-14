"use client";

export default function DressCode() {
  const menSuits = [
    { color: "Navy", bgColor: "bg-[#1a1f3a]" },
    { color: "Charcoal", bgColor: "bg-[#36454f]" },
    { color: "Forest", bgColor: "bg-forest-dark" },
    { color: "Burgundy", bgColor: "bg-[#800020]" },
  ];

  const womenDresses = [
    { color: "Navy", bgColor: "bg-[#1a1f3a]" },
    { color: "Sage", bgColor: "bg-[#9caf88]" },
    { color: "Lavender", bgColor: "bg-lavender" },
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
              confundirse con el vestido de la novia. 💜
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

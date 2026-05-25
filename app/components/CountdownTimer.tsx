export default function CountdownTimer() {
  const highlights = [
    { title: "Fecha", value: "22 Mayo 2026" },
    { title: "Ceremonia", value: "Iglesia Santa Cristina" },
    { title: "Celebracion", value: "Casa de Burgos" },
    { title: "Mensaje", value: "Gracias por acompanarnos" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-lavender/20"
          >
            <div className="text-2xl md:text-3xl font-serif text-gold-dark mb-2">
              {item.value}
            </div>
            <div className="text-sm md:text-base text-lavender-dark font-light">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

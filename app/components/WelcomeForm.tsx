export default function WelcomeForm() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-lavender/20">
        <h3 className="text-3xl font-bold text-lavender mb-4 text-center">
          ¡Gracias por asistir!
        </h3>
        <p className="text-gray-700 mb-6 text-center">
          Fue un día inolvidable y estamos muy agradecidos de haberlo compartido
          con ustedes.
        </p>

        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 border-2 border-lavender/50 rounded-lg px-4 py-3 bg-gray-100 text-gray-500 cursor-not-allowed"
            disabled
            aria-label="Correo desactivado"
          />
          <button
            type="submit"
            disabled
            className="bg-lavender/60 border-2 border-lavender/60 text-white font-bold py-3 px-8 rounded-lg disabled:opacity-80 disabled:cursor-not-allowed shadow-md"
          >
            Registro cerrado
          </button>
        </form>
        <p className="text-sm text-lavender italic mt-4 text-center">
          La etapa de confirmaciones por correo ya finalizo.
        </p>
      </div>
    </div>
  );
}

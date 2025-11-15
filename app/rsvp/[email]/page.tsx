"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use, useState, FormEvent } from "react";
import FloralDecoration from "@/app/components/FloralDecoration";

interface RSVPProps {
  params: Promise<{ email: string }>;
}

export default function RSVPPage({ params }: RSVPProps) {
  const { email: encodedEmail } = use(params);
  const email = decodeURIComponent(encodedEmail);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [asistencia, setAsistencia] = useState("yes");
  const [numAcompanantes, setNumAcompanantes] = useState(0);
  const [nombresAcompanantes, setNombresAcompanantes] = useState("");
  const [intolerancias, setIntolerancias] = useState("");
  const [comentarios, setComentarios] = useState("");

  // Validar el email
  if (!email || !email.includes("@")) {
    return notFound();
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          nombre,
          apellido,
          asistencia: asistencia === "yes",
          numAcompanantes,
          nombresAcompanantes,
          intolerancias,
          comentarios,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al confirmar asistencia");
      }

      setSuccess(true);
    } catch {
      setError(
        "Hubo un problema al confirmar tu asistencia. Por favor, inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-linear-to-b from-lavender-light to-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <FloralDecoration />
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-lavender/30 text-center relative z-10">
          <div className="text-2xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-lavender mb-4">
            ¡Confirmación exitosa!
          </h1>
          <p className="text-gray-700 mb-6">
            Gracias por confirmar tu asistencia. Te esperamos el día de nuestra
            boda.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#A78BFA] text-white font-semibold py-2 px-6 rounded hover:bg-[#7C3AED] transition"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream-gradient flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <FloralDecoration />
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-lavender/30 relative z-10">
        <h1 className="text-3xl font-bold text-lavender mb-4 text-center">
          Confirmar asistencia
        </h1>
        <p className="mb-6 text-center text-gray-700">
          Hola <span className="font-semibold text-gold-dark">{email}</span>,
          <br />
          Por favor confirma tu asistencia a nuestra boda
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apellido *
              </label>
              <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ¿Asistirás al evento? *
            </label>
            <select
              value={asistencia}
              onChange={(e) => setAsistencia(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
              required
            >
              <option value="yes">Sí, asistiré</option>
              <option value="no">No podré asistir</option>
            </select>
          </div>

          {asistencia === "yes" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Cuántas personas te acompañarán?
                </label>
                <div className="flex gap-1 flex-wrap">
                  {[0, 1].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setNumAcompanantes(num)}
                      className={`px-4 py-2 rounded-lg font-bold transition-all ${
                        numAcompanantes === num
                          ? "bg-[#A78BFA] text-white border-2 border-lavender"
                          : "bg-white text-lavender-dark border-2 border-lavender hover:bg-lavender hover:text-white"
                      }`}
                    >
                      {num === 0 ? "Solo yo" : `+${num}`}
                    </button>
                  ))}
                </div>
              </div>

              {numAcompanantes > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombres de acompañantes
                  </label>
                  <textarea
                    value={nombresAcompanantes}
                    onChange={(e) => setNombresAcompanantes(e.target.value)}
                    placeholder="Escribe los nombres separados por comas"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
                    rows={3}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Intolerancias o restricciones alimentarias
                </label>
                <textarea
                  value={intolerancias}
                  onChange={(e) => setIntolerancias(e.target.value)}
                  placeholder="Ej: vegetariano, celiaco, alergia a frutos secos..."
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentarios adicionales
                </label>
                <textarea
                  value={comentarios}
                  onChange={(e) => setComentarios(e.target.value)}
                  placeholder="Cualquier cosa que quieras compartir con nosotros"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
                  rows={3}
                />
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white border-2 border-lavender text-lavender font-bold py-3 px-6 rounded-lg mt-4 hover:bg-lavender hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-[1.02]"
          >
            {loading ? "Enviando..." : "Confirmar asistencia"}
          </button>
        </form>
      </div>
      {/* Footer */}
      <footer className="w-full mt-16 mb-8">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <div className="text-lavender-dark text-sm">
            © {new Date().getFullYear()} Alejandra & Mauro. Todos los derechos
            reservados.
          </div>
          <div className="text-forest-dark text-xs">
            Desarrollado con 💜 por{" "}
            <a
              href="https://www.linkedin.com/in/edgarivanespinoza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lavender hover:text-lavender-dark transition-colors underline"
            >
              Ivan Espinoza
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

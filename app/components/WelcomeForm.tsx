"use client";

import { useState, FormEvent } from "react";

export default function WelcomeForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Error al suscribirse");
      }

      setSuccess(true);
      setEmail("");
    } catch {
      setError(
        "Hubo un problema al procesar tu solicitud. Por favor, inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-lavender/20">
          <div className="text-6xl mb-4">💌</div>
          <h3 className="text-2xl font-bold text-lavender mb-4">
            ¡Gracias por registrarte!
          </h3>
          <p className="text-gray-700">
            Hemos enviado un correo a tu bandeja de entrada con toda la
            información y un enlace para confirmar tu asistencia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-lavender/20">
        <h3 className="text-3xl font-bold text-lavender mb-4 text-center">
          ¡Nos encantaría contar contigo!
        </h3>
        <p className="text-gray-700 mb-2 text-center">
          Ingresa tu correo para recibir toda la información sobre nuestra boda
          y confirmar tu asistencia.
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 border-2 border-lavender rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lavender"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white border-2 border-lavender text-lavender font-bold py-3 px-8 rounded-lg hover:bg-[#A78BFA] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-[1.02]"
          >
            {loading ? "Enviando..." : "Recibir invitación"}
          </button>
        </form>
        <p className="text-sm text-lavender italic mt-4 text-center">
          Confirma tu asistencia antes de
          <br /> 1 de Marzo de 2026
        </p>
      </div>
    </div>
  );
}

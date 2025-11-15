"use client";

import { useState } from "react";

export const Regalos = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = "ES8214650100961764450134";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <section className="w-full mb-12 flex flex-col items-center">
      {/* Title */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
        <h3 className="text-3xl text-center text-lavender-dark font-bold font-serif">
          Regalos
        </h3>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-xl border border-lavender/20">
        {/* Dress Code Type */}
        <div className="text-center mb-8">
          <p className="text-lg text-lavender-dark">
            Tu presencia en nuestra boda es nuestro mayor regalo. Si deseas
            hacernos un obsequio adicional, te agradeceremos considerar una
            contribución a nuestra luna de miel, la cual atesoraremos con mucho
            cariño.
          </p>
        </div>

        <div>
          <div className="mb-8 text-center">
            <div className="space-y-4">
              <div className="text-lavender-dark text-base md:text-lg flex flex-col gap-3">
                <span className="font-medium text-lavender-dark">
                  Número de cuenta:
                </span>
                <div className="relative mx-auto w-full max-w-md">
                  <input
                    className="font-medium text-lavender-dark text-bold p-3 pr-12 border border-lavender/30 rounded text-center w-full bg-gray-100 text-sm md:text-base"
                    value={"ES82 1465 0100 96 1764450134"}
                    readOnly
                  />
                  <button
                    onClick={handleCopy}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-lavender-dark hover:text-lavender transition-colors"
                  >
                    {copied ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                    )}
                  </button>
                </div>
                <span className="font-medium text-lavender-dark">
                  Mauro Clemente
                </span>
              </div>
              {/* Important Notes */}
              <div className="border-t border-lavender/30 pt-6 mt-6">
                <div className="bg-cream/50 rounded-xl p-4 text-center">
                  <p className="text-forest-dark text-sm md:text-base">
                    <span className="font-semibold">Nota importante:</span> Si
                    prefieres, puedes darnos un <strong>sobre</strong> el día de
                    la boda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

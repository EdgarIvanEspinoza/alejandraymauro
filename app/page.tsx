import Image from "next/image";
import EventSchedule from "./components/EventSchedule";
import FloralDecoration from "./components/FloralDecoration";
import OurStory from "./components/OurStory";
import Navigation from "./components/Navigation";
import { Regalos } from "./components/Regalos";

export default function Home() {
  return (
    <div
      id="inicio"
      className="min-h-screen bg-cream-gradient relative overflow-x-hidden"
    >
      <Navigation />
      <FloralDecoration />
      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Logo Section */}
          <div className="relative mb-8 z-0">
            {/* Glow effect behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[250px]">
              <div className="w-full h-full rounded-full bg-white blur-[60px]"></div>
            </div>
            <div className="relative w-48 h-48 flex items-center justify-center p-4 z-10">
              <Image
                src="/LOGO_AM_COLOR.png"
                alt="Alejandra y Mauro"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>

          {/* Names and Date */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-6 mb-8">
            <h1 className="text-6xl md:text-8xl font-carattere text-lavender-dark text-center mb-4">
              Alejandra & Mauro
            </h1>
            <div className="text-2xl text-gold-dark font-light text-center">
              Gracias por ser parte de nuestra historia
            </div>
          </div>

          {/* Wedding Day Message */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-lavender/20 text-center">
            <h2 className="text-3xl text-lavender-dark font-bold font-serif mb-4">
              Ya nos casamos
            </h2>
            <p className="text-xl text-lavender mb-2">22 de Mayo, 2026</p>
            <p className="text-sm text-gold-dark">
              Gracias por acompanarnos y por llenar este dia de amor.
            </p>
          </div>

          {/* Photos Notice */}
          <div
            id="fotos"
            className="mt-6 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-lavender/20 text-center max-w-2xl"
          >
            <h3 className="text-2xl text-lavender-dark font-bold font-serif mb-2">
              Fotos de nuestra boda
            </h3>
            <p className="text-lavender-dark/90">
              Las fotos seran publicadas en esta pagina una vez las tengamos.
            </p>
          </div>

          {/* Our Story */}
          <div id="historia">
            <OurStory />
          </div>

          {/* Schedule Section */}
          <div
            id="cronograma"
            className=" w-full mb-12 flex flex-col items-center"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
              <h3 className="text-3xl text-center text-lavender-dark font-bold font-serif">
                Asi vivimos nuestro gran dia
              </h3>
            </div>
            <EventSchedule />
          </div>

          <div id="regalos">
            <Regalos />
          </div>

          {/* Footer */}
          <footer className="w-full mt-16 mb-8 z-1">
            <div className="max-w-4xl mx-auto text-center space-y-2">
              <div className="text-lavender-dark text-sm">
                © {new Date().getFullYear()} Alejandra & Mauro. Todos los
                derechos reservados.
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
        </div>
      </main>
    </div>
  );
}

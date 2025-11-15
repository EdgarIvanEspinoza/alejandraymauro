import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer";
import EventSchedule from "./components/EventSchedule";
import FloralDecoration from "./components/FloralDecoration";
import WelcomeForm from "./components/WelcomeForm";
import OurStory from "./components/OurStory";
import DressCode from "./components/DressCode";
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
              Celebrando Nuestro Amor
            </div>
          </div>

          {/* Save the Date */}
          <a
            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Alejandra+y+Mauro&dates=20260522T173000/20260523T050000&details=¡Nos+casamos!+Acompáñanos+en+este+día+tan+especial.%0A%0ACeremonia:+17:30+-+Iglesia+Santa+Cristina%0ACóctel:+19:00+-+Casa+de+Burgos%0ABanquete:+20:30+-+Casa+de+Burgos%0AFiesta:+23:00+-+Casa+de+Burgos&location=Iglesia+Santa+Cristina`}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform hover:scale-105"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-lavender/20 text-center group cursor-pointer hover:bg-white/90">
              <h2 className="text-3xl text-lavender-dark font-bold font-serif mb-4 group-hover:text-forest">
                Reserva la Fecha
              </h2>
              <p className="text-xl text-lavender mb-2">22 de Mayo, 2026</p>
              <p className="text-sm text-gold-dark flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Agregar a Google Calendar
              </p>
            </div>
          </a>

          {/* Countdown Timer */}
          <div className="mt-6 w-full flex flex-col items-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 mb-6">
              <h3 className="text-2xl text-center text-lavender-dark font-bold font-serif">
                Faltan:
              </h3>
            </div>
            <CountdownTimer />
          </div>

          {/* Our Story */}
          <div id="historia">
            <OurStory />
          </div>

          {/* Welcome Form */}
          <div id="confirmar">
            <WelcomeForm />
          </div>

          {/* Schedule Section */}
          <div
            id="cronograma"
            className=" w-full mb-12 flex flex-col items-center"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
              <h3 className="text-3xl text-center text-lavender-dark font-bold font-serif">
                Cronograma
              </h3>
            </div>
            <EventSchedule />
          </div>

          {/* Dress Code Section */}
          <div id="vestimenta">
            <DressCode />
          </div>
          <div id="regalos">
            <Regalos />
          </div>

          {/* Footer */}
          <footer className="w-full mt-16 mb-8">
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

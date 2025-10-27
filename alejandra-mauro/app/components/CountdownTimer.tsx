'use client';

import { useEffect, useState } from 'react';

const WEDDING_DATE = new Date('2026-05-22T00:00:00');

interface TimeLeft {
  días: number;
  horas: number;
  minutos: number;
  segundos: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    días: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +WEDDING_DATE - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          días: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Calcular inmediatamente
    calculateTimeLeft();
    
    // Actualizar cada segundo
    const timer = setInterval(calculateTimeLeft, 1000);

    // Limpiar al desmontar
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-lavender/20"
          >
            <div className="text-4xl md:text-5xl font-serif text-gold-dark mb-2">
              {value}
            </div>
            <div className="text-sm md:text-base text-lavender-dark font-light">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
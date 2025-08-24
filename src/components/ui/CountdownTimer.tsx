'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-04T00:00:00Z'); // September 4th, 2025

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h3 className="text-2xl font-bold text-white text-center">
        Tournament Starts In
      </h3>
      <div className="flex space-x-4 md:space-x-8">
        <div className="flex flex-col items-center">
          <div className="bg-purple-600/80 backdrop-blur-sm rounded-lg p-4 min-w-[80px] text-center">
            <span className="text-3xl md:text-4xl font-bold text-white">
              {timeLeft.days.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-white/80 text-sm mt-2 font-medium">Days</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-purple-600/80 backdrop-blur-sm rounded-lg p-4 min-w-[80px] text-center">
            <span className="text-3xl md:text-4xl font-bold text-white">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-white/80 text-sm mt-2 font-medium">Hours</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-purple-600/80 backdrop-blur-sm rounded-lg p-4 min-w-[80px] text-center">
            <span className="text-3xl md:text-4xl font-bold text-white">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-white/80 text-sm mt-2 font-medium">Minutes</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-purple-600/80 backdrop-blur-sm rounded-lg p-4 min-w-[80px] text-center">
            <span className="text-3xl md:text-4xl font-bold text-white">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-white/80 text-sm mt-2 font-medium">Seconds</span>
        </div>
      </div>
    </div>
  );
}

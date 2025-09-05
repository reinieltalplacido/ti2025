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
  const [isLive, setIsLive] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-09-04T08:00:00Z'); // September 4th, 2025 - 4:00 PM Asia/Manila (UTC+8)

    let timer: ReturnType<typeof setInterval> | undefined;

    const update = (): number => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setIsLive(false);
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setIsLive(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
      setInitialized(true);
      return distance;
    };

    const firstDistance = update();
    if (firstDistance > 0) {
      timer = setInterval(() => {
        const d = update();
        if (d <= 0 && timer) {
          clearInterval(timer);
        }
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  if (!initialized) {
    return (
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
          <h3 className="text-2xl font-bold text-white text-center">Live Now</h3>
        </div>
        <a href="#schedule" className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition">
          See Schedule
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      {isLive ? (
        <>
          <div className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
            <h3 className="text-2xl font-bold text-white text-center">Live Now</h3>
          </div>
          <a href="#schedule" className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition">
            See Schedule
          </a>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

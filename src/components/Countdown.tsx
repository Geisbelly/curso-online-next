
import React, { useState, useEffect } from 'react';
import scheduleData from '../data/schedule.json';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft => {
  const eventDate = new Date(scheduleData.eventDate);
  const difference = eventDate.getTime() - new Date().getTime();
  
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  
  return timeLeft;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const timeBlocks = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds }
  ];
  
  return (
    <div className="w-full bg-gradient-to-r from-flashdark to-flashblue/20 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-flashblue/30">
      <h3 className="text-center text-xl font-bold text-white mb-4">Contagem Regressiva</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {timeBlocks.map((block) => (
          <div 
            key={block.label} 
            className="flex flex-col items-center p-4 bg-flashblue/20 backdrop-blur-md rounded-lg min-w-[100px]"
          >
            <span className="text-3xl md:text-4xl font-bold text-white">{block.value}</span>
            <span className="text-xs md:text-sm text-gray-300 mt-1">{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;


import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';

type ScheduleEventProps = {
  title: string;
  description: string;
  date: string;
  duration: number;
  location: string;
  instructor?: string;
};

const ScheduleEvent: React.FC<ScheduleEventProps> = ({
  title,
  description,
  date,
  duration,
  location,
  instructor,
}) => {
  const eventDate = new Date(date);
  const endTime = new Date(eventDate.getTime() + duration * 60000);
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="glass-card rounded-xl p-5 card-hover border-l-4 border-l-flashblue">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="space-y-3 text-sm">
        <div className="flex items-center space-x-2">
          <Clock size={18} className="text-flashblue" />
          <span className="text-gray-300">
            {formatTime(eventDate)} - {formatTime(endTime)} ({duration} minutos)
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <MapPin size={18} className="text-flashblue" />
          <span className="text-gray-300">{location}</span>
        </div>
        
        {instructor && (
          <div className="flex items-center space-x-2">
            <User size={18} className="text-flashblue" />
            <span className="text-gray-300">{instructor}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleEvent;


import React from 'react';
import ScheduleEvent from '../components/ScheduleEvent';
import Countdown from '../components/Countdown';
import scheduleData from '../data/schedule.json';

const Schedule = () => {
  // Group events by hour for better organization
  const groupEventsByTime = () => {
    const eventDate = new Date(scheduleData.eventDate);
    const dateStr = eventDate.toLocaleDateString('pt-BR', { 
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric' 
    });
    
    return {
      date: dateStr,
      events: [...scheduleData.events].sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      })
    };
  };
  
  const schedule = groupEventsByTime();
  
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-flashdark to-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Cronograma de Eventos</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Confira a programação completa do FlashClip 2025.
          </p>
        </div>
      </section>
      
      {/* Countdown Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Countdown />
        </div>
      </section>
      
      {/* Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="bg-flashblue/30 text-flashblue-light font-bold px-4 py-2 rounded-md">
              {schedule.date}
            </div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-6 w-1 bg-flashblue/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {schedule.events.map((event) => (
                <div key={event.id} className="flex flex-col md:flex-row">
                  {/* Time marker */}
                  <div className="md:w-48 mb-4 md:mb-0 flex flex-row md:flex-col md:items-end md:pr-8 items-center">
                    <div className="w-12 h-12 bg-flashblue/20 rounded-full flex items-center justify-center border-2 border-flashblue relative z-10 shrink-0">
                      <span className="text-sm font-bold text-white">
                        {new Date(event.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <div className="md:hidden ml-4 font-medium text-flashblue">
                      {event.duration} min
                    </div>
                    <div className="hidden md:block text-sm text-gray-400 mt-2">
                      {event.duration} minutos
                    </div>
                  </div>
                  
                  {/* Event card */}
                  <div className="flex-1">
                    <ScheduleEvent 
                      title={event.title}
                      description={event.description}
                      date={event.date}
                      duration={event.duration}
                      location={event.location}
                      instructor={event.instructor}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;

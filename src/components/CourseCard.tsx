
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type CourseCardProps = {
  id: number;
  slug: string;
  name: string;
  language: string;
  description: string;
  image: string;
  availableSeats: number;
  totalSeats: number;
  features: string[];
};

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  slug,
  name,
  language,
  description,
  image,
  availableSeats,
  totalSeats,
  features
}) => {
  const availability = (availableSeats / totalSeats) * 100;
  let availabilityColor = "bg-green-500";
  
  if (availability <= 30) {
    availabilityColor = "bg-red-500";
  } else if (availability <= 60) {
    availabilityColor = "bg-yellow-500";
  }
  
  return (
    <div className="glass-card rounded-xl overflow-hidden card-hover">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-flashblue/80 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
          <span className="inline-block bg-flashblue text-white text-xs font-medium px-2 py-1 rounded">
            {language}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>Vagas disponíveis</span>
            <span className="text-white font-medium">{availableSeats}/{totalSeats}</span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full ${availabilityColor} transition-all duration-300`}
              style={{ width: `${(availableSeats / totalSeats) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="text-xs bg-flashblue/30 text-white px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <Link
          to={`/cursos/${slug}`}
          className="flex items-center justify-between btn-secondary w-full"
        >
          <span>Ver detalhes</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;

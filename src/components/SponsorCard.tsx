
import React from 'react';
import { Globe, Instagram, Linkedin } from 'lucide-react';

type SponsorCardProps = {
  name: string;
  logo: string;
  website: string;
  social: {
    instagram?: string;
    linkedin?: string;
  };
};

const SponsorCard: React.FC<SponsorCardProps> = ({
  name,
  logo,
  website,
  social
}) => {
  return (
    <div className="glass-card rounded-xl p-6 text-center card-hover">
      <div className="h-32 flex items-center justify-center mb-4">
        <img 
          src={logo} 
          alt={name} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <div className="flex justify-center space-x-3 mt-4">
        {website && (
          <a 
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={`Website do ${name}`}
          >
            <Globe size={20} />
          </a>
        )}
        {social.instagram && (
          <a 
            href={`https://instagram.com/${social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={`Instagram do ${name}`}
          >
            <Instagram size={20} />
          </a>
        )}
        {social.linkedin && (
          <a 
            href={`https://linkedin.com/company/${social.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={`LinkedIn do ${name}`}
          >
            <Linkedin size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default SponsorCard;

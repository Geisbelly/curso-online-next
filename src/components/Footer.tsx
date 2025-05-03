
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Globe, Phone, MapPin, Twitter, Youtube, Github } from 'lucide-react';
import contactsData from '../data/contacts.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const SocialIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'instagram':
        return <Instagram size={20} />;
      case 'facebook':
        return <Facebook size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'youtube':
        return <Youtube size={20} />;
      case 'github':
        return <Github size={20} />;
      case 'website':
        return <Globe size={20} />;
      case 'email':
        return <Mail size={20} />;
      case 'whatsapp':
        return <Phone size={20} />;
      default:
        return <Globe size={20} />;
    }
  };
  
  return (
    <footer className="bg-flashdark border-t border-flashblue/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">FlashClip</h3>
            <p className="text-gray-400 mb-4">
              Programação na Velocidade da Luz - Um evento imersivo de programação com foco em tecnologias emergentes.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactsData.socialMedia.event.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={`mailto:${contactsData.email}`} 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href={contactsData.socialMedia.event.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ulbra</h3>
            <div className="space-y-3">
              <a 
                href={contactsData.socialMedia.ulbra.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a 
                href={contactsData.socialMedia.ulbra.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Globe size={20} />
                <span>Website</span>
              </a>
              <a 
                href={`mailto:${contactsData.socialMedia.ulbra.email}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a 
                href={contactsData.socialMedia.ulbra.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre o Curso</a>
              </li>
              <li>
                <a href="/cursos" className="text-gray-400 hover:text-white transition-colors">Cursos</a>
              </li>
              <li>
                <a href="/cronograma" className="text-gray-400 hover:text-white transition-colors">Cronograma</a>
              </li>
              <li>
                <a href="/inscricao" className="text-gray-400 hover:text-white transition-colors">Inscrição</a>
              </li>
              <li>
                <a href="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-flashblue mt-1" size={20} />
                <span className="text-gray-400">{contactsData.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-flashblue mt-1" size={20} />
                <span className="text-gray-400">{contactsData.phone}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-flashblue mt-1" size={20} />
                <span className="text-gray-400">{contactsData.address}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-flashblue/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            © {currentYear} FlashClip. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="/privacidade" className="text-gray-500 hover:text-white transition-colors mr-4">
              Política de Privacidade
            </a>
            <a href="/termos" className="text-gray-500 hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

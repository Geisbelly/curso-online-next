
import React from 'react';
import ContactForm from '../components/ContactForm';
import contactsData from '../data/contacts.json';
import { Mail, Phone, MapPin, Instagram, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-flashdark to-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Estamos à disposição para esclarecer dúvidas e ouvir sugestões.
          </p>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title">Envie uma Mensagem</h2>
              <p className="text-gray-300 mb-8">
                Preencha o formulário abaixo e nossa equipe responderá o mais breve possível.
              </p>
              
              <ContactForm />
            </div>
            
            <div>
              <h2 className="section-title">Informações de Contato</h2>
              <p className="text-gray-300 mb-8">
                Entre em contato diretamente através dos canais abaixo ou visite-nos pessoalmente.
              </p>
              
              <div className="glass-card rounded-xl p-6 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-flashblue/20 p-3 rounded-lg">
                      <Mail className="text-flashblue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <a 
                        href={`mailto:${contactsData.email}`}
                        className="text-gray-300 hover:text-flashblue transition-colors"
                      >
                        {contactsData.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-flashblue/20 p-3 rounded-lg">
                      <Phone className="text-flashblue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Telefone</h3>
                      <a 
                        href={`tel:${contactsData.phone.replace(/\D/g,'')}`}
                        className="text-gray-300 hover:text-flashblue transition-colors"
                      >
                        {contactsData.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-flashblue/20 p-3 rounded-lg">
                      <MapPin className="text-flashblue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Endereço</h3>
                      <p className="text-gray-300">
                        {contactsData.address}
                      </p>
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(contactsData.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-flashblue hover:underline mt-1 inline-block"
                      >
                        Ver no mapa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Redes Sociais - Evento</h3>
                  <div className="space-y-3">
                    <a 
                      href={contactsData.socialMedia.event.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-flashblue transition-colors"
                    >
                      <Instagram size={20} />
                      <span>Instagram</span>
                    </a>
                    
                    <a 
                      href={contactsData.socialMedia.event.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-flashblue transition-colors"
                    >
                      <Phone size={20} />
                      <span>WhatsApp</span>
                    </a>
                    
                    <a 
                      href={`mailto:${contactsData.socialMedia.event.email}`}
                      className="flex items-center space-x-3 text-gray-300 hover:text-flashblue transition-colors"
                    >
                      <Mail size={20} />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Redes Sociais - Ulbra</h3>
                  <div className="space-y-3">
                    <a 
                      href={contactsData.socialMedia.ulbra.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-flashblue transition-colors"
                    >
                      <Instagram size={20} />
                      <span>Instagram</span>
                    </a>
                    
                    <a 
                      href={contactsData.socialMedia.ulbra.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-flashblue transition-colors"
                    >
                      <Globe size={20} />
                      <span>Website</span>
                    </a>
                    
                    <a 
                      href={contactsData.socialMedia.ulbra.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-flashblue transition-colors"
                    >
                      <Phone size={20} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


import React from 'react';
import { Link } from 'react-router-dom';
import siteInfo from '../data/siteInfo.json';
import { Calendar, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-flashdark to-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre o FlashClip</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Conheça mais sobre nossa história, missão e valores.
          </p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="section-title">Nossa História</h2>
              <p className="text-gray-300 mb-6">
                O FlashClip surgiu em 2020 como uma iniciativa do Departamento de Ciência da Computação da Ulbra para proporcionar aos estudantes uma experiência prática com tecnologias emergentes que nem sempre são abordadas em profundidade no currículo regular.
              </p>
              <p className="text-gray-300 mb-6">
                O que começou como um pequeno workshop com apenas três linguagens de programação, hoje se tornou um dos eventos mais aguardados do calendário acadêmico, atraindo participantes de diversas instituições e profissionais do mercado.
              </p>
              <p className="text-gray-300 mb-6">
                Nossa missão é democratizar o conhecimento em programação, apresentando linguagens e frameworks modernos de forma prática e acessível, sempre com instrutores que combinam experiência acadêmica e de mercado.
              </p>
              
              <h2 className="section-title mt-12">Objetivos</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <div className="bg-flashblue/20 p-3 rounded-lg">
                    <Users className="text-flashblue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Comunidade</h3>
                    <p className="text-gray-300">
                      Fortalecer a comunidade de desenvolvedores, promovendo networking e troca de experiências entre estudantes e profissionais.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4">
                  <div className="bg-flashblue/20 p-3 rounded-lg">
                    <Award className="text-flashblue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Excelência</h3>
                    <p className="text-gray-300">
                      Proporcionar conteúdo de alta qualidade, com metodologias modernas e instrutores qualificados.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4">
                  <div className="bg-flashblue/20 p-3 rounded-lg">
                    <Calendar className="text-flashblue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Inovação</h3>
                    <p className="text-gray-300">
                      Manter-se na vanguarda das tendências tecnológicas, apresentando linguagens e frameworks atuais e emergentes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <div className="glass-card rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Detalhes do Evento</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-flashblue mt-1" size={20} />
                    <div>
                      <p className="font-medium text-white">Data</p>
                      <p className="text-gray-300">15 de Novembro de 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-flashblue mt-1" size={20} />
                    <div>
                      <p className="font-medium text-white">Local</p>
                      <p className="text-gray-300">Campus Ulbra, Av. Farroupilha, 8001 - São José, Canoas - RS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="text-flashblue mt-1" size={20} />
                    <div>
                      <p className="font-medium text-white">Organizadores</p>
                      <ul className="text-gray-300">
                        {siteInfo.organizers.map((org, index) => (
                          <li key={index}>{org.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/inscricao" className="btn-primary w-full text-center">
                    Inscreva-se Agora
                  </Link>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">FlashClip em Números</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-flashblue/20 rounded-lg">
                    <p className="text-3xl font-bold text-white">5ª</p>
                    <p className="text-sm text-gray-300">Edição</p>
                  </div>
                  
                  <div className="text-center p-4 bg-flashblue/20 rounded-lg">
                    <p className="text-3xl font-bold text-white">+1000</p>
                    <p className="text-sm text-gray-300">Participantes</p>
                  </div>
                  
                  <div className="text-center p-4 bg-flashblue/20 rounded-lg">
                    <p className="text-3xl font-bold text-white">5</p>
                    <p className="text-sm text-gray-300">Linguagens</p>
                  </div>
                  
                  <div className="text-center p-4 bg-flashblue/20 rounded-lg">
                    <p className="text-3xl font-bold text-white">10</p>
                    <p className="text-sm text-gray-300">Instrutores</p>
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

export default About;

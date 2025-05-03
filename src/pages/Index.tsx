
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import Countdown from '../components/Countdown';
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses.json';
import siteInfo from '../data/siteInfo.json';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-hero-pattern bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-flashdark to-transparent opacity-90"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 code-font">
              Flash<span className="text-glow text-flashblue-light">Clip</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {siteInfo.slogan}
            </p>
            <p className="text-lg text-gray-300 mb-8">
              {siteInfo.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/inscricao" className="btn-primary">
                Inscreva-se
              </Link>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white">
                <Play size={20} className="text-flashblue" />
                <span>Assista o vídeo</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Countdown Section */}
      <section className="py-12 bg-flashdark">
        <div className="container mx-auto px-4">
          <Countdown />
        </div>
      </section>
      
      {/* Featured Courses */}
      <section className="py-16 bg-gradient-to-b from-flashdark to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="section-title">Nossos Cursos</h2>
            <Link 
              to="/cursos" 
              className="flex items-center space-x-2 text-flashblue hover:text-flashblue-light transition-colors"
            >
              <span>Ver todos os cursos</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.slice(0, 3).map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                slug={course.slug}
                name={course.name}
                language={course.language}
                description={course.description}
                image={course.image}
                availableSeats={course.availableSeats}
                totalSeats={course.totalSeats}
                features={course.features}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-background to-flashdark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title">Sobre o Curso</h2>
              <p className="text-gray-300 mb-6">
                {siteInfo.longDescription}
              </p>
              <Link to="/sobre" className="btn-secondary inline-flex items-center space-x-2">
                <span>Saiba mais</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="glass-card rounded-xl overflow-hidden p-0">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="bg-flashblue/20 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Organizadores</h3>
                  {siteInfo.organizers.map((org, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-flashdark flex items-center justify-center text-flashblue font-bold">
                        {org.acronym.charAt(0)}
                      </div>
                      <span className="text-gray-300">{org.name}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-flashblue/20 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Ano</h3>
                  <p className="text-gray-300">{siteInfo.year}</p>
                  
                  <h3 className="text-xl font-bold text-white mb-2 mt-6">Edição</h3>
                  <p className="text-gray-300">5ª Edição</p>
                </div>
                
                <div className="bg-flashblue/20 p-6 col-span-2">
                  <h3 className="text-xl font-bold text-white mb-4">Diferenciais</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-flashblue">•</span>
                      <span className="text-gray-300">Instrutores com experiência de mercado</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-flashblue">•</span>
                      <span className="text-gray-300">Conteúdo prático e atualizado</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-flashblue">•</span>
                      <span className="text-gray-300">Oportunidades de networking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-flashblue">•</span>
                      <span className="text-gray-300">Certificado de participação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Book, Star, Target, Calendar } from 'lucide-react';
import coursesData from '../data/courses.json';

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const course = coursesData.find((course) => course.slug === slug);
  
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Curso não encontrado</h1>
          <p className="text-gray-300 mb-6">
            O curso que você está procurando não existe ou foi removido.
          </p>
          <Link to="/cursos" className="btn-primary">
            Ver todos os cursos
          </Link>
        </div>
      </div>
    );
  }
  
  const availability = (course.availableSeats / course.totalSeats) * 100;
  let availabilityColor = "bg-green-500";
  
  if (availability <= 30) {
    availabilityColor = "bg-red-500";
  } else if (availability <= 60) {
    availabilityColor = "bg-yellow-500";
  }
  
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-flashdark to-background py-16">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{course.name}</h1>
              <div className="inline-block bg-flashblue text-white text-sm font-medium px-3 py-1 rounded mb-4">
                {course.language}
              </div>
              <p className="text-xl text-gray-300 mb-6">
                {course.longDescription}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="glass-card rounded-lg p-4 flex items-start space-x-3">
                  <div className="bg-flashblue/30 p-2 rounded">
                    <Users className="text-flashblue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Instrutores</h3>
                    <p className="text-gray-400 text-sm">{course.instructors.length} especialistas</p>
                  </div>
                </div>
                
                <div className="glass-card rounded-lg p-4 flex items-start space-x-3">
                  <div className="bg-flashblue/30 p-2 rounded">
                    <Target className="text-flashblue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Nível</h3>
                    <p className="text-gray-400 text-sm">Intermediário</p>
                  </div>
                </div>
                
                <div className="glass-card rounded-lg p-4 flex items-start space-x-3">
                  <div className="bg-flashblue/30 p-2 rounded">
                    <Book className="text-flashblue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Módulos</h3>
                    <p className="text-gray-400 text-sm">5 módulos práticos</p>
                  </div>
                </div>
                
                <div className="glass-card rounded-lg p-4 flex items-start space-x-3">
                  <div className="bg-flashblue/30 p-2 rounded">
                    <Calendar className="text-flashblue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Duração</h3>
                    <p className="text-gray-400 text-sm">8 horas</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">O que você vai aprender</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-flashblue"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="glass-card rounded-xl overflow-hidden sticky top-24">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-flashblue/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Detalhes da Inscrição</h3>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Vagas disponíveis</span>
                      <span className="text-white font-medium">
                        {course.availableSeats}/{course.totalSeats}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${availabilityColor} transition-all duration-300`}
                        style={{ width: `${(course.availableSeats / course.totalSeats) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/inscricao" 
                    state={{ selectedCourse: course.id }}
                    className={`btn-primary w-full text-center block mb-4 ${
                      course.availableSeats === 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-disabled={course.availableSeats === 0}
                  >
                    {course.availableSeats === 0 ? 'Vagas Esgotadas' : 'Inscreva-se Agora'}
                  </Link>
                  
                  <div className="border-t border-flashblue/30 pt-4 mt-4">
                    <h3 className="font-bold text-white mb-3">Instrutores</h3>
                    
                    {course.instructors.map((instructor, index) => (
                      <div key={index} className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-flashblue/20 flex items-center justify-center overflow-hidden">
                          {instructor.avatar ? (
                            <img 
                              src={instructor.avatar} 
                              alt={instructor.name}
                              className="w-full h-full object-cover" 
                            />
                          ) : (
                            <span className="text-flashblue font-bold">
                              {instructor.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{instructor.name}</h4>
                          <p className="text-sm text-gray-400">{instructor.role}</p>
                        </div>
                      </div>
                    ))}
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

export default CourseDetail;

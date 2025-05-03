
import React from 'react';
import { useLocation } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

const Registration = () => {
  const location = useLocation();
  const selectedCourse = location.state?.selectedCourse;
  
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-flashdark to-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Inscrição</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Preencha o formulário abaixo para garantir sua vaga no FlashClip 2025.
          </p>
        </div>
      </section>
      
      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Formulário de Inscrição</h2>
            <RegistrationForm selectedCourseId={selectedCourse} />
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-400">
              Ao se inscrever, você concorda com nossos <a href="/termos" className="text-flashblue hover:underline">Termos de Uso</a> e <a href="/privacidade" className="text-flashblue hover:underline">Política de Privacidade</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;

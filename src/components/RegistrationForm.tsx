
import React, { useState } from 'react';
import { UserPlus, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import coursesData from '../data/courses.json';

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseId: '',
    institution: '',
    motivation: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Registration submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Inscrição realizada!",
        description: "Sua inscrição foi recebida com sucesso. Em breve enviaremos mais informações para seu email.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        courseId: '',
        institution: '',
        motivation: '',
      });
      
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const selectedCourse = coursesData.find(course => course.id.toString() === formData.courseId);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Seu nome completo"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="seu.email@exemplo.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="(00) 00000-0000"
          />
        </div>
        
        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-gray-300 mb-1">
            Instituição / Empresa
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Onde você estuda ou trabalha"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="courseId" className="block text-sm font-medium text-gray-300 mb-1">
          Curso Desejado
        </label>
        <select
          id="courseId"
          name="courseId"
          value={formData.courseId}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Selecione um curso</option>
          {coursesData.map((course) => (
            <option key={course.id} value={course.id} disabled={course.availableSeats <= 0}>
              {course.name} {course.availableSeats <= 0 ? '(Esgotado)' : ''}
            </option>
          ))}
        </select>
      </div>
      
      {selectedCourse && (
        <div className="p-4 rounded-md bg-flashblue/20 border border-flashblue/30">
          <p className="text-sm text-gray-300">
            <span className="font-medium">Vagas disponíveis:</span> {selectedCourse.availableSeats} de {selectedCourse.totalSeats}
          </p>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mt-2">
            <div 
              className="h-full bg-flashblue transition-all duration-300"
              style={{ width: `${(selectedCourse.availableSeats / selectedCourse.totalSeats) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      
      <div>
        <label htmlFor="motivation" className="block text-sm font-medium text-gray-300 mb-1">
          Motivação
        </label>
        <textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          required
          rows={4}
          className="input-field resize-none"
          placeholder="Por que você deseja participar deste curso?"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting || !formData.courseId}
        className={`btn-primary w-full flex items-center justify-center space-x-2 ${
          (isSubmitting || !formData.courseId) ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
            <span>Processando...</span>
          </>
        ) : submitted ? (
          <>
            <CheckCircle size={20} />
            <span>Inscrição Realizada!</span>
          </>
        ) : (
          <>
            <UserPlus size={20} />
            <span>Confirmar Inscrição</span>
          </>
        )}
      </button>
    </form>
  );
};

export default RegistrationForm;

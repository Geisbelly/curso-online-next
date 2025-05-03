
import React from 'react';
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses.json';

const Courses = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-flashdark to-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Cursos</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore nossa variedade de cursos de programação ministrados por especialistas.
          </p>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course) => (
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
    </div>
  );
};

export default Courses;

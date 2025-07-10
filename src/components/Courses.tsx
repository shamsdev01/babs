import React from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  level: string;
  price: string;
}

interface CoursesProps {
  selectedCourse: string;
  onCourseSelect: (courseId: string) => void;
}

const Courses: React.FC<CoursesProps> = ({ selectedCourse, onCourseSelect }) => {
  const courses = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Master HTML, CSS, JavaScript, and modern frameworks like React and Vue.js',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'product-design',
      title: 'Product Design',
      description: 'Learn UI/UX design principles, prototyping, and user-centered design methodologies',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
    },
    {
      id: 'fullstack',
      title: 'Fullstack Development',
      description: 'Build complete web applications with both frontend and backend technologies',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'cybersecurity',
      title: 'Cyber Security',
      description: 'Learn to protect systems, networks, and programs from digital attacks',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      description: 'Master data visualization, statistical analysis, and business intelligence tools',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const handleCourseClick = (courseId: string) => {
    onCourseSelect(courseId);
  };

  const handleKeyDown = (event: React.KeyboardEvent, courseId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCourseClick(courseId);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
            Our Courses
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your
            <span className="block text-blue-600">Tech Path</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select from our comprehensive range of technology courses designed to launch your career in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`group p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
                selectedCourse === course.id
                  ? 'border-blue-600 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
              onClick={() => handleCourseClick(course.id)}
              onKeyDown={(e) => handleKeyDown(e, course.id)}
              tabIndex={0}
              role="button"
              aria-label={`Select ${course.title} course`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                selectedCourse === course.id ? 'bg-blue-600' : 'bg-blue-50 group-hover:bg-blue-100'
              }`}>
                <div className={selectedCourse === course.id ? 'text-white' : 'text-blue-600'}>
                  {course.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {course.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {course.description}
              </p>
              
              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCourse === course.id
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {selectedCourse === course.id ? 'Selected' : 'Choose'}
              </button>
            </div>
          ))}
        </div>

        {selectedCourse && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Course Selected: {courses.find(c => c.id === selectedCourse)?.title}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses; 
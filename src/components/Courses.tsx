import React from 'react';
import { Code2, PenTool, ShieldCheck, BarChart3 } from 'lucide-react';

const programs = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Learn modern web tools like HTML, CSS, JavaScript, and frameworks like React, Nextjs. Build live projects and sharpen your UI/UX skills.',
    icon: <Code2 className="w-7 h-7" />,
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description:
      'Learn to design user-friendly digital products using industry tools like Figma. Master UI/UX fundamentals, build wireframes, and create solutions that enhance real user experiences.',
    icon: <PenTool className="w-7 h-7" />,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Learn to secure systems, networks, and data. Cover ethical hacking, risk assessment, penetration testing and security best practices.',
    icon: <ShieldCheck className="w-7 h-7" />,
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis/Science',
    description:
      'Explore data analysis, visualization, and machine learning while mastering Python, Excel, SQL and PowerBi with hands-on projects.',
    icon: <BarChart3 className="w-7 h-7" />,
  },
];

const registrationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSevzvRju8pbAALqakiRCWFHWVSu9PeTU4S1062QMX4zXJ0_5Q/viewform?usp=dialog';

function Courses() {
  return (
    <section id="programs" className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
            Cohort Programs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your Future in Tech
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose a program, learn from experts, and get certified for global opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <div className="text-blue-600">
                  {program.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {program.description}
              </p>
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block py-2 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`Register for ${program.title}`}
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses; 
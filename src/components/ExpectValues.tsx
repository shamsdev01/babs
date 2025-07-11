import React from 'react';
import { Users, Laptop, CalendarCheck, Award, GraduationCap, Gift, Monitor, RefreshCcw, UserCheck, FileText, Linkedin } from 'lucide-react';

const expect = [
  { icon: <Users className="w-6 h-6" />, label: 'Expert Instructors' },
  { icon: <Monitor className="w-6 h-6" />, label: 'Hands-on projects' },
  { icon: <CalendarCheck className="w-6 h-6" />, label: 'Flexible learning schedules' },
  { icon: <GraduationCap className="w-6 h-6" />, label: 'Internship & Mentorship opportunities' },
  { icon: <Award className="w-6 h-6" />, label: 'Globally recognized certification' },
];

const added = [
  { icon: <Gift className="w-6 h-6" />, label: 'Free 3 weeks trainings for absolute beginners' },
  { icon: <Laptop className="w-6 h-6" />, label: 'Access to Laptops' },
  { icon: <RefreshCcw className="w-6 h-6" />, label: 'Weekly make-up classes' },
  { icon: <UserCheck className="w-6 h-6" />, label: 'Free expert career consultation' },
  { icon: <FileText className="w-6 h-6" />, label: 'CV Reviews' },
  { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn Optimization' },
];

function ExpectValues() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-blue-800 text-sm font-medium mb-4">
            We Deliver Value
          </div>
        
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {expect.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="mb-3 text-blue-600">{item.icon}</div>
              <div className="font-semibold text-blue-900 text-lg text-center">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-blue-800 text-sm font-medium mb-4">
            Added Values
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {added.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="mb-3 text-blue-600">{item.icon}</div>
              <div className="font-semibold text-blue-900 text-lg text-center">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpectValues; 
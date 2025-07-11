import React from 'react';
import { Globe2, GraduationCap } from 'lucide-react';

function Partnership() {
  return (
    <section
      id="partnership"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center rounded-3xl shadow-xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
      aria-label="Babtech x Skills Development Council Canada Partnership"
    >

      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none select-none">
        <Globe2 className="w-40 h-40 text-blue-400" aria-hidden="true" />
      </div>
      <div className="absolute -bottom-8 right-1/2 translate-x-1/2 opacity-10 pointer-events-none select-none">
        <GraduationCap className="w-32 h-32 text-blue-300" aria-hidden="true" />
      </div>
      <div className="relative z-10">
        <div className="inline-flex items-center px-4 py-1 bg-blue-100 border border-blue-300 rounded-full text-blue-800 text-base font-semibold mb-6 shadow-sm">
          BABTECH COMPUTERS X SKILLS DEVELOPMENT COUNCIL CANADA
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-900 mb-5 leading-tight">
          Babtech computers is a learning partner to the Skills Development Council Canada
        </h2>
        <p className="text-lg sm:text-xl text-blue-800 max-w-2xl mx-auto leading-relaxed mb-2">
          Unlock global opportunities through industry-relevant training and internationally recognized certification. Our programs combine practical learning with career-focused mentorship, giving you the credibility and confidence to compete on a global scale.
        </p>
      </div>
    </section>
  );
}

export default Partnership; 
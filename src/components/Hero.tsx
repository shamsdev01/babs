import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    title: 'Receive expert training and earn globally recognized certificate',
    description:
      'Get World-class tech training and earn a globally recognized certificate, backed by the Skills Development Council Canada, that validates your skills, builds credibility, and unlocks international opportunities in tech.',
  },
  {
    title: 'Flexible Payment & Learning Structure',
    description:
      'Our cohort programs offer flexible payments and convenient class schedules (weekend, weekdays, flexible timing), enabling you to build your tech career while successfully balancing your academic commitments.',
  },
  {
    title: 'Post training mentorship and placement',
    description:
      'We provide ongoing mentorship and placement support to help you grow professionally and gain real tech experience through internships, job referrals, and expert guidance.',
  },
  {
    title: 'Choose the right Tech Career Path',
    description:
      'We offer free expert tech career consultations to help you choose the right tech path that aligns with your interests, lucrative and in-demand.',
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [current]);

  const goToSlide = (idx: number) => setCurrent(idx);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden" id="hero">

      <div className="absolute inset-0">
        <img 
          src="/images/HeroBg.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/60"></div>
      </div>
      <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
    
        <div className="relative">
          <div className="transition-all duration-700">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight min-h-[3.5rem] text-center">
              {slides[current].title}
            </h2>
            <p className="text-base sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed min-h-[4rem] text-center">
              {slides[current].description}
            </p>
          </div>
     
          <div className="flex justify-center items-center gap-3 mt-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-4 h-4 rounded-full border-2 ${current === idx ? 'bg-blue-400 border-blue-400' : 'bg-white/40 border-white/60'} transition-all`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "It's an amazing place to develop your software skills with good facilities and a conducive environment. I'm undergoing a full stack development program. Although, I haven't completed it, it's showing good value for the money.",
    author: 'Sharif Ajani',
  },
  {
    text: "It's a place that help you grow your career in tech and in an holistic way( in all aspects at Babtech Computers you get top notch service and a wonderful experience",
    author: 'Oladeni Taofikat',
  },
  {
    text: "When it comes to I T professional courses or switching career into Tech. Babtech computers is the best among the rest. Am proud to be among certified Babtech data analyst student.",
    author: 'Waheed Ayanwale',
  },  {
    text: "Currently under going a course at Babtech, Babtech is the perfect place to level up your tech skill",
    author: 'Ajasa Lateefah',
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };
  }, [current]);

  const goToSlide = (idx: number) => setCurrent(idx);

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
          Testimonials
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight">
          What Our Students Say
        </h2>
        <div className="relative">
          <div className="flex flex-col items-center justify-center">
            {/* <Quote className="w-10 h-10 text-blue-400 mb-4" /> */}
            <p className="text-xl sm:text-2xl text-gray-700 font-medium mb-6 max-w-2xl mx-auto">
              "{testimonials[current].text}"
            </p>
            <div className="text-blue-700 font-semibold text-lg">– {testimonials[current].author}</div>
          </div>
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-blue-400 border-blue-400' : 'bg-blue-100 border-blue-200'} transition-all`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 
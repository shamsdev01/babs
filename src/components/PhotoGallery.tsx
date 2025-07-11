import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const images = [
  { src: '/images/pic_1.jpg', alt: 'Babtech Event Photo 1' },
  { src: '/images/pic_2.jpg', alt: 'Babtech Event Photo 2' },
  { src: '/images/pic_3.jpg', alt: 'Babtech Event Photo 3' },
  { src: '/images/pic_4.jpg', alt: 'Babtech Event Photo 4' },
  { src: '/images/pic_5.jpeg', alt: 'Babtech Event Photo 5' },
  { src: '/images/pic_6.jpeg', alt: 'Babtech Event Photo 6' },
  { src: '/images/HeroBg.jpg', alt: 'Babtech Hero Background' },
];

function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };
  }, [current]);

  const goToSlide = (idx: number) => setCurrent(idx);

  return (
    <section id="photo-gallery" className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
          Photo Gallery
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight">
          Moments from Babtech
        </h2>
        <div className="relative flex justify-center items-center h-72 sm:h-[28rem] lg:h-[40rem] mb-8">
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="object-cover rounded-2xl shadow-lg w-full sm:w-[36rem] lg:w-[56rem] h-full max-h-[40rem] mx-auto transition-all duration-700"
          />
        </div>
        <div className="flex justify-center items-center gap-3 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to photo ${idx + 1}`}
              className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-blue-400 border-blue-400' : 'bg-blue-100 border-blue-200'} transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery; 
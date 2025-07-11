import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const images = [
  {
    src: '/images/HeroBg.jpg',
    alt: 'Babtech Event Hero',
  },
  {
    src: '/images/BabtechComputersLogo.png',
    alt: 'Babtech Logo',
  },
];

function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
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
        <div className="relative flex justify-center items-center h-72 sm:h-96 mb-8">
          {images.length > 0 ? (
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="object-cover rounded-2xl shadow-lg w-full h-full max-h-96 mx-auto transition-all duration-700"
              style={{ maxWidth: '700px' }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full bg-blue-50 rounded-2xl">
              <ImageIcon className="w-16 h-16 text-blue-200 mb-4" />
              <span className="text-blue-400">No images available</span>
            </div>
          )}
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
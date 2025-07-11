'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Testimonials from '../components/Testimonials';
import ExpectValues from '../components/ExpectValues';
import PhotoGallery from '../components/PhotoGallery';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Partnership from '../components/Partnership';


function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="space-y-16">
        <div className="animate-fade-in opacity-0 animate-delay-0">
          <Hero />
        </div>
        <div className="animate-fade-in opacity-0 animate-delay-50">
          <Partnership />
        </div>
        <div id="courses" className="animate-fade-in opacity-0 animate-delay-100">
          <Courses />
        </div>
        <div id="testimonials" className="animate-fade-in opacity-0 animate-delay-200">
          <Testimonials />
        </div>
        <div id="expect-values" className="animate-fade-in opacity-0 animate-delay-300">
          <ExpectValues />
        </div>
        <div id="photo-gallery" className="animate-fade-in opacity-0 animate-delay-400">
          <PhotoGallery />
        </div>
        <div id="faq" className="animate-fade-in opacity-0 animate-delay-500">
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

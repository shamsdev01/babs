import React from 'react';

interface HeroProps {
  onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  const handleGetStartedClick = () => {
    onGetStartedClick();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleGetStartedClick();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/HeroBg.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/60"></div>
      </div>
      <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="mb-6">
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Empowering Tech Talent
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="block">Launch Your Tech Career</span>
          <span className="block text-blue-300">with Babtech</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Choose your course, pick your time, and grow with us.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
          <button
            onClick={handleGetStartedClick}
            onKeyDown={handleKeyDown}
            className="group relative px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Get started with Babtech courses"
            tabIndex={0}
          >
            <span className="relative z-10">Get Started</span>
          </button>
          
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border-2 border-white/30 hover:border-white/50 text-white hover:text-white font-medium rounded-lg text-base transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30"
            aria-label="Learn more about Babtech"
          >
            Learn More
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-300 mb-1">500+</div>
            <div className="text-gray-300 text-sm">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-300 mb-1">10+</div>
            <div className="text-gray-300 text-sm">Tech Programs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-300 mb-1">95%</div>
            <div className="text-gray-300 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 
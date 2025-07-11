import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-0 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-blue-800 pb-8">
        <div className="flex items-center gap-3 justify-center md:justify-start w-full md:w-auto">
          <img src="/images/BabtechComputersLogo.png" alt="Babtech Logo" className="h-10 w-auto rounded-lg p-1" />
        </div>
        <div className="text-center md:text-right mt-6 md:mt-0 w-full md:w-auto">
          <div className="mb-1 text-sm">For more inquiries: <a href="mailto:info@babtechlabs.com" className="underline hover:text-blue-300 focus:text-blue-300 transition-colors">+234 816 817 1837</a></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-2 text-xs text-blue-200">
        <div className="mb-2 md:mb-0 text-center md:text-left w-full md:w-auto">© 2025 Babtech. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer; 
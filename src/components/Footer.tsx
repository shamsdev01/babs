import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const socials = [
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/babtech' },
  { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/babtech' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/company/babtech' },
];

const menus = [
  { name: 'Programs', href: '#programs' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-0 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-blue-800 pb-8">
        <div className="flex items-center gap-3">
          <img src="/images/BabtechComputersLogo.png" alt="Babtech Logo" className="h-10 w-auto rounded-lg  p-1" />
          
        </div>
        <nav className="flex gap-8 text-base font-medium">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              className="hover:text-blue-300 focus:text-blue-300 transition-colors focus:outline-none"
            >
              {menu.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${s.name}`}
              className="hover:text-blue-300 focus:text-blue-300 transition-colors focus:outline-none"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <div className="text-center md:text-right mt-6 md:mt-0">
          <div className="mb-1 text-sm">For inquiries: <a href="mailto:info@babtechlabs.com" className="underline hover:text-blue-300 focus:text-blue-300 transition-colors">info@babtechlabs.com</a></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-2 text-xs text-blue-200">
        <div className="mb-2 md:mb-0">© 2025 Babtech. All rights reserved.</div>
        <div className="flex gap-2">
          <span>Follow us:</span>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${s.name}`}
              className="hover:text-blue-300 focus:text-blue-300 transition-colors focus:outline-none"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
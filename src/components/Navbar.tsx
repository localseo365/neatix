import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { es } from '../translations/es';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-semibold text-2xl text-emerald-700">
            NEATIX
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-emerald-600">{es.nav.services}</a>
            <a href="#process" className="text-gray-700 hover:text-emerald-600">{es.nav.process}</a>
            <a href="#cases" className="text-gray-700 hover:text-emerald-600">{es.nav.cases}</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600">{es.nav.about}</a>
            <a href="tel:690220944" className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
              <Phone size={18} />
              <span>{es.nav.emergency}</span>
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{es.nav.services}</a>
            <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{es.nav.process}</a>
            <a href="#cases" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{es.nav.cases}</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">{es.nav.about}</a>
            <a href="tel:690220944" className="flex items-center gap-2 px-3 py-2 text-emerald-600">
              <Phone size={18} />
              <span>{es.nav.emergency}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
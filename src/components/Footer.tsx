import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { es } from '../translations/es';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-4">NEATIX</h3>
            <p className="mb-4">{es.footer.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{es.footer.links.title}</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white">{es.footer.links.services}</a></li>
              <li><a href="#about" className="hover:text-white">{es.footer.links.about}</a></li>
              <li><a href="#cases" className="hover:text-white">{es.footer.links.cases}</a></li>
              <li><a href="#contact" className="hover:text-white">{es.footer.links.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{es.footer.contact.title}</h4>
            <ul className="space-y-2">
              <li>{es.footer.contact.address}</li>
              <li><a href="tel:690220944" className="hover:text-white">690 22 09 44</a></li>
              <li><a href="mailto:info@neatix.vercel.app" className="hover:text-white">info@neatix.vercel.app</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Neatix. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href={es.footer.legal.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">{es.footer.legal.privacy}</a>
              <a href={es.footer.legal.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">{es.footer.legal.terms}</a>
              <a href={es.footer.legal.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">{es.footer.legal.cookies}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
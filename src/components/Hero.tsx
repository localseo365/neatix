import { ArrowRight, Shield } from 'lucide-react';
import { es } from '../translations/es';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-b from-emerald-50 to-white">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5e31f225a89a2f0525d5505e/8f5bd122-c14d-4697-96f4-4a6de85ed3aa/Hoarders+property+1+.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 to-emerald-900/50"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {es.hero.title}
            <span className="block text-emerald-300">{es.hero.subtitle}</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            {es.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700"
            >
              {es.hero.cta.primary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white/10"
            >
              {es.hero.cta.secondary}
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center text-sm text-gray-200">
            <Shield className="h-5 w-5 text-emerald-300 mr-2" />
            {es.hero.trust}
          </div>
        </div>
      </div>
    </div>
  );
}
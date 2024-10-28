import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { es } from '../translations/es';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-emerald-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">{es.faq.title}</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios de limpieza especializada
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {es.faq.questions.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl border transition-all duration-200 ${
                openIndex === index 
                  ? 'border-emerald-200 shadow-lg' 
                  : 'border-gray-200 hover:border-emerald-200'
              }`}
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className={`text-lg font-semibold ${
                  openIndex === index ? 'text-emerald-700' : 'text-gray-900'
                }`}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            ¿No encuentras la respuesta que buscas?{' '}
            <a 
              href="#contact" 
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
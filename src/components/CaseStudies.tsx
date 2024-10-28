import { es } from '../translations/es';

export default function CaseStudies() {
  const images = [
    "https://cdn-hplkp.nitrocdn.com/UWoTgoZDDKevLabGyyYAbvTYkkLPVPSb/assets/images/optimized/rev-b0d1342/extremehoardingcleanouts.com/wp-content/uploads/2023/01/maxresdefault-14.jpg",
    "https://cdn-hplkp.nitrocdn.com/UWoTgoZDDKevLabGyyYAbvTYkkLPVPSb/assets/images/optimized/rev-b0d1342/extremehoardingcleanouts.com/wp-content/uploads/2023/01/hoarders-hp.webp"
  ];

  return (
    <section id="cases" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{es.cases.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {es.cases.cases.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-64">
                <img 
                  src={images[index]}
                  alt={`Caso de limpieza ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{caseStudy.duration}</span>
                  <span>{caseStudy.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
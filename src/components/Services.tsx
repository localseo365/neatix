import { 
  Clock, 
  Shield, 
  Sparkles, 
  ClipboardCheck, 
  BoxSelect, 
  Trash2, 
  Sprout, 
  ScanLine, 
  Recycle, 
  Bug, 
  Shirt, 
  Wrench, 
  Files, 
  BookOpen 
} from 'lucide-react';
import { es } from '../translations/es';

export default function Services() {
  const allServices = [
    {
      title: "Evaluación inicial",
      description: "Visita de inspección para evaluar el estado del espacio, identificar necesidades específicas y elaborar un plan de acción personalizado.",
      icon: ClipboardCheck
    },
    {
      title: "Vaciado y limpieza de espacios",
      description: "Organización y eliminación de objetos innecesarios, ayudando a restaurar el orden en el hogar.",
      icon: BoxSelect
    },
    {
      title: "Eliminación de objetos no deseados",
      description: "Retiro seguro de objetos acumulados, incluyendo muebles, electrodomésticos y otros enseres, respetando las normativas locales de reciclaje y eliminación de residuos.",
      icon: Trash2
    },
    {
      title: "Limpieza profunda de superficies",
      description: "Limpieza exhaustiva de todas las superficies, incluyendo pisos, paredes, techos, ventanas y muebles.",
      icon: Sprout
    },
    {
      title: "Desinfección y desodorización",
      description: "Aplicación de productos desinfectantes para garantizar la higiene del entorno y eliminación de olores desagradables.",
      icon: ScanLine
    },
    {
      title: "Manejo de residuos y reciclaje",
      description: "Gestión adecuada de los desechos generados durante el proceso de limpieza, asegurando el reciclaje cuando sea posible.",
      icon: Recycle
    },
    {
      title: "Control de plagas",
      description: "Identificación y tratamiento de posibles infestaciones de plagas que puedan haber surgido debido a la acumulación de residuos.",
      icon: Bug
    },
    {
      title: "Lavandería y limpieza de textiles",
      description: "Lavado y limpieza de ropa, ropa de cama, cortinas y otros textiles afectados por la acumulación y la suciedad.",
      icon: Shirt
    },
    {
      title: "Reparaciones básicas",
      description: "Realización de pequeñas reparaciones necesarias para asegurar que el espacio esté funcional y seguro.",
      icon: Wrench
    },
    {
      title: "Apoyo en la gestión de documentos",
      description: "Organización y clasificación de documentos importantes, asegurando su preservación y fácil acceso.",
      icon: Files
    },
    {
      title: "Asesoramiento en mantenimiento",
      description: "Orientación sobre prácticas de limpieza y mantenimiento para prevenir recaídas en el desorden.",
      icon: BookOpen
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{es.services.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {es.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <IconComponent className="h-6 w-6 text-emerald-600 mr-3" />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{es.services.features.licensed.title}</h3>
            <p className="text-gray-600">{es.services.features.licensed.description}</p>
          </div>
          <div className="p-6">
            <Clock className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{es.services.features.available.title}</h3>
            <p className="text-gray-600">{es.services.features.available.description}</p>
          </div>
          <div className="p-6">
            <Sparkles className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{es.services.features.eco.title}</h3>
            <p className="text-gray-600">{es.services.features.eco.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
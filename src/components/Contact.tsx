import { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { es } from '../translations/es';

export default function Contact() {
  const [isEmergency, setIsEmergency] = useState(false);

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{es.contact.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{es.contact.subtitle}</p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-emerald-600 mr-4" />
                <div>
                  <p className="font-semibold">{es.contact.info.emergency}</p>
                  <a href="tel:690220944" className="text-emerald-600">690 22 09 44</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-emerald-600 mr-4" />
                <div>
                  <p className="font-semibold">{es.contact.info.email}</p>
                  <a href="mailto:info@neatix.vercel.app" className="text-emerald-600">info@neatix.vercel.app</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-emerald-600 mr-4" />
                <div>
                  <p className="font-semibold">{es.contact.info.hours}</p>
                  <p>{es.contact.info.hoursValue}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-gray-50 p-8 rounded-xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {es.contact.form.name}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {es.contact.form.email}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {es.contact.form.phone}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emergency"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  checked={isEmergency}
                  onChange={(e) => setIsEmergency(e.target.checked)}
                />
                <label htmlFor="emergency" className="ml-2 block text-sm text-gray-700">
                  {es.contact.form.emergency}
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {es.contact.form.message}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-lg text-white font-medium
                  ${isEmergency ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}
              >
                {isEmergency ? es.contact.form.submitEmergency : es.contact.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
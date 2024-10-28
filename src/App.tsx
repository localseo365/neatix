import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
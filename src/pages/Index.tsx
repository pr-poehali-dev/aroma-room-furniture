import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Process />
        <Portfolio />
        <Services />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

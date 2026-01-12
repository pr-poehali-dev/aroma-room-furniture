import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/2026-01-12 13.50.34.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
            <span className="text-primary font-semibold">Премиум мебель на заказ</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Мебель вашей <span className="text-primary">мечты</span> от ARomaRoom
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Создаём корпусную мебель и декоративные журнальные столы из лучших материалов с использованием премиум-фурнитуры
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => scrollToSection('contacts')}
            >
              Заказать проект
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              onClick={() => scrollToSection('portfolio')}
            >
              Наши работы
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-white/80">Проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-white/80">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-white/80">Качество</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button 
          onClick={() => scrollToSection('process')}
          className="text-white/60 hover:text-white transition-colors"
        >
          <Icon name="ChevronDown" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
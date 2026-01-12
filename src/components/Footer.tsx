import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="https://cdn.poehali.dev/files/2026-01-11 20.27.40.jpg" 
              alt="ARomaRoom Logo" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Производство корпусной мебели премиум-класса с использованием лучшей фурнитуры
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Портфолио
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  О цехе
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Услуги
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacts')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href="tel:+79281336969" className="text-white/80 hover:text-white transition-colors">
                  +7 (928) 133-69-69
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <a href="mailto:zakazmebel61@yandex.ru" className="text-white/80 hover:text-white transition-colors">
                  zakazmebel61@yandex.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  г. Ростов-на-Дону, пр. Космонавтов 2Е
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Режим работы</h4>
            <p className="text-white/80 text-sm mb-4">
              Понедельник - Пятница<br />
              9:00 - 18:00
            </p>
            <div className="flex gap-3 mt-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="Instagram" size={18} fallback="Share2" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="Facebook" size={18} fallback="Share2" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="Phone" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} ARomaRoom. Все права защищены.
            </p>
            <p>
              Производство мебели премиум-класса
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: 'Refrigerator',
      title: 'Кухни на заказ',
      description: 'Современные кухонные гарнитуры с учетом всех ваших пожеланий. Используем премиум-фурнитуру Blum, Hettich, Grass.',
      features: ['3D-визуализация', 'Немецкая фурнитура', 'Гарантия 5 лет'],
    },
    {
      icon: 'Cabinet',
      title: 'Шкафы и гардеробные',
      description: 'Встроенные и отдельностоящие системы хранения. Создаём идеальную организацию пространства.',
      features: ['Индивидуальный дизайн', 'Умная организация', 'Качественные направляющие'],
    },
    {
      icon: 'Sofa',
      title: 'Декоративные столы',
      description: 'Авторские журнальные и обеденные столы из массива дерева с элементами современного дизайна.',
      features: ['Ручная работа', 'Натуральные материалы', 'Уникальный дизайн'],
    },
    {
      icon: 'PaintBucket',
      title: 'Мебель под ключ',
      description: 'Комплексное обустройство помещений — от дизайн-проекта до финальной установки всей мебели.',
      features: ['Полный цикл работ', 'Единый стиль', 'Прозрачное ценообразование'],
    },
  ];

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональное изготовление корпусной мебели с использованием лучшей фурнитуры
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name={service.icon} size={32} className="text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы обсудить ваш проект?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для бесплатной консультации и замера
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 text-lg"
            onClick={scrollToContacts}
          >
            Получить консультацию
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

import Icon from '@/components/ui/icon';

const About = () => {
  const achievements = [
    {
      icon: 'Award',
      value: '12+',
      label: 'Лет опыта',
    },
    {
      icon: 'Users',
      value: '500+',
      label: 'Довольных клиентов',
    },
    {
      icon: 'CheckCircle',
      value: '100%',
      label: 'Гарантия качества',
    },
  ];

  const advantages = [
    {
      icon: 'Gem',
      title: 'Премиум фурнитура',
      description: 'Используем только проверенные бренды: Blum, Hettich, Grass — лидеры мирового рынка',
    },
    {
      icon: 'Ruler',
      title: 'Индивидуальный подход',
      description: 'Каждый проект создаётся с учётом ваших пожеланий и особенностей помещения',
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: 'Соблюдаем договорённости и укладываемся в согласованные временные рамки',
    },
    {
      icon: 'Shield',
      title: 'Гарантия 5 лет',
      description: 'Уверены в качестве нашей работы и предоставляем расширенную гарантию',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              О цехе <span className="text-primary">ARomaRoom</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Мы специализируемся на создании корпусной мебели премиум-класса с 2013 года. 
              Наш цех оснащён современным оборудованием для высокоточной обработки материалов.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              В работе используем только качественные материалы и фурнитуру от ведущих европейских производителей. 
              Особое внимание уделяем деталям и финишной отделке — каждое изделие проходит строгий контроль качества.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Помимо корпусной мебели, мы создаём авторские декоративные журнальные столы, 
              которые становятся настоящими арт-объектами в интерьере.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 animate-fade-in">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Наши <span className="text-primary">преимущества</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={advantage.icon} size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-3">{advantage.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

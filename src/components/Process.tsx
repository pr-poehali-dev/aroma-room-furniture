import Icon from '@/components/ui/icon';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: 'Lightbulb',
      title: 'Идея и консультация',
      description: 'Обсуждаем ваши пожелания, замеряем помещение и предлагаем оптимальные решения',
    },
    {
      number: '02',
      icon: 'PenTool',
      title: 'Дизайн-проект',
      description: 'Создаём 3D-визуализацию будущей мебели с учётом всех деталей и материалов',
    },
    {
      number: '03',
      icon: 'Hammer',
      title: 'Производство',
      description: 'Изготавливаем мебель на современном оборудовании с использованием премиум-фурнитуры',
    },
    {
      number: '04',
      icon: 'Truck',
      title: 'Доставка и монтаж',
      description: 'Доставляем и устанавливаем мебель под ключ с гарантией качества',
    },
  ];

  return (
    <section id="process" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Процесс создания <span className="text-primary">мебели</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            От первой встречи до установки готовой мебели — прозрачный и понятный процесс
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-secondary shadow-lg">
                  {step.number}
                </div>
                
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={step.icon} size={32} className="text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

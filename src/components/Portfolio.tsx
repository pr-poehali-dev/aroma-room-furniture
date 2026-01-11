import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Все проекты' },
    { id: 'kitchen', label: 'Кухни' },
    { id: 'wardrobe', label: 'Шкафы' },
    { id: 'table', label: 'Столы' },
  ];

  const projects = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/ac469ecd-c0a2-4727-bdda-013bac04c4c4/files/34b9dd6a-6437-4872-afda-fd266927af8a.jpg',
      title: 'Встроенный шкаф-купе',
      category: 'wardrobe',
      description: 'Премиум система хранения с итальянской фурнитурой',
    },
    {
      id: 2,
      images: [
        'https://cdn.poehali.dev/files/2026-01-11 20.31.42.jpg',
        'https://cdn.poehali.dev/files/2026-01-11 20.31.47.jpg',
        'https://cdn.poehali.dev/files/2026-01-11 20.31.53.jpg',
      ],
      title: 'Декоративный журнальный стол',
      category: 'table',
      description: 'Мраморный стол с золотыми прожилками — премиум исполнение',
    },
    {
      id: 3,
      images: [
        'https://cdn.poehali.dev/files/2026-01-11 20.38.30.jpg',
        'https://cdn.poehali.dev/files/2026-01-11 20.39.55.jpg',
      ],
      title: 'Модульная кухня премиум',
      category: 'kitchen',
      description: 'Минималистичный дизайн с чёрными акцентами и LED-подсветкой',
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/projects/ac469ecd-c0a2-4727-bdda-013bac04c4c4/files/34b9dd6a-6437-4872-afda-fd266927af8a.jpg',
      title: 'Гардеробная система',
      category: 'wardrobe',
      description: 'Индивидуальное решение для просторной гардеробной',
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/projects/ac469ecd-c0a2-4727-bdda-013bac04c4c4/files/d4b4787b-10b9-4481-8d4f-0e993fe21577.jpg',
      title: 'Обеденный стол',
      category: 'table',
      description: 'Массив дуба с эпоксидной заливкой',
    },
    {
      id: 6,
      image: 'https://cdn.poehali.dev/projects/ac469ecd-c0a2-4727-bdda-013bac04c4c4/files/5e941814-d497-4b03-8723-2074e00be134.jpg',
      title: 'Кухня-студия',
      category: 'kitchen',
      description: 'Современный дизайн с островом и барной стойкой',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="text-primary">работы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 реализованных проектов премиум мебели для дома и офиса
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className="px-6"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button size="lg" onClick={scrollToContacts} className="px-8">
            Заказать свой проект
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
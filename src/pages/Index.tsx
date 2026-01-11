import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/ac469ecd-c0a2-4727-bdda-013bac04c4c4/files/eceb470d-4ab9-41c8-abae-89033dffb0b8.jpg',
      title: 'Кухня премиум-класса',
      description: 'Современная кухня с фурнитурой Blum'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ac469ecd-c0a2-4727-bdda-013bac04c4c4/files/05e41913-2542-4f62-a5ed-c664285bca74.jpg',
      title: 'Декоративный журнальный стол',
      description: 'Авторский дизайн с элементами из массива'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ac469ecd-c0a2-4727-bdda-013bac04c4c4/files/91af552f-bd35-40b9-a53a-3adc9342162b.jpg',
      title: 'Гардеробная система',
      description: 'Организация пространства с австрийской фурнитурой'
    }
  ];

  const process = [
    { icon: 'Lightbulb', title: 'Идея', description: 'Обсуждаем ваши пожелания и создаём эскиз' },
    { icon: 'Ruler', title: 'Замеры', description: 'Выезжаем на объект для точных измерений' },
    { icon: 'PenTool', title: 'Проект', description: 'Разрабатываем 3D-визуализацию и утверждаем' },
    { icon: 'Hammer', title: 'Производство', description: 'Изготавливаем мебель на современном оборудовании' },
    { icon: 'Truck', title: 'Доставка', description: 'Привозим и собираем мебель в удобное время' }
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Корпусная мебель',
      description: 'Кухни, шкафы, гардеробные с использованием премиальной фурнитуры Blum, Hettich'
    },
    {
      icon: 'Sparkles',
      title: 'Декоративные столы',
      description: 'Авторские журнальные столы из массива с уникальным дизайном'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">ARomaRoom</h1>
          <div className="hidden md:flex gap-8">
            <a href="#main" className="hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">О цехе</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" className="hidden md:flex">
            Заказать звонок
          </Button>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Мебель премиум-класса<br />
                <span className="text-primary">на заказ</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Создаём корпусную мебель и декоративные столы с использованием лучшей фурнитуры на рынке
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать консультацию
                </Button>
                <Button size="lg" variant="outline">
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ac469ecd-c0a2-4727-bdda-013bac04c4c4/files/eceb470d-4ab9-41c8-abae-89033dffb0b8.jpg"
                alt="Премиальная мебель"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждый проект — это воплощение идеи клиента с использованием премиальных материалов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">От идеи до доставки</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Полный цикл создания мебели под ваши потребности
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={step.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ChevronRight" size={24} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/ac469ecd-c0a2-4727-bdda-013bac04c4c4/files/91af552f-bd35-40b9-a53a-3adc9342162b.jpg"
                alt="Наш цех"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">О цехе ARomaRoom</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на создании корпусной мебели премиум-класса с использованием только лучшей фурнитуры на рынке.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Премиальная фурнитура</h3>
                    <p className="text-muted-foreground">Используем Blum, Hettich — лидеров рынка</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Опытные мастера</h3>
                    <p className="text-muted-foreground">Команда профессионалов с опытом 10+ лет</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">3 года гарантии на все изделия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Специализируемся на создании уникальной мебели под заказ
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input 
                  placeholder="Введите имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input 
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground">info@aromaroom.ru</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Адрес</h3>
              <p className="text-muted-foreground">г. Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">ARomaRoom</h2>
          <p className="text-background/70 mb-6">Мебель премиум-класса на заказ</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
          <p className="text-background/50 text-sm mt-8">© 2024 ARomaRoom. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

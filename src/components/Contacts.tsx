import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время.',
      });
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@aromaroom.ru',
      link: 'mailto:info@aromaroom.ru',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Москва, ул. Мебельная, д. 15',
      link: null,
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00 - 18:00',
      link: null,
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь <span className="text-primary">с нами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Оставьте заявку или свяжитесь удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/80 mb-1">{item.title}</div>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-lg font-semibold hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-4">Мы в Telegram</h4>
              <a 
                href="https://t.me/ARomaRoom_61" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">@ARomaRoom_61</div>
                  <div className="text-sm text-muted-foreground">Напишите нам в Telegram</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
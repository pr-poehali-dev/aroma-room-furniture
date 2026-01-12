import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (928) 133-69-69',
      link: 'tel:+79281336969',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'zakazmebel61@yandex.ru',
      link: 'mailto:zakazmebel61@yandex.ru',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Ростов-на-Дону, пр. Космонавтов 2Е',
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
            Готовы ответить на все ваши вопросы и обсудить проект
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white animate-fade-in">
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

          <div className="bg-card border border-border rounded-3xl p-8 animate-fade-in">
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
    </section>
  );
};

export default Contacts;

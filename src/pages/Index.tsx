import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 to-mint-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-navy-900 mb-6  leading-tight">
            Добро пожаловать в Garderobe
          </h1>
          <p className="text-xl text-navy-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ваш персональный онлайн-гардероб: организуйте вещи, планируйте
            образы, получайте умные рекомендации и находите вдохновение каждый
            день!
          </p>

          {/* App Preview */}
          <div className="mb-16">
            <div className="max-w-md mx-auto">
              <img
                src="img/6b907290-393f-40df-9971-55f1dc31347d.jpg"
                alt="Garderobe App Preview"
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Shirt" size={32} className="text-coral-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 ">
                  Умный гардероб
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  Загружайте фото вещей и автоматически получайте теги по цвету,
                  стилю и сезону. Больше никаких "нечего надеть" — всё под
                  контролем!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" size={32} className="text-mint-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 ">
                  Вишлист мечты
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  Сохраняйте желанные покупки с ценами и ссылками. Отслеживайте
                  скидки и покупайте только то, что действительно нужно!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sparkles" size={32} className="text-navy-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 ">
                  Магия стиля
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  ИИ анализирует ваши предпочтения и создаёт персональные
                  рекомендации. Откройте новые сочетания и найдите свой
                  уникальный стиль!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-4 ">
              Готовы начать стильное путешествие?
            </h2>
            <p className="text-lg text-navy-600 mb-8">
              Присоединяйтесь к стильным пользователям, которые уже организовали
              свой Garderobe
            </p>
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className="bg-white/90 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center text-navy-900 mb-6 ">
                  Создать аккаунт
                </h3>
                <div className="space-y-4 mb-6">
                  <Input
                    placeholder="Ваш email"
                    type="email"
                    className="h-12 border-gray-200 focus:border-coral-400"
                  />
                  <Input
                    placeholder="Пароль"
                    type="password"
                    className="h-12 border-gray-200 focus:border-coral-400"
                  />
                </div>
                <Button className="w-full h-12 bg-coral-500 hover:bg-coral-600 text-white font-semibold mb-4 transition-all duration-300">
                  Зарегистрироваться бесплатно
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-navy-600 hover:text-navy-800"
                >
                  У меня уже есть аккаунт
                </Button>

                <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-navy-500">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>Регистрация за 30 секунд</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Gift" size={16} />
                    <span>Полностью бесплатно</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-navy-300">
            © 2025 Garderobe. Создано с ❤️ для любителей стиля.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Gift } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target date: February 26, 2026 at 18:00 MSK
      const targetDate = new Date(2026, 1, 26, 18, 0, 0).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    "Почему в 2026 без нейро-контента рост замедляется",
    "Как использовать нейро-контент для привлечения клиентов",
    "3 модели монетизации нейро-контента в любой нише",
    "Как превратить просмотры в заявки",
    "Что отличает тех, кто зарабатывает на ИИ, от тех, кто просто 'пробует'",
    "Пошаговый план роста дохода через нейро-контент",
  ];

  // Reorganize benefits for 2-column layout: 1,3,5 in left, 2,4,6 in right
  const benefitsLeft = [benefits[0], benefits[2], benefits[4]];
  const benefitsRight = [benefits[1], benefits[3], benefits[5]];

  const bonuses = [
    "Чек-лист: '5 ошибок, из-за которых нейро-контент не приносит денег'",
    "Подборка рабочих связок нейросетей для роста и монетизации",
    "Специальное предложение на обучение AI-CREATOR",
  ];

  const testimonials = [
    "/images/testimonial-1.jpg",
    "/images/testimonial-2.jpg",
    "/images/testimonial-3.jpg",
    "/images/testimonial-4.jpg",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Background Neural Network */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff007f" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ff007f" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="3" fill="#ff007f" opacity="0.6" />
            <circle cx="900" cy="150" r="3" fill="#ff007f" opacity="0.6" />
            <circle cx="800" cy="800" r="3" fill="#ff007f" opacity="0.6" />
            <circle cx="200" cy="900" r="3" fill="#ff007f" opacity="0.6" />
            <circle cx="500" cy="500" r="3" fill="#ff007f" opacity="0.4" />
            <line x1="100" y1="100" x2="500" y2="500" stroke="#ff007f" strokeWidth="1" opacity="0.2" />
            <line x1="900" y1="150" x2="500" y2="500" stroke="#ff007f" strokeWidth="1" opacity="0.2" />
            <line x1="800" y1="800" x2="500" y2="500" stroke="#ff007f" strokeWidth="1" opacity="0.2" />
            <line x1="200" y1="900" x2="500" y2="500" stroke="#ff007f" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 lg:hidden opacity-20 pointer-events-none">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663178631916/DtKGncOwUlDxCCoD.jpeg"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Date/Time Badge */}
              <div className="inline-block">
                <span className="font-body text-xs text-muted-foreground tracking-wide uppercase">
                  26 февраля • 18:00 (мск)
                </span>
              </div>

              {/* Free Badge */}
              <div className="inline-block">
                <div className="relative inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-primary bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm">
                  <span className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-primary tracking-wider uppercase font-black">
                    БЕСПЛАТНЫЙ ВЕБИНАР
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="font-display-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                  Как вырасти в доходе в 2026 году с помощью <span className="text-primary">нейро-контента</span>
                </h1>
              </div>

              {/* Countdown Timer */}
              <div className="flex gap-3 sm:gap-4 justify-start">
                <div className="flex flex-col items-center">
                  <div className="bg-primary/20 border border-primary rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-16 sm:min-w-20">
                    <span className="font-display-bold text-xl sm:text-2xl lg:text-3xl text-primary">
                      {timeLeft.days}
                    </span>
                  </div>
                  <span className="font-body text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wide">
                    дни
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-primary/20 border border-primary rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-16 sm:min-w-20">
                    <span className="font-display-bold text-xl sm:text-2xl lg:text-3xl text-primary">
                      {timeLeft.hours}
                    </span>
                  </div>
                  <span className="font-body text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wide">
                    часы
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-primary/20 border border-primary rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-16 sm:min-w-20">
                    <span className="font-display-bold text-xl sm:text-2xl lg:text-3xl text-primary">
                      {timeLeft.minutes}
                    </span>
                  </div>
                  <span className="font-body text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wide">
                    минуты
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-primary/20 border border-primary rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-16 sm:min-w-20">
                    <span className="font-display-bold text-xl sm:text-2xl lg:text-3xl text-primary">
                      {timeLeft.seconds}
                    </span>
                  </div>
                  <span className="font-body text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wide">
                    секунды
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-display-bold text-base px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto"
              >
                <a href="https://t.me/oliacodex_bot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 whitespace-nowrap">
                  ЗАРЕГИСТРИРОВАТЬСЯ
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
              </Button>
            </div>

            {/* Right Image - Desktop Only */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663178631916/DtKGncOwUlDxCCoD.jpeg"
                  alt="Ольга"
                  className="w-full h-auto max-w-sm object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-8 sm:mb-12 uppercase">
            Что ты получишь на вебинаре?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Column */}
            <div className="space-y-4 lg:space-y-6">
              {benefitsLeft.map((benefit, idx) => {
                const actualIdx = idx * 2; // 0, 2, 4
                return (
                  <div
                    key={actualIdx}
                    className="flex items-start gap-3 p-4 lg:p-6 rounded-lg bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="font-display-bold text-xs lg:text-sm text-black">{actualIdx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-xs sm:text-sm lg:text-base text-foreground leading-relaxed">{benefit}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Right Column */}
            <div className="space-y-4 lg:space-y-6">
              {benefitsRight.map((benefit, idx) => {
                const actualIdx = idx * 2 + 1; // 1, 3, 5
                return (
                  <div
                    key={actualIdx}
                    className="flex items-start gap-3 p-4 lg:p-6 rounded-lg bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="font-display-bold text-xs lg:text-sm text-black">{actualIdx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-xs sm:text-sm lg:text-base text-foreground leading-relaxed">{benefit}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BONUSES SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-2 uppercase">
            Бонусы для участников
          </h2>
          <p className="text-center text-xs sm:text-sm text-primary mb-8 sm:mb-12">
            Только для зарегистрированных и присутствующих:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {bonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 lg:p-6 rounded-lg bg-primary/10 border border-primary/30"
              >
                <Gift className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0" />
                <p className="font-body text-xs sm:text-sm lg:text-base text-foreground">{bonus}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8">
            Бонусы выдаются только тем, кто будет онлайн.
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-8 sm:mb-12 uppercase">
            Отзывы учеников
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <img
                  src={testimonial}
                  alt={`Testimonial ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl p-6 sm:p-8 lg:p-12 border border-primary/30">
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight">
                НЕ УПУСТИ СВОЙ ШАНС!
              </h2>
              <p className="font-body text-sm sm:text-base lg:text-lg text-muted-foreground">
                2026 — год, когда ИИ становится нормой. Вопрос не в том, использовать ли нейро-контент. Вопрос — кто на этом заработает. Если ты хочешь вырасти в доходе и не остаться в стороне — регистрируйся сейчас.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-display-bold text-base px-6 sm:px-8 py-5 sm:py-6 h-auto w-full sm:w-auto min-w-0"
              >
                <a href="https://t.me/oliacodex_bot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
                  ЗАРЕГИСТРИРОВАТЬСЯ
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPEAKER SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-display-bold text-xl sm:text-2xl lg:text-3xl text-primary">
                  Ольга | olia.codex
                </h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground">AI-креатор, эксперт по реалистичному нейро-контенту</p>
                <div className="space-y-2 font-body text-sm sm:text-base text-muted-foreground">
                  <p>• 12 000 подписчиков набраны только за счёт нейро-контента</p>
                  <p>• Миллионные охваты без рекламы</p>
                  <p>• Обучает созданию нейро-контента, который приводит заявки</p>
                  <p>• Ученики зарабатывают уже на первых этапах обучения</p>
                  <p>• Работает с экспертами, блогерами и брендами</p>
                </div>
                <p className="font-body text-xs sm:text-sm text-primary italic pt-2">Показывает не «как генерировать», а как выстроить систему: контент → внимание → заявки → деньги.</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Image with gradient fade */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663178631916/lCpyhARZgpOZjBQh.jpeg"
                    alt="Ольга"
                    className="w-full h-auto object-cover"
                  />
                  {/* Gradient fade to black at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 rounded-2xl"></div>
                  
                  {/* Text overlay that fades in */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <h3 className="font-display-bold text-lg sm:text-xl text-primary mb-2">
                      Ольга
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/90">
                      AI-креатор и эксперт
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="font-display-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-8 sm:mb-12 uppercase">
            Часто задаваемые вопросы
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <details className="group border border-primary/20 rounded-lg p-4 sm:p-6 cursor-pointer hover:border-primary/50 transition-colors">
              <summary className="font-display-bold text-sm sm:text-base lg:text-lg flex items-center justify-between">
                Это подойдёт новичкам?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="font-body text-xs sm:text-sm lg:text-base text-muted-foreground mt-4">
                Да. Всё объясняется простым языком, без сложных терминов.
              </p>
            </details>

            <details className="group border border-primary/20 rounded-lg p-4 sm:p-6 cursor-pointer hover:border-primary/50 transition-colors">
              <summary className="font-display-bold text-sm sm:text-base lg:text-lg flex items-center justify-between">
                Нужно ли уметь работать с нейросетями?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="font-body text-xs sm:text-sm lg:text-base text-muted-foreground mt-4">
                Нет. Ты получишь базовое понимание и чёткий план действий.
              </p>
            </details>

            <details className="group border border-primary/20 rounded-lg p-4 sm:p-6 cursor-pointer hover:border-primary/50 transition-colors">
              <summary className="font-display-bold text-sm sm:text-base lg:text-lg flex items-center justify-between">
                Подойдёт ли это моей нише?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="font-body text-xs sm:text-sm lg:text-base text-muted-foreground mt-4">
                Да. Принципы работают для экспертов, специалистов, блогеров и предпринимателей.
              </p>
            </details>

            <details className="group border border-primary/20 rounded-lg p-4 sm:p-6 cursor-pointer hover:border-primary/50 transition-colors">
              <summary className="font-display-bold text-sm sm:text-base lg:text-lg flex items-center justify-between">
                Будет ли запись?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="font-body text-xs sm:text-sm lg:text-base text-muted-foreground mt-4">
                Да, но бонусы получат только участники онлайн.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-8 sm:py-12 border-t border-primary/20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-2">
              <h3 className="font-display-bold text-lg sm:text-xl text-primary">AI CODEX</h3>
              <p className="font-body text-xs sm:text-sm text-muted-foreground">
                Школа нейросетей и нейро-контента
              </p>
            </div>
            {/* Contacts */}
            <div className="space-y-2">
              <h4 className="font-display-bold text-base sm:text-lg uppercase">Контакты</h4>
              <div className="space-y-1 font-body text-xs sm:text-sm text-muted-foreground">
                <p>Instagram: <a href="https://instagram.com/olia.codex" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@olia.codex</a></p>
                <p>Telegram: <a href="https://t.me/olia_codex" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@olia_codex</a></p>
              </div>
            </div>
            {/* Legal */}
            <div className="space-y-2">
              <h4 className="font-display-bold text-base sm:text-lg uppercase">Юридическая информация</h4>
              <div className="space-y-1 font-body text-xs sm:text-sm text-muted-foreground">
                <p>ИП КОДИНЦЕВА ОЛЬГА ДМИТРИЕВНА</p>
                <p>ИНН 667118064398</p>
                <p>ОГРНИП 322665800198411</p>
              </div>
            </div>
          </div>
          {/* Bottom Links and Copyright */}
          <div className="border-t border-primary/20 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <div className="flex flex-wrap gap-2 sm:gap-4 font-body text-xs sm:text-sm">
                <a href="https://disk.yandex.ru/i/xlpfh6YDYAuIig" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Политика конфиденциальности
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="https://disk.yandex.ru/i/HV-uoW9wA9ZIZA" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Публичная оферта
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="https://disk.yandex.ru/i/Q41RGOoSp1u5kw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Обработка данных
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="https://disk.yandex.ru/i/Q41RGOoSp1u5kw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Рассылка
                </a>
              </div>
            </div>
            <p className="font-body text-xs sm:text-sm text-muted-foreground">
              © AI CODEX. Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

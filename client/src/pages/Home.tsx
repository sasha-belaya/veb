/**
 * Нейро-креатор — High-Conversion Landing v3 "Less is More"
 *
 * Design Philosophy: "Power through Restraint"
 * — Only 5 blocks: Hero → Pain → Program → Author → Final CTA
 * — Every element earns its place by driving registration
 * — Montserrat 900 headlines, Manrope body, Inter labels
 * — #ff007f accent used only on the most critical elements
 * — No decorative noise, no stats bars, no ticker, no bonus cards clutter
 */

import { useEffect, useState } from "react";

const HERO_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/85w4fVt3EZsep5JQ8rDGvY/freepik_ultrarealistic_fashion_editorial_portrait_midshotf_98769_1c9c5152.jpeg";
const AUTHOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663178631916/85w4fVt3EZsep5JQ8rDGvY/freepik_halfbody_portrait_straight_confident_posture_shoul_98755_ef5e5da1.jpeg";

const REG_URL = "https://codexint.lpxl.ru/";

/* ─── COUNTDOWN ─── */
function useCountdown() {
  const target = new Date("2026-03-23T10:00:00");
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

const pad = (n: number) => String(n).padStart(2, "0");

/* ─── CTA BUTTON ─── */
function CTAButton({ label = "Зарегистрироваться бесплатно", size = "lg" }: { label?: string; size?: "lg" | "xl" }) {
  return (
    <a
      href={REG_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-2.5
        bg-[#ff007f] hover:bg-[#e0006e] active:bg-[#cc0070]
        text-white font-['Montserrat'] font-black tracking-tight
        rounded-full transition-all duration-200
        shadow-[0_6px_28px_rgba(255,0,127,0.38)] hover:shadow-[0_10px_36px_rgba(255,0,127,0.48)]
        hover:-translate-y-0.5 active:translate-y-0
        w-full sm:w-auto
        ${size === "xl"
          ? "text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5"
          : "text-sm sm:text-base px-7 sm:px-10 py-3.5 sm:py-4"}
      `}
    >
      {label}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

/* ─── MAIN ─── */
export default function Home() {
  const timer = useCountdown();
  const [scrolled, setScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <nav className={`sticky top-0 z-50 bg-white/96 backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-[0_1px_20px_rgba(0,0,0,0.07)]" : ""}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-14 sm:h-16">
          <span className="font-['Montserrat'] font-black text-sm sm:text-base text-black tracking-tight">
            Нейро<span className="text-[#ff007f]">-</span>креатор
          </span>
          <a
            href={REG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff007f] hover:bg-[#e0006e] text-white font-['Montserrat'] font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-[0_2px_12px_rgba(255,0,127,0.28)]"
          >
            Зарегистрироваться
          </a>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO — split screen
      ══════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex overflow-hidden bg-white">

        {/* Left: text */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[54%] px-4 sm:px-8 lg:px-16 xl:px-24 pt-8 pb-24 lg:py-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#fff0f7] border border-[#ffc0df] rounded-full px-4 py-2 mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff007f] animate-pulse flex-shrink-0" />
            <span className="font-['Inter'] text-[11px] font-bold tracking-widest uppercase text-[#ff007f] leading-snug">Бесплатный интенсив 23–25 марта</span>
          </div>

          {/* Headline */}
          <h1 className="font-['Montserrat'] font-black text-[clamp(2.1rem,9vw,4rem)] text-black leading-[1.07] tracking-tight mb-5">
            Как создавать<br />
            <span className="text-[#ff007f]">нейро-контент,</span><br />
            который растит<br />
            аудиторию
          </h1>

          {/* Sub */}
          <p className="font-['Manrope'] text-[15px] sm:text-[17px] text-gray-500 leading-relaxed mb-7 max-w-[420px]">
            За 3 дня освоите AI-инструменты и получите систему роста блога — даже если никогда не работали с нейросетями.
          </p>

          {/* Countdown */}
          <div className="flex items-center gap-2 mb-7">
            <span className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase text-gray-400">До старта:</span>
            {[{ v: pad(timer.d), l: "дн" }, { v: pad(timer.h), l: "ч" }, { v: pad(timer.m), l: "мин" }, { v: pad(timer.s), l: "сек" }].map(({ v, l }) => (
              <div key={l} className="flex flex-col items-center bg-black rounded-lg px-2.5 py-1.5 min-w-[40px]">
                <span className="font-['Montserrat'] font-black text-base text-white leading-none tabular-nums">{v}</span>
                <span className="font-['Inter'] text-[9px] text-white/40 mt-0.5">{l}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <CTAButton size="xl" />

          {/* Micro-trust */}
          <p className="font-['Inter'] text-[11px] text-gray-400 mt-3">🔒 Бесплатно · Без спама · Онлайн</p>
        </div>

        {/* Right: photo */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#ff007f] z-10" />
          <img
            src={HERO_PHOTO}
            alt="Ольга Кодинцева"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute bottom-8 left-8 z-20 bg-black/80 backdrop-blur-sm rounded-xl px-4 py-3">
            <p className="font-['Montserrat'] font-black text-white text-sm leading-tight">Ольга Кодинцева</p>
            <p className="font-['Inter'] text-[10px] text-[#ff007f] font-bold tracking-wider uppercase mt-0.5">Эксперт по AI-контенту · 14K+ подписчиков</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PAIN — узнаёте себя?
      ══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#f2f2f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Pain list */}
            <div>
              <p className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase text-[#ff007f] mb-4">Узнаёте себя?</p>
              <h2 className="font-['Montserrat'] font-black text-[clamp(1.9rem,6vw,2.8rem)] text-black leading-tight mb-8">
                Блог перестал расти.<br />Охваты падают.
              </h2>
              <ul className="space-y-4">
                {[
                  "Публикуете контент, а подписчики не приходят",
                  "Алгоритмы изменились — старые методы больше не работают",
                  "Конкуренты растут быстрее, хотя контент у вас не хуже",
                  "Тратите часы на посты, а охваты всё равно падают",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/></svg>
                    </span>
                    <span className="font-['Manrope'] text-[15px] text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution card */}
            <div className="bg-black rounded-2xl p-8 sm:p-10">
              <div className="w-10 h-10 bg-[#ff007f] rounded-xl flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-['Montserrat'] font-black text-xl sm:text-2xl text-white mb-3 leading-snug">
                Решение — нейро-контент
              </h3>
              <p className="font-['Manrope'] text-[15px] text-white/50 leading-relaxed mb-6">
                Блогеры, которые начали использовать AI-инструменты, выросли в 3–5 раз быстрее тех, кто работает по-старому.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Охваты с нейро-контентом", val: 87 },
                  { label: "Рост подписчиков", val: 73 },
                  { label: "Вовлечённость аудитории", val: 91 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-['Inter'] text-[11px] text-white/40">{row.label}</span>
                      <span className="font-['Montserrat'] font-bold text-[11px] text-[#ff007f]">+{row.val}%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#ff007f] rounded-full" style={{ width: `${row.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROGRAM — 3 дня
      ══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">

          <div className="mb-10 sm:mb-14">
            <p className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase text-[#ff007f] mb-3">Программа</p>
            <h2 className="font-['Montserrat'] font-black text-[clamp(1.9rem,6vw,2.8rem)] text-black leading-tight">
              3 дня — 3 шага к росту
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                day: "День 1", date: "23 марта",
                title: "Почему нейро-контент растёт быстрее обычного",
                topics: ["Что такое нейро-контент и почему он работает", "Как алгоритмы реагируют на AI-визуал", "Примеры блогов, которые выросли с нейросетями", "Какие инструменты использовать прямо сейчас"],
              },
              {
                day: "День 2", date: "24 марта",
                title: "Как создавать реалистичный нейро-контент",
                topics: ["Пошаговое создание AI-изображений и видео", "Промпты, которые дают результат с первого раза", "Как сделать контент узнаваемым и брендовым", "Практика: создаём первый нейро-пост"],
              },
              {
                day: "День 3", date: "25 марта",
                title: "Как превратить контент в рост блога",
                topics: ["Система публикаций, которая привлекает подписчиков", "Как монетизировать нейро-контент", "Контент-план на месяц с нейросетями", "Разбор работ участников"],
              },
            ].map((card, i) => (
              <div key={card.day} className="grid grid-cols-1 lg:grid-cols-[160px_1fr] border border-gray-100 hover:border-[#ff007f]/40 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                <div className="bg-black px-6 py-5 lg:py-8 flex lg:flex-col justify-between items-center lg:items-start gap-4 lg:gap-0">
                  <div>
                    <p className="font-['Montserrat'] font-black text-[#ff007f] text-xs tracking-wider uppercase">{card.day}</p>
                    <p className="font-['Inter'] text-[11px] text-white/30 mt-0.5">{card.date}</p>
                  </div>
                  <span className="font-['Montserrat'] font-black text-[64px] text-white/5 leading-none select-none hidden lg:block">{i + 1}</span>
                  <span className="font-['Montserrat'] font-black text-3xl text-white/10 leading-none select-none lg:hidden">{i + 1}</span>
                </div>
                <div className="px-6 sm:px-8 py-6 sm:py-7 bg-white">
                  <h3 className="font-['Montserrat'] font-black text-base sm:text-lg text-black mb-4 leading-snug">{card.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {card.topics.map((t) => (
                      <div key={t} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#ff007f] flex-shrink-0 mt-2" />
                        <span className="font-['Manrope'] text-[13px] text-gray-500 leading-relaxed">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="mt-10 flex justify-center">
            <CTAButton label="Хочу попасть на интенсив" size="xl" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AUTHOR
      ══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#f2f2f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-center">

            {/* Photo */}
            <div className="relative mx-auto lg:mx-0 w-[220px] sm:w-[280px] lg:w-full">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
                <img src={AUTHOR_IMG} alt="Ольга Кодинцева" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#ff007f] text-white rounded-xl px-4 py-3 shadow-[0_8px_24px_rgba(255,0,127,0.4)]">
                <span className="block font-['Montserrat'] font-black text-2xl leading-none">14K+</span>
                <span className="font-['Manrope'] text-[10px] font-semibold opacity-90">подписчиков</span>
              </div>
            </div>

            {/* Text */}
            <div className="pt-8 lg:pt-0">
              <p className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase text-[#ff007f] mb-4">Об авторе</p>
              <h2 className="font-['Montserrat'] font-black text-[clamp(1.9rem,6vw,2.8rem)] text-black leading-tight mb-2">Ольга Кодинцева</h2>
              <p className="font-['Manrope'] text-sm text-gray-400 mb-6">Эксперт по нейросетям и визуальному контенту</p>
              <p className="font-['Manrope'] text-[15px] text-gray-700 leading-relaxed mb-8">
                Прошла путь от нулевого блога до 14 000 подписчиков, используя исключительно нейро-контент. Создала авторскую программу «Нейро-креатор» и помогает блогерам, экспертам и предпринимателям расти через AI-инструменты.
              </p>
              <div className="space-y-3">
                {[
                  "+14 000 подписчиков через нейро-контент без рекламного бюджета",
                  "Создатель программы «Нейро-креатор» — авторская методология роста",
                  "Обучает созданию реалистичного AI-контента, который работает",
                ].map((a) => (
                  <div key={a} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#ff007f] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="font-['Manrope'] text-[14px] text-gray-700 leading-relaxed">{a}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BONUSES — compact
      ══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="mb-8">
            <p className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase text-[#ff007f] mb-3">Бонусы участникам</p>
            <h2 className="font-['Montserrat'] font-black text-[clamp(1.7rem,5vw,2.4rem)] text-black leading-tight">
              Каждый участник получит
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: "🛠️", title: "Список нейросетей", desc: "Лучшие AI-инструменты с инструкциями" },
              { icon: "🎬", title: "Примеры роликов", desc: "Нейро-видео и рилсы, которые набирают охваты" },
              { icon: "📝", title: "Готовые промпты", desc: "Для постов, рилсов и сториз — копируй и запускай" },
            ].map((b) => (
              <div key={b.title} className="flex items-start gap-4 bg-[#f2f2f2] rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <div>
                  <p className="font-['Montserrat'] font-bold text-sm text-black mb-1">{b.title}</p>
                  <p className="font-['Manrope'] text-[13px] text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-black">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 text-center">

          <p className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase text-[#ff007f] mb-5">Регистрация</p>
          <h2 className="font-['Montserrat'] font-black text-[clamp(2rem,8vw,3.2rem)] text-white leading-tight mb-3">
            Зарегистрируйтесь<br />
            <span className="text-[#ff007f]">бесплатно</span>
          </h2>
          <p className="font-['Manrope'] text-sm text-white/40 mb-8">23–25 марта · Онлайн · 3 дня</p>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase text-white/30">До старта:</span>
            {[{ v: pad(timer.d), l: "дн" }, { v: pad(timer.h), l: "ч" }, { v: pad(timer.m), l: "мин" }, { v: pad(timer.s), l: "сек" }].map(({ v, l }) => (
              <div key={l} className="flex flex-col items-center bg-white/10 rounded-lg px-3 py-2 min-w-[46px]">
                <span className="font-['Montserrat'] font-black text-lg text-white leading-none tabular-nums">{v}</span>
                <span className="font-['Inter'] text-[9px] text-white/30 mt-0.5">{l}</span>
              </div>
            ))}
          </div>

          <CTAButton size="xl" />
          <p className="font-['Inter'] text-[11px] text-white/25 mt-4">🔒 Бесплатно · Без спама · Онлайн</p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            <div>
              <span className="font-['Montserrat'] font-black text-base text-white">
                Нейро<span className="text-[#ff007f]">-</span>креатор
              </span>
              <p className="font-['Manrope'] text-xs text-white/30 mt-2 leading-relaxed">Школа нейросетей и нейро-контента</p>
            </div>

            <div>
              <p className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase text-white/20 mb-3">Контакты</p>
              <div className="space-y-2">
                <a href="https://instagram.com/olia.codex" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-['Manrope'] text-xs text-white/40 hover:text-[#ff007f] transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                  @olia.codex
                </a>
                <a href="https://t.me/olia_codex" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-['Manrope'] text-xs text-white/40 hover:text-[#ff007f] transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M21.5 3L2 10.5l6.5 2.5L21.5 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8.5 13L11 21l3-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.5 13l6 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  @olia_codex
                </a>
              </div>
            </div>

            <div>
              <p className="font-['Inter'] text-[10px] font-bold tracking-widest uppercase text-white/20 mb-3">Юридическая информация</p>
              <p className="font-['Manrope'] text-[11px] text-white/20 leading-relaxed">ИП КОДИНЦЕВА ОЛЬГА ДМИТРИЕВНА<br />ИНН 667118064398<br />ОГРНИП 322665800198411</p>
            </div>

          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-['Inter'] text-[10px] text-white/15">© 2026 Ольга Кодинцева · Все права защищены</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
              {["Политика конфиденциальности", "Публичная оферта", "Обработка данных", "Рассылка"].map((label) => (
                <a key={label} href="#" className="font-['Inter'] text-[10px] text-white/20 hover:text-[#ff007f] transition-colors whitespace-nowrap">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════
          STICKY MOBILE CTA
      ══════════════════════════════════════ */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-all duration-300 ${showSticky ? "translate-y-0" : "translate-y-full"}`}>
        <div className="bg-white border-t border-gray-100 px-4 py-3 shadow-[0_-6px_24px_rgba(0,0,0,0.1)]">
          <a
            href={REG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-[#ff007f] text-white font-['Montserrat'] font-black text-sm rounded-xl shadow-[0_4px_16px_rgba(255,0,127,0.35)] flex items-center justify-center gap-2"
          >
            Зарегистрироваться бесплатно →
          </a>
        </div>
      </div>

    </div>
  );
}

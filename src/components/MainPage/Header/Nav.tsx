"use client";

import { foodTypes, FoodType } from "@/types";
import { useEffect, useState, useRef } from "react";

export const Nav = () => {
  const [activeSection, setActiveSection] = useState<FoodType>(foodTypes[0]);
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateActiveButton = () => {
      // Игнорируем обновления во время программного скролла по клику
      if (isClickScrolling.current) return;

      // Немного опускаем зону срабатывания для более естественного ощущения
      const scrollPosition = window.scrollY + 200;
      let currentActive: FoodType = foodTypes[0];

      // Идем по секциям и проверяем, в какой из них мы сейчас находимся
      foodTypes.forEach((type) => {
        const section = document.getElementById(type);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          // Добавляем отступы, чтобы нижняя граница была чуть ниже реальной высоты
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentActive = type;
          }
        }
      });

      // При самом верху страницы всегда активна первая категория
      if (window.scrollY < 100) {
        currentActive = foodTypes[0];
      }

      setActiveSection((prev) => (prev !== currentActive ? currentActive : prev));
    };

    window.addEventListener("scroll", updateActiveButton, { passive: true });
    // Запускаем через таймаут первый раз, чтобы DOM и стили (шрифты/картинки) точно прогрузились
    setTimeout(updateActiveButton, 300);

    return () => window.removeEventListener("scroll", updateActiveButton);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    type: FoodType,
  ) => {
    e.preventDefault();
    
    // Включаем флаг блокировки
    isClickScrolling.current = true;
    setActiveSection(type);

    // Сбрасываем старый таймаут, если кликнули несколько раз подряд
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
    }
    
    // Снимаем блокировку через 800мс (когда анимация скролла гарантированно завершится)
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);

    const targetSection = document.getElementById(type);
    if (targetSection) {
      const heroHeader = document.querySelector(".hero-header") as HTMLElement | null;
      const nav = document.querySelector(".nav") as HTMLElement | null;

      const offset =
        (heroHeader?.offsetHeight || 0) + (nav?.offsetHeight || 0) + 10;
        
      const absoluteTop = targetSection.getBoundingClientRect().top + window.scrollY;
      const targetPosition = absoluteTop - offset;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="nav">
      {foodTypes.map((type) => (
        <div
          className={`button ${activeSection === type ? "active" : ""}`}
          key={type}
        >
          <a href={`#${type}`} onClick={(e) => handleNavClick(e, type)}>
            {type}
          </a>
        </div>
      ))}
    </nav>
  );
};

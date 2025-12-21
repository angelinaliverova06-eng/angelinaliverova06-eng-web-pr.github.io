import React, { useEffect, useRef } from 'react';
import '../styles/components.css';

function SponsorsSlider() {
  const sliderLeftRef = useRef(null);
  const sliderRightRef = useRef(null);

  useEffect(() => {
    // Инициализация слайдера при монтировании
    const logos = [
      'sponsor1.png',
      'sponsor2.png',
      'sponsor3.png',
      'sponsor4.png',
      'sponsor5.png',
      // добавьте пути к вашим логотипам
    ];

    const createSliderContent = (logos) => {
      // Дублируем логотипы для бесшовной анимации
      return [...logos, ...logos].map((logo, index) => (
        <img 
          key={index}
          src={`/sponsors/${logo}`}
          alt={`Sponsor ${index}`}
          className="sponsor-logo"
        />
      ));
    };

    // Здесь можно добавить логику для динамической загрузки логотипов
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-track slider-left" ref={sliderLeftRef}>
        {/* Логотипы будут добавлены динамически */}
      </div>
      <div className="slider-track slider-right" ref={sliderRightRef}>
        {/* Дубликат для обратного направления */}
      </div>
    </div>
  );
}

export default SponsorsSlider;
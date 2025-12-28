import React from 'react';
import '../components.css';

function CarInfo({ backgroundImage = '' }) {
  return (
    <>
      {/* Фоновое изображение, если передано */}
      {backgroundImage && <div 
        className="car-info-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>}
      
      <div className="car-info">
        <h2>Болид SF-25</h2>
        <p>
          Болид - идеальное сочетание прошлого, настоящего и будущего.
          Более темный оттенок гоночного красного 2025 года с матовой отделкой напоминает о десятилетиях гонок, 
          а яркая белая полоса под углом выделяется как отличительная черта автомобиля, символизируя динамизм и взгляд в будущее.
          Контраст между белым и красным - дань уважения истории и самобытности марки, а также непрерывной эволюции стиля Ferrari, 
          манифеста утонченной спортивности и неподвластной времени эстетики.
          Колесные диски также полностью красные, в то время как номера на автомобилях Чарльза и Льюиса белые, 
          выполненные официальным шрифтом Ferrari - Ferrari Sans.
        </p>
      </div>
      
      {/* Контейнер с фото болида */}
      <div className="bolide-container">
        <div className="bolide-shadow"></div>
        <img 
          src="bolide-wallpaper.png" 
          alt="Ferrari SF-25 Bolide" 
          className="bolide-image"
        />
      </div>
    </>
  );
}

export default CarInfo;
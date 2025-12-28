import React from 'react';
import '../components.css';
function CarInfo() {
  return (
    <div className="car-info-section">
      {/* Фоновое изображение болида на весь экран */}
      <div 
        className="car-info-background"
        style={{ backgroundImage: `url('/фото/bolide-wallaper.png')` }}
      ></div>
      <div className="car-info-content-wrapper">
        <div className="car-info-content">
          <h2 className="car-info-title">Болид SF-25</h2>
          <div className="car-info-text">
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
        </div>
      </div>
    </div>
  );
}

export default CarInfo;
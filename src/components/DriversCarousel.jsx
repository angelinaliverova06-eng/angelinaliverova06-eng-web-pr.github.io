import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './DriverCardDeskription';
import '../components.css';

const DriversCarousel = ({ drivers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(drivers[0]);

  // Определяем индексы для отображения
  const getDriverIndex = (position) => {
    const total = drivers.length;
    let index = currentIndex + position;
    
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    
    return index % total;
  };

  // Пилоты для отображения: слева, центр, справа
  const leftDriver = drivers[getDriverIndex(-1)];
  const centerDriver = drivers[getDriverIndex(0)];
  const rightDriver = drivers[getDriverIndex(1)];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? drivers.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === drivers.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Клик по фото пилота переключает карусель
  const handlePhotoClick = (driver) => {
    if (isAnimating) return;
    
    // Если кликнули на центральное фото - открываем диалог
    if (driver.name === centerDriver.name) {
      handleOpenDialog(centerDriver);
      return;
    }
    
    // Если кликнули на левое фото - переключаем на предыдущего
    if (driver.name === leftDriver.name) {
      handlePrev();
      return;
    }
    
    // Если кликнули на правое фото - переключаем на следующего
    if (driver.name === rightDriver.name) {
      handleNext();
      return;
    }
  };

  const handleOpenDialog = (driver) => {
    setSelectedDriver(driver);
    setIsDialogOpen(true);
  };

  return (
    <section className="drivers-section">
      <h2 className="section-title">ПИЛОТЫ</h2>
      
      <div className="drivers-grid">
        {/* Левое фото */}
        <div 
          className={`driver-block left-block ${isAnimating ? 'animating' : ''}`}
          onClick={() => handlePhotoClick(leftDriver)}
        >
          <div className="driver-photo-container">
            <img 
              src={leftDriver.photo || "/placeholder-driver.jpg"} 
              alt={leftDriver.name}
              className="driver-photo"
            />
          </div>
          <div className="driver-info">
            <h3 className="driver-fullname">{leftDriver.name}</h3>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleOpenDialog(leftDriver);
              }}
              className="driver-button"
            >
              ПОДРОБНЕЕ
            </button>
          </div>
        </div>

        {/* Центральное фото */}
        <div 
          className={`driver-block center-block ${isAnimating ? 'animating' : ''}`}
          onClick={() => handlePhotoClick(centerDriver)}
        >
          <div className="driver-photo-container">
            <img 
              src={centerDriver.photo || "/placeholder-driver.jpg"} 
              alt={centerDriver.name}
              className="driver-photo"
            />
          </div>
          <div className="driver-info">
            <h3 className="driver-fullname center-name">{centerDriver.name}</h3>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleOpenDialog(centerDriver);
              }}
              className="driver-button center-button"
            >
              ПОДРОБНЕЕ
            </button>
          </div>
        </div>

        {/* Правое фото */}
        <div 
          className={`driver-block right-block ${isAnimating ? 'animating' : ''}`}
          onClick={() => handlePhotoClick(rightDriver)}
        >
          <div className="driver-photo-container">
            <img 
              src={rightDriver.photo || "/placeholder-driver.jpg"} 
              alt={rightDriver.name}
              className="driver-photo"
            />
          </div>
          <div className="driver-info">
            <h3 className="driver-fullname">{rightDriver.name}</h3>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleOpenDialog(rightDriver);
              }}
              className="driver-button"
            >
              ПОДРОБНЕЕ
            </button>
          </div>
        </div>
      </div>

      {/* Диалог с информацией о пилоте */}
      <Dialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
        className="driver-dialog simple-driver-dialog"
      >
        <DialogHeader>
          <DialogTitle>{selectedDriver.name}</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <div className="simple-driver-info">
            {/* Цитата */}
            <div className="driver-quote-section">
              <div className="quote-icon">"</div>
              <p className="driver-quote-text">{selectedDriver.quote}</p>
            </div>
            
            {/* Информация о водителе */}
            <div className="driver-info-section">
              <h4>О ПИЛОТЕ</h4>
              <div className="driver-info-content">
                <p>{selectedDriver.bio}</p>
                
                {/* Дополнительная информация */}
                <div className="driver-highlights">
                  <div className="highlight-item">
                    <span className="highlight-label">Команда:</span>
                    <span className="highlight-value">Scuderia Ferrari</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-label">Статус:</span>
                    <span className="highlight-value">
                      {selectedDriver.name.includes("Хэмилтон") ? "7-кратный чемпион мира" : 
                       selectedDriver.name.includes("Леклер") ? "Основной пилот" : "Резервный пилот"}
                    </span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-label">Сезон в Ferrari:</span>
                    <span className="highlight-value">
                      {selectedDriver.name.includes("Хэмилтон") ? "2025" : 
                       selectedDriver.name.includes("Леклер") ? "2019-настоящее время" : "2025"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DriversCarousel;
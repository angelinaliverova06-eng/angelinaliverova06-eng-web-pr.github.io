import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './DriverCardDeskription';
import '../components.css'; // Если есть такой файл

// Простой Button компонент прямо в этом файле
function Button({ children, onClick, className, style }) {
  return (
    <button
      className={`custom-button ${className || ''}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}

// Твой основной компонент DriverCard
export default function DriverCard({ driver }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="driver-card">
      {/* ФОТО вместо текста */}
      <div className="driver-photo-container">
        <img 
          src={driver.photo || "/placeholder-driver.jpg"} 
          alt={driver.name}
          className="driver-photo"
        />
        <div className="driver-overlay">
          <span className="driver-number">
            {driver.name === "Льюис Хэмилтон" ? "44" : 
             driver.name === "Шарль Леклер" ? "16" : "24"}
          </span>
        </div>
      </div>

      {/* Кнопка "Подробнее" под фото */}
      <Button 
        onClick={handleOpenDialog}
        className="driver-button"
      >
        Подробнее о пилоте
      </Button>

      {/* Диалог с информацией о пилоте */}
      <Dialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
        className="driver-dialog"
      >
        <DialogHeader>
          <DialogTitle>{driver.name}</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <div className="driver-dialog-content">
            {/* Фото в диалоге */}
            <div className="dialog-photo-container">
              <img 
                src={driver.photo || "/placeholder-driver.jpg"} 
                alt={driver.name}
                className="dialog-photo"
              />
            </div>
            
            {/* Цитата */}
            <div className="driver-quote">
              <p className="quote-text">"{driver.quote}"</p>
            </div>
            
            {/* Биография */}
            <div className="driver-bio">
              <h4>Биография:</h4>
              <p>{driver.bio}</p>
            </div>
            
            {/* Статистика */}
            <div className="driver-stats">
              <h4>Ключевые данные:</h4>
              <ul>
                <li>Номер: {driver.name === "Льюис Хэмилтон" ? "44" : 
                           driver.name === "Шарль Леклер" ? "16" : "24"}</li>
                <li>Команда: Scuderia Ferrari</li>
                <li>Сезон в Ferrari: {driver.name === "Льюис Хэмилтон" ? "2025" : 
                                    driver.name === "Шарль Леклер" ? "2019-настоящее время" : "2025"}</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
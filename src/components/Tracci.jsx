"use client"

import { useState } from "react"
import "../components5.css"

// ====================
// ВСТАВЬТЕ ВАШИ ФОТО ЗДЕСЬ:
// ====================
// Пример импорта фотографий:
// import australianGP from './images/australian-gp.jpg';
// import chineseGP from './images/chinese-gp.jpg';
// import japaneseGP from './images/japanese-gp.jpg';
// import bahrainGP from './images/bahrain-gp.jpg';
// import saudiGP from './images/saudi-gp.jpg';
// import hungarianGP from './images/hungarian-gp.jpg';
// import belgianGP from './images/belgian-gp.jpg';
// import dutchGP from './images/dutch-gp.jpg';
// import italianGP from './images/italian-gp.jpg';
// import singaporeGP from './images/singapore-gp.jpg';

// ====================
// КАК ДОБАВИТЬ ФОТО ДЛЯ КАЖДОЙ КАРТОЧКИ:
// ====================
// 1. Импортируйте фотографии выше (как в примере)
// 2. В массиве allTracks добавьте фото в свойство 'photo' для каждой трассы
// 3. Для каждой фотографии можно задать индивидуальный размер и позицию:
//    - Используйте style={{width: 'XX%', height: 'XX%', transform: 'translate(...)'}}
//    - Пример: {id: 1, name: "AUSTRALIAN", ..., photo: australianGP, photoStyle: {width: '70%', height: '60%', transform: 'translate(-50%, -50%) scale(1.1)'}}
// ====================

const Tracci = () => {
  const [showAll, setShowAll] = useState(false)

  // Все трассы с возможностью добавления фото и индивидуальных стилей для каждой фотографии
  const allTracks = [
    { 
      id: 1, 
      name: "AUSTRALIAN", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null,
      // Для индивидуальной настройки фото раскомментируйте:
      // photoStyle: { width: '75%', height: '65%', objectPosition: 'center 30%', transform: 'translate(-50%, -50%)' }
    },
    { 
      id: 2, 
      name: "CHINESE", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null,
      // photoStyle: { width: '80%', height: '55%', objectPosition: 'center 40%', transform: 'translate(-50%, -50%)' }
    },
    { 
      id: 3, 
      name: "JAPANESE", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null,
      // photoStyle: { width: '70%', height: '60%', objectPosition: 'center 20%', transform: 'translate(-50%, -50%) scale(1.05)' }
    },
    { 
      id: 4, 
      name: "BAHRAIN", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null,
      // photoStyle: { width: '85%', height: '50%', objectPosition: 'center 35%', transform: 'translate(-50%, -50%)' }
    },
    { 
      id: 5, 
      name: "SAUDI ARABIAN", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null,
      // photoStyle: { width: '65%', height: '70%', objectPosition: 'center 25%', transform: 'translate(-50%, -50%) rotate(5deg)' }
    },
    { 
      id: 6, 
      name: "SPANISH", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null 
    },
    { 
      id: 7, 
      name: "MONACO", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null 
    },
    { 
      id: 8, 
      name: "CANADIAN", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null 
    },
    { 
      id: 9, 
      name: "BRITISH", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null 
    },
    { 
      id: 10, 
      name: "HUNGARIAN", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null 
    },
    { 
      id: 11, 
      name: "BELGIAN", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null 
    },
    { 
      id: 12, 
      name: "DUTCH", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null 
    },
    { 
      id: 13, 
      name: "ITALIAN", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null 
    },
    { 
      id: 14, 
      name: "SINGAPORE", 
      location: "GRAND PRIX", 
      year: "2024", 
      photo: null 
    },
  ]

  // Показываем 5 в закрытом виде, все в открытом
  const tracks = showAll ? allTracks : allTracks.slice(0, 5)

  return (
    <div className="tracci-wrapper">
      <div className="tracci-container">
        <h1 className="tracci-title">ТРАССЫ</h1>

        <div className={`tracks-grid ${showAll ? "expanded" : ""}`}>
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className="track-card"
              style={{
                animationDelay: showAll ? `${index * 0.05}s` : "0s",
              }}
            >
              <div className="track-card-inner">
                <div className="track-text-top-left">
                  <div className="track-name">{track.name}</div>
                  <div className="track-location">{track.location}</div>
                </div>

                <div className="track-image-space">
                  {track.photo ? (
                    <img 
                      src={track.photo || "/placeholder.svg"} 
                      alt={track.name} 
                      className="track-photo" 
                      style={track.photoStyle || {}} // Индивидуальные стили для каждой фотографии
                    />
                  ) : (
                    <div className="track-placeholder">{/* Placeholder for track map */}</div>
                  )}
                </div>

                {/* MORE DETAILS - увеличен размер и межбуквенное расстояние */}
                <div className="track-text-bottom-center">MORE DETAILS &gt;</div>

                <div className="track-text-right-rotated">{track.year}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="button-container">
          {/* Кнопка с черной обрамкой */}
          <button className="tracci-button" onClick={() => setShowAll(!showAll)}>
            {showAll ? "СВЕРНУТЬ" : "ПОКАЗАТЬ ВСЕ ТРАССЫ"}
          </button>
        </div>
      </div>

      {/* Градиент фона от белого к черному */}
      <div className="gradient-bottom"></div>
    </div>
  )
}

export default Tracci
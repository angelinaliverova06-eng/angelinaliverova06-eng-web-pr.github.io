import React, { useState } from "react";
import "../components5.css";

// ====================
// ВСТАВЬТЕ ВАШИ ФОТО ЗДЕСЬ:
// ====================
// Пример:
// import australianGP from './images/australian-gp.jpg';
// import chineseGP from './images/chinese-gp.jpg';
// import japaneseGP from './images/japanese-gp.jpg';
// import bahrainGP from './images/bahrain-gp.jpg';
// import saudiGP from './images/saudi-gp.jpg';
// ====================

const Tracci = () => {
  const [showAll, setShowAll] = useState(false);

  // Все трассы
  const allTracks = [
    {
      id: 1,
      name: "AUSTRALIAN GRAND PRIX",
      driver: "MONO DOTTALE >",
      // ВСТАВЬТЕ ФОТО ДЛЯ ЭТОЙ ТРАССЫ:
      // photo: australianGP
      photo: null, // Замените null на импортированную фотографию
    },
    {
      id: 2,
      name: "CHINESE GRAND PRIX",
      driver: "MONO DOTTALE >",
      // ВСТАВЬТЕ ФОТО ДЛЯ ЭТОЙ ТРАССЫ:
      // photo: chineseGP
      photo: null, // Замените null на импортированную фотографию
    },
    {
      id: 3,
      name: "JAPANESE GRAND PRIX",
      driver: "MONO DOTTALE >",
      // ВСТАВЬТЕ ФОТО ДЛЯ ЭТОЙ ТРАССЫ:
      // photo: japaneseGP
      photo: null, // Замените null на импортированную фотографию
    },
    {
      id: 4,
      name: "BAHRAIN GRAND PRIX",
      driver: "MONO DOTTALE >",
      // ВСТАВЬТЕ ФОТО ДЛЯ ЭТОЙ ТРАССЫ:
      // photo: bahrainGP
      photo: null, // Замените null на импортированную фотографию
    },
    {
      id: 5,
      name: "SAUDI ARABIAN GRAND PRIX",
      driver: "MONO DOTTALE >",
      // ВСТАВЬТЕ ФОТО ДЛЯ ЭТОЙ ТРАССЫ:
      // photo: saudiGP
      photo: null, // Замените null на импортированную фотографию
    },
    {
      id: 6,
      name: "SPANISH GRAND PRIX",
      driver: "MONO DOTTALE >",
      photo: null, // Дополнительные трассы
    },
    {
      id: 7,
      name: "MONACO GRAND PRIX",
      driver: "MONO DOTTALE >",
      photo: null, // Дополнительные трассы
    },
    {
      id: 8,
      name: "CANADIAN GRAND PRIX",
      driver: "MONO DOTTALE >",
      photo: null, // Дополнительные трассы
    },
    {
      id: 9,
      name: "BRITISH GRAND PRIX",
      driver: "MONO DOTTALE >",
      photo: null, // Дополнительные трассы
    },
  ];

  // Показываем 5 в закрытом виде, все в открытом
  const tracks = showAll ? allTracks : allTracks.slice(0, 5);

  return (
    <div className="tracci-container">
      <h1 className="tracci-title">TPacCbl</h1>

      <div className="tracks-grid">
        {tracks.map((track) => (
          <div key={track.id} className="track-card">
            <div className="track-square">
              {/* ==================== */}
              {/* МЕСТО ДЛЯ ФОТО ТРАССЫ */}
              {/* ==================== */}
              <div className="track-image">
                {track.photo ? (
                  // Если фото добавлено - показываем фото
                  <img
                    src={track.photo}
                    alt={track.name}
                    className="track-photo"
                  />
                ) : (
                  // Если фото не добавлено - показываем заглушку
                  <div className="track-image-placeholder">
                    <span>Фото трассы</span>
                  </div>
                )}
              </div>

              <div className="track-text">
                <h3 className="track-name">{track.name}</h3>
                <p className="track-driver">{track.driver}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        {!showAll ? (
          <button className="tracci-button" onClick={() => setShowAll(true)}>
            показать все трассы
          </button>
        ) : (
          <button className="tracci-button" onClick={() => setShowAll(false)}>
            свернуть
          </button>
        )}
      </div>
    </div>
  );
};

export default Tracci;

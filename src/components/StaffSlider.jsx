import { useState } from 'react';
import '../components.css';

const staffMembers = [
  {
    id: 1,
    name: "Имя Фамилия 1",
    position: "Должность 1",
    description: "Описание карьеры и достижений первого члена команды Ferrari.",
    image: "/ferrari-team-member.jpg",
  },
  {
    id: 2,
    name: "Имя Фамилия 2",
    position: "Должность 2",
    description: "Описание карьеры и достижений второго члена команды Ferrari.",
    image: "/ferrari-team-manager.jpg",
  },
  {
    id: 3,
    name: "Имя Фамилия 3",
    position: "Должность 3",
    description: "Описание карьеры и достижений третьего члена команды Ferrari.",
    image: "/ferrari-technical-director.jpg",
  },
  {
    id: 4,
    name: "Имя Фамилия 4",
    position: "Должность 4",
    description: "Описание карьеры и достижений четвертого члена команды Ferrari.",
    image: "/ferrari-team-principal.jpg",
  },
  {
    id: 5,
    name: "Имя Фамилия 5",
    position: "Должность 5",
    description: "Описание карьеры и достижений пятого члена команды Ferrari.",
    image: "/ferrari-race-engineer.jpg",
  },
  {
    id: 6,
    name: "Имя Фамилия 6",
    position: "Должность 6",
    description: "Описание карьеры и достижений шестого члена команды Ferrari.",
    image: "/ferrari-strategy-director.jpg",
  },
];

function ChevronLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function FerrariStaffSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? staffMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === staffMembers.length - 1 ? 0 : prev + 1));
  };

  const currentMember = staffMembers[currentIndex];

  return (
    <section className="staff-slider">
      {/* Фоновое изображение */}
      <div className="staff-background"></div>
      
      <div className="container">
        <h2 className="title">КЛЮЧЕВЫЕ ФИГУРЫ ШТАБА FERRARI</h2>

        <div className="slider-wrapper">
          <div className="slider-content">
            <div className="main-content">
              <div className="member-card">
                <div className="image-container">
                  <img
                    src={currentMember.image}
                    alt={currentMember.name}
                    className="member-image"
                  />
                  <div className="image-overlay"></div>
                </div>

                <div className="member-info">
                  <h3 className="member-name">{currentMember.name}</h3>
                  <p className="member-position">{currentMember.position}</p>
                  <p className="member-description">{currentMember.description}</p>
                </div>
              </div>

              {/* Навигация с цифрами справа */}
              <div className="side-navigation">
                <button
                  onClick={handlePrevious}
                  className="nav-button"
                  aria-label="Предыдущий"
                >
                  <ChevronLeftIcon />
                </button>

                {/* Цифровая индикация */}
                <div className="slide-counter">
                  <span className="current-slide">{currentIndex + 1}</span>
                  <span className="counter-divider">/</span>
                  <span className="total-slides">{staffMembers.length}</span>
                </div>

                <button
                  onClick={handleNext}
                  className="nav-button"
                  aria-label="Следующий"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
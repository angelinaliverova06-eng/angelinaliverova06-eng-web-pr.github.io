import { useState } from 'react';
import '../components.css';

const staffMembers = [
  {
    id: 1,
    name: "Джон Элканн",
    position: "Президент",
    description: "Хранитель наследия и стратег. Как председатель материнской группы Stellantis и представитель семьи Аньелли, Элканн — главный страж бренда Ferrari в целом, включая дорожные автомобили и гоночную команду. Его роль — стратегическое видение, финансовые решения и назначение ключевых руководителей. Его главная задача — обеспечить, чтобы Ferrari как компания и как команда Формулы-1 оставались сильными, устойчивыми и соответствовали легендарному статусу.",
    image: "/фото/ключевые фигуры/john president.jpg",
  },
  {
    id: 2,
    name: "Фредерик Вассёр",
    position: "Руководитель команды",
    description: "Практический лидер и «спаситель» операционной деятельности. Его роль — быть публичным лицом команды, принимать финальные тактические решения (например, пит-стопы, стратегии) и выстраивать чёткую управленческую вертикаль. Для Ferrari он — человек, который должен привнести стабильность, рациональность и холодный расчёт в эмоциональную среду команды. От него ждут, что он построит машину для победы не только на трассе, но и на уровне управления.",
    image: "/фото/ключевые фигуры/frederic team lead.jpeg",
  },
  {
    id: 3,
    name: "Диего Иоверно",
    position: "Спортивный директор",
    description: "Операционный командующий на гонке. Его зона ответственности — всё, что происходит в гоночные выходные: логистика, взаимодействие с FIA, работа гаража, контроль за соблюдением регламента. Он — правая рука Вассёра в «горячей» фазе. Для Ferrari, где давление максимально, а любая мелочь может стоить победы, роль Иоверно критически важна. Он должен обеспечивать безупречную работу механизма команды под пристальным вниманием всего мира.",
    image: "/фото/ключевые фигуры/diego sport director.jpeg",
  },
  {
    id: 4,
    name: "Лоик Серра",
    position: "Технический директор",
    description: "Главный архитектор производительности шасси. Он отвечает за интеграцию всех механических частей болида (аэродинамика, шасси, подвеска) в единое целое. После перехода из Mercedes на него возложены огромные надежды по усилению технического отдела. Для Ferrari Серра представляет собой приток свежих идей и опыта из команды-чемпиона. В нём видят ключ к тому, чтобы преодолеть инерцию и создать машину, которая сможет на равных бороться с Red Bull.",
    image: "/фото/ключевые фигуры/loik tech director.jpeg",
  },
  {
    id: 5,
    name: "Энрико Гуальтьери",
    position: "Начальник отдела силовых установок",
    description: "Хранитель «души» болида. Мотор Ferrari — это историческая гордость команды, её сердце. Гуальтьери возглавляет отдел двигателестроения в Маранелло. Его задача — не только создать мощный и эффективный гибридный двигатель (PU), но и сделать это в рамках жёсткого регламента «заморозки» разработок. Для Ferrari, которая всегда полагалась на мощь своего мотора, его работа — вопрос принципа и конкурентного преимущества.",
    image: "/фото/ключевые фигуры/enrico gualteri.jpeg",
  },
  {
    id: 6,
    name: "Энрико Кардил",
    position: "Начальник отдела шасси",
    description: "Создатель «скульптуры». Его отдел отвечает за физическую структуру болида, компоновку, вес, жёсткость и безопасность. Шасси — это основа, на которую «навешивается» вся аэродинамика. Для Ferrari, которая иногда страдала от неоптимальной концепции шасси, его роль — заложить максимально правильную и адаптируемую платформу. Он — фундаменталист, от работы которого зависит, насколько успешно команда сможет развивать машину в течение сезона.",
    image: "/фото/ключевые фигуры/enrico kardil.jpg",
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


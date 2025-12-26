import React from "react";
import "../components2.css";

const HeadScuderri = ({ isPartnersOpen, togglePartners }) => {
  // ========== СОСТОЯНИЯ КОМПОНЕНТА ==========
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isPartnersHovered, setIsPartnersHovered] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState("");
  const [submitStatus, setSubmitStatus] = React.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const modalRef = React.useRef(null);
  const animationRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  // ========== ЭФФЕКТЫ ==========
  React.useEffect(() => {
    const savedData = localStorage.getItem("ferrariContactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("ferrariContactForm", JSON.stringify(formData));
  }, [formData]);

  React.useEffect(() => {
    if (isModalOpen) {
      openModalAnimation();
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isModalOpen]);

  // ========== ОБРАБОТЧИКИ ФОРМЫ ==========
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus("");

    try {
      const response = await fetch("https://formcarry.com/s/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.code === 200) {
        setSubmitStatus("success");
        setSubmitMessage("Сообщение успешно отправлено!");
        setFormData({ name: "", email: "", message: "", phone: "" });
        localStorage.removeItem("ferrariContactForm");
        setTimeout(() => setIsModalOpen(false), 3000);
      } else {
        setSubmitStatus("error");
        setSubmitMessage("Ошибка при отправке. Попробуйте еще раз.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Сетевая ошибка. Проверьте подключение к интернету.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ========== АНИМАЦИИ ==========
  const openModalAnimation = () => {
    if (!modalRef.current || !buttonRef.current) return;

    const modal = modalRef.current;
    const button = buttonRef.current;
    const buttonRect = button.getBoundingClientRect();

    modal.style.opacity = "0";
    modal.style.transform = `translate(${buttonRect.left}px, ${buttonRect.top}px)`;
    modal.style.width = `${buttonRect.width}px`;
    modal.style.height = `${buttonRect.height}px`;

    let startTime = null;
    const duration = 500;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - percentage, 3);

      modal.style.opacity = easeOutCubic;
      modal.style.transform = `translate(0, 0)`;
      modal.style.width = `90%`;
      modal.style.height = `auto`;

      if (percentage < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ========== РЕНДЕРИНГ ==========
  return (
    <div className="head-scuderri">
      {/* ========== ВИДЕО ФОН ========== */}
      <div className="background-container">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src="/videos/ferrari-background.mp4" type="video/mp4" />
          <img src="/images/ferrari-bg.jpg" alt="Ferrari Background" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* ========== ЧЕРНАЯ ПОЛОСА НАВИГАЦИИ ========== */}
      <header className="header-black">
        <div className="container">
          <div className="logo">
            <img
              src="/logos/ferrari-logo.png"
              alt="Scuderia Ferrari"
              className="logo-img"
            />
          </div>

          <nav className="desktop-nav">
            <ul className="nav-list">
              <li className="nav-item">Главная</li>
              <li className="nav-item">Достижения</li>
              <li className="nav-item">Болид</li>
              <li className="nav-item">Пилоты</li>
              <li className="nav-item">Трассы</li>
              <li className="nav-item">Новости</li>

              {/* Пункт Партнеры с выпадающим меню при наведении */}
              <li
                className="nav-item partners-item"
                onMouseEnter={() => setIsPartnersHovered(true)}
                onMouseLeave={() => setIsPartnersHovered(false)}
              >
                ПАРТНЕРЫ <span className="arrow">▼</span>
                {/* Серое окошко с двумя пунктами */}
                <div
                  className={`partners-dropdown ${
                    isPartnersHovered ? "show" : ""
                  }`}
                >
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      Ключевые фигуры команды Феррари
                    </div>
                    <div className="dropdown-item">спонсоры</div>
                  </div>
                </div>
              </li>

              <li className="nav-item">Кью</li>
              <li className="nav-item">Контакты</li>
            </ul>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </div>
      </header>

      {/* ========== МОБИЛЬНОЕ МЕНЮ ========== */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">Главная</li>
            <li className="mobile-nav-item">Достижения</li>
            <li className="mobile-nav-item">Болид</li>
            <li className="mobile-nav-item">Пилоты</li>
            <li className="mobile-nav-item">Трассы</li>
            <li className="mobile-nav-item">Новости</li>
            <li className="mobile-nav-item">Партнеры</li>
            <li className="mobile-nav-item">Кью</li>
            <li className="mobile-nav-item">Контакты</li>
            <li
              className="mobile-nav-item contact-btn"
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              СВЯЗЬ С КОМАНДОЙ
            </li>
          </ul>
        </div>
      </div>

      {/* ========== ОСНОВНОЕ СОДЕРЖИМОЕ ========== */}
      <main className="main-content">
        <div className="container">
          <h1 className="main-title">Scuderia Ferrari</h1>

          <div className="main-text">
            <p className="text-line">ФЕРРАРИ – ЭТО БОЛЬШЕ, ЧЕМ ПРОСТО ГОНКИ,</p>
            <p className="text-line">ЭТО ИТАЛЬЯНСКАЯ ЛЕГЕНДА НА КОЛЕСАХ.</p>
          </div>

          {/* Желтая закругленная кнопка */}
          <button
            ref={buttonRef}
            className="contact-button-yellow"
            onClick={() => setIsModalOpen(true)}
          >
            Связь с командой
          </button>

          {/* Декоративные элементы Vantage */}
          <div className="vantage-elements">
            <div className="vantage-text">V vantage</div>
            <div className="vantage-text">V vantage</div>
          </div>
        </div>
      </main>

      {/* ========== МОДАЛЬНОЕ ОКНО ФОРМЫ ========== */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            ref={modalRef}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>

            <h2 className="form-title">СВЯЗЬ С КОМАНДОЙ</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Ваше имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="example@mail.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Сообщение *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Напишите ваше сообщение..."
                  rows="4"
                />
              </div>

              {submitMessage && (
                <div className={`submit-message ${submitStatus}`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Отправка...
                  </>
                ) : (
                  "Отправить"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadScuderri;

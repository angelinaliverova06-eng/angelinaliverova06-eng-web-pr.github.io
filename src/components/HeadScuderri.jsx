"use client";

import { useEffect, useRef, useState } from "react";
import "../components2.css";

const FerrariHeader = () => {
  // ========== СОСТОЯНИЯ КОМПОНЕНТА ==========
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPartnersHovered, setIsPartnersHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // ← ДОБАВЛЕНО: состояние скролла

  const modalRef = useRef(null);
  const animationRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const lastScrollY = useRef(0);

  // ========== ЭФФЕКТЫ ==========
  useEffect(() => {
    const savedData = localStorage.getItem("ferrariContactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }

    const urlParams = new URLSearchParams(window.location.search);
    const modalParam = urlParams.get("modal");
    if (modalParam === "contact") {
      setIsModalOpen(true);
    }

    // ========== ОБРАБОТКА СКРОЛЛА ДЛЯ ДЕСКТОПНОЙ НАВИГАЦИИ ==========
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("ferrariContactForm", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (isModalOpen) {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("modal", "contact");
      window.history.pushState({}, "", currentUrl.toString());
      openModalAnimation();
    } else {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete("modal");
      window.history.pushState({}, "", currentUrl.toString());
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handlePopState = () => {
      const currentUrl = new URL(window.location.href);
      const modalParam = currentUrl.searchParams.get("modal");
      setIsModalOpen(modalParam === "contact");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Закрытие мобильного меню по клику вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu-btn")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);
      formDataToSend.append(
        "_subject",
        "Новое сообщение с сайта Scuderia Ferrari"
      );
      formDataToSend.append("_replyto", formData.email);

      const response = await fetch("https://formcarry.com/s/e2PU58utTxG", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      console.log("Formcarry response:", result);

      if (result.code === 200 || result.status === "success") {
        setSubmitStatus("success");
        setSubmitMessage(
          "Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время."
        );
        setFormData({ name: "", email: "", message: "", phone: "" });
        localStorage.removeItem("ferrariContactForm");

        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitMessage("");
          setSubmitStatus("");
        }, 4000);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message ||
            "Ошибка при отправке. Пожалуйста, попробуйте еще раз."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
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
    modal.style.transform = `translate(${buttonRect.left}px, ${buttonRect.top}px) scale(0.1)`;

    let startTime = null;
    const duration = 600;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

      modal.style.opacity = String(easeOutQuart);
      modal.style.transform = `translate(0, 0) scale(${easeOutQuart})`;

      if (percentage < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitMessage("");
    setSubmitStatus("");
  };

  // ========== РЕНДЕРИНГ ==========
  return (
    <div className="head-scuderri">
      {/* ========== ВИДЕО ФОН ========== */}
      <div className="video-background-wrapper">
        <video
          ref={videoRef}
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/фото/video.mp4" type="video/mp4" />
          <source src="/фото/video.webm" type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* ========== КНОПКА МОБИЛЬНОГО МЕНЮ ========== */}
      <button
        className={`mobile-menu-btn ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <span className="menu-line line1"></span>
        <span className="menu-line line2"></span>
        <span className="menu-line line3"></span>
      </button>

      {/* ========== ЧЕРНАЯ ПОЛОСА НАВИГАЦИИ ========== */}
      <header className={`header-black ${isScrolled ? "hidden" : ""}`}>
        {" "}
        {/* ← ДОБАВЛЕН КЛАСС ДЛЯ СКРЫТИЯ */}
        <div className="container">
          <div className="logo">
            <img
              src="/фото/logo.png"
              alt="Scuderia Ferrari"
              className="logo-img"
            />
          </div>

          <nav className="desktop-nav">
            <ul className="nav-list">
              <li className="nav-item">ГЛАВНАЯ</li>
              <li className="nav-item">ДОСТИЖЕНИЯ</li>
              <li className="nav-item">БОЛИД SF-25</li>
              <li className="nav-item">ПИЛОТЫ</li>
              <li className="nav-item">ТРАССЫ</li>
              <li className="nav-item">НОВОСТИ</li>

              <li
                className="nav-item partners-item"
                onMouseEnter={() => setIsPartnersHovered(true)}
                onMouseLeave={() => setIsPartnersHovered(false)}
              >
                ПАРТНЁРЫ <span className="arrow">▼</span>
                <div
                  className={`partners-dropdown ${
                    isPartnersHovered ? "show" : ""
                  }`}
                >
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      КЛЮЧЕВЫЕ ФИГУРЫ ШТАБА ФЕРРАРИ
                    </div>
                    <div className="dropdown-item">СПОНСОРЫ</div>
                  </div>
                </div>
              </li>

              <li className="nav-item">Q&A</li>
              <li className="nav-item">КОНТАКТЫ</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ========== МОБИЛЬНОЕ МЕНЮ ========== */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        ref={mobileMenuRef}
      >
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            <li
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ГЛАВНАЯ
            </li>
            <li
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ДОСТИЖЕНИЯ
            </li>
            <li
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              БОЛИД SF-25
            </li>
            <li
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ПИЛОТЫ
            </li>
            <li
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ТРАССЫ
            </li>
            <li
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              НОВОСТИ
            </li>
            <li
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ПАРТНЁРЫ
            </li>
            <li
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Q&A
            </li>
            <li
              className="mobile-nav-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              КОНТАКТЫ
            </li>
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

      {/* ========== КОНТЕНТ НА ВИДЕО ========== */}
      <div className="content-on-video">
        <div className="container">
          <h1 className="main-title">Scuderia Ferrari</h1>

          <div className="main-text">
            <p className="text-line">ФЕРРАРИ – ЭТО БОЛЬШЕ, ЧЕМ ПРОСТО ГОНКИ,</p>
            <p className="text-line">ЭТО ИТАЛЬЯНСКАЯ ЛЕГЕНДА НА КОЛЁСАХ.</p>
          </div>

          <button
            ref={buttonRef}
            className="contact-button-yellow"
            onClick={() => setIsModalOpen(true)}
          >
            СВЯЗЬ С КОМАНДОЙ
          </button>
        </div>
      </div>

      {/* ========== МОДАЛЬНОЕ ОКНО ФОРМЫ ========== */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            ref={modalRef}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="form-title">СВЯЗЬ С КОМАНДОЙ</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">ВАШЕ ИМЯ</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">ВАШ ТЕЛЕФОН</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">ВАША ЭЛ.ПОЧТА</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">ВАШЕ СООБЩЕНИЕ</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
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
                    ОТПРАВКА...
                  </>
                ) : (
                  "СВЯЗАТЬСЯ С НАМИ"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FerrariHeader;

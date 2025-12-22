import React, { useState } from "react";
import "../components.css";

const HeadScuderri = () => {
  const [showForm, setShowForm] = useState(false);
  const [contactType, setContactType] = useState("general");

  const menuItems = [
    "Главная",
    "доставленная",
    "БОЛЬШЕ 8–26",
    "ПАЛОТЫ ТРЕСКИ",
    "НОВОСТИ",
    "ПАРТНЁРЫ",
    "ОБА",
    "КОНТАКТЫ",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация
    if (!formData.email.includes("@")) {
      alert("Введите корректный email");
      return;
    }

    try {
      // Отправка данных
      console.log("Отправка данных:", formData);

      // Имитация отправки
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Ваше сообщение отправлено команде Ferrari!");
      setShowForm(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Ошибка при отправке. Попробуйте еще раз.");
    }
  };

  return (
    <div className="head-scuderri">
      {/* Шапка с навигацией */}
      <div>
        <img
          src="фото/logo.png"
          alt="Ferrari Logo"
          width="66px"
          height="66px"
        />
      </div>

      <header className="scuderri-header">
        <div className="scuderri-header-container">
          <nav className="scuderri-desktop-nav">
            {menuItems.map((item, index) => (
              <div key={index} className="nav-item-wrapper">
                <a href="#" className="scuderri-nav-link">
                  {item}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/* Основной контент */}
      <main className="scuderri-main-content">
        <div className="scuderri-content-container">
          <div className="scuderri-title-section">
            <h2 className="scuderri-main-title">Scuderia Ferrari</h2>

            <div className="scuderri-slogan-section">
              <h2 className="scuderri-slogan-title">
                Феррари — это больше, чем просто гонки, это итальянская легенда
                на колесах.
              </h2>
            </div>
          </div>
        </div>
      </main>

      {/* кнопка с формой*/}
      <button className="ferrari-main-button" onClick={() => setShowForm(true)}>
        <span className="button-text">СВЯЗЬ С КОМАНДОЙ</span>
        <span className="button-icon">→</span>
      </button>

      {showForm && (
        <>
          <div className="modal-backdrop" onClick={() => setShowForm(false)} />
          <div className="ferrari-modal">
            <div className="ferrari-modal-header">
              <h2>
                <span className="ferrari-red">FERRARI</span> КОНТАКТНАЯ ФОРМА
              </h2>
              <button
                className="ferrari-close-btn"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>
            </div>

            <div className="ferrari-modal-body">
              <div className="contact-type-selector">
                <button
                  className={`type-btn ${
                    contactType === "general" ? "active" : ""
                  }`}
                  onClick={() => setContactType("general")}
                >
                  Общий запрос
                </button>
                <button
                  className={`type-btn ${
                    contactType === "sponsorship" ? "active" : ""
                  }`}
                  onClick={() => setContactType("sponsorship")}
                >
                  Спонсорство
                </button>
                <button
                  className={`type-btn ${
                    contactType === "media" ? "active" : ""
                  }`}
                  onClick={() => setContactType("media")}
                >
                  Медиа
                </button>
              </div>

              <form onSubmit={handleSubmit} className="ferrari-form">
                <div className="form-row">
                  <div className="form-col">
                    <label>Имя *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-col">
                    <label>Фамилия *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-col">
                    <label>Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (XXX) XXX-XX-XX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Тема *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="О чем вы хотите связаться?"
                  />
                </div>

                <div className="form-group">
                  <label>Сообщение *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Опишите ваш запрос подробно..."
                  />
                </div>

                <div className="form-footer">
                  <button type="submit" className="submit-btn">
                    ОТПРАВИТЬ ЗАПРОС
                  </button>
                  <p className="form-note">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных
                    данных
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HeadScuderri;

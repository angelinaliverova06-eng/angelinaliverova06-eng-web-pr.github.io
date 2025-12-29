"use client";

import { useEffect, useState } from "react";
import "../components6.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("ferrariContactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ferrariContactForm", JSON.stringify(formData));
  }, [formData]);

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

      if (result.code === 200 || result.status === "success") {
        setSubmitStatus("success");
        setSubmitMessage(
          "Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время."
        );
        setFormData({ name: "", email: "", message: "", phone: "" });
        localStorage.removeItem("ferrariContactForm");

        setTimeout(() => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-ferrari">
      <div className="footer-container">
        <div className="footer-desktop">
          <h2 className="footer-title">оставить обратную связь о команде</h2>

          <div className="footer-content">
            <div className="footer-left">
              <img
                src="/фото/team.jpg"
                alt="Ferrari Team"
                className="team-photo"
              />
            </div>

            <div className="footer-right">
              <form onSubmit={handleSubmit} className="footer-form">
                <div className="footer-form-group">
                  <label htmlFor="footer-name">ваше имя</label>
                  <input
                    type="text"
                    id="footer-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="footer-form-group">
                  <label htmlFor="footer-phone">ваш телефон</label>
                  <input
                    type="tel"
                    id="footer-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="footer-form-group">
                  <label htmlFor="footer-email">ваша эл.почта</label>
                  <input
                    type="email"
                    id="footer-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="footer-form-group">
                  <label htmlFor="footer-message">ваше сообщение</label>
                  <textarea
                    id="footer-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                  />
                </div>

                {submitMessage && (
                  <div className={`footer-submit-message ${submitStatus}`}>
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="footer-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="footer-spinner"></span>
                      ОТПРАВКА...
                    </>
                  ) : (
                    "свяжитесь с нами"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-mobile">
          <h className="footer-mobile-title">
            <span className="footer-mobile-title-line">
              оставить<br></br>обратную связь<br></br>o команде
            </span>{" "}
          </h>

          <form onSubmit={handleSubmit} className="footer-mobile-form">
            <div className="footer-form-group">
              <label htmlFor="mobile-name">ваше имя</label>
              <input
                type="text"
                id="mobile-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="footer-form-group">
              <label htmlFor="mobile-phone">ваш телефон</label>
              <input
                type="tel"
                id="mobile-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="footer-form-group">
              <label htmlFor="mobile-email">ваша эл.почта</label>
              <input
                type="email"
                id="mobile-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="footer-form-group">
              <label htmlFor="mobile-message">ваше сообщение</label>
              <textarea
                id="mobile-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                rows={4}
              />
            </div>

            {submitMessage && (
              <div className={`footer-submit-message ${submitStatus}`}>
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              className="footer-mobile-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="footer-spinner"></span>
                  ОТПРАВКА...
                </>
              ) : (
                "свяжитесь с нами"
              )}
            </button>
          </form>
        </div>

        <div className="footer-car-container">
          <div className="footer-car-overlay"></div>

          <div className="footer-car">
            <img
              src="/фото/bolide.png"
              alt="Ferrari F1 Car"
              className="car-image"
            />
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© 2025 SCUDERIA FERRARI</p>
            <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
          </div>

          <div className="footer-social">
            <img src="/фото/footerfoto.png" alt="Scuderia Ferrari" />
          </div>

          <button
            className="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            к началу ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

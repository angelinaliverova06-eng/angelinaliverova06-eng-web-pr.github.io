import React from "react";
import "../components4.css";

const News = () => {
  return (
    <div className="news-container">
      <h1 className="news-title">НОВОСТИ</h1>

      <div className="news-grid">
        {/* Первая строка: 1/3 + 2/3 */}
        <div className="news-card">
          <div className="image-container">
            <div className="red-overlay"></div>
            <button className="more-button-overlay">БОЛЬШЕ</button>
            {/* Добавьте свое фото здесь */}
            {/* <img src="your-photo.jpg" alt="Новость 1" className="news-image" /> */}
          </div>
        </div>

        <div className="news-card">
          <div className="image-container">
            <div className="red-overlay"></div>
            <button className="more-button-overlay">БОЛЬШЕ</button>
            {/* <img src="your-photo.jpg" alt="Новость 2" className="news-image" /> */}
          </div>
        </div>

        {/* Вторая строка: 2/3 + 1/3 */}
        <div className="news-card">
          <div className="image-container">
            <div className="red-overlay"></div>
            <button className="more-button-overlay">БОЛЬШЕ</button>
            {/* <img src="your-photo.jpg" alt="Новость 3" className="news-image" /> */}
          </div>
        </div>

        <div className="news-card">
          <div className="image-container">
            <div className="red-overlay"></div>
            <button className="more-button-overlay">БОЛЬШЕ</button>
            {/* <img src="your-photo.jpg" alt="Новость 4" className="news-image" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

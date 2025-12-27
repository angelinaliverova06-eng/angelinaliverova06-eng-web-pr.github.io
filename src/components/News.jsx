// src/components/News.jsx
import React from "react";
import "../components4.css"; // Создадим отдельный CSS файл

const newsItems = [
  {
    id: 1,
    title: "БЛАГОДАРНОСТЬ КОМАНДЕ И ТИФОЗИ",
    size: "small",
  },
  {
    id: 2,
    title: 'ЛЬЮИС: "ОГРОМНОЕ ЖЕЛАНИЕ РАСТИ"',
    size: "large",
  },
  {
    id: 3,
    title: 'ШАРЛЬ: "Я БУДУ СРАЖАТЬСЯ ДО ПОСЛЕДНЕГО ПОВОРОТА"',
    size: "large",
  },
  {
    id: 4,
    title: "SCUDERIA FERRARI ПОДПИСАЛА КОНТРАКТ С PHILIP MORRIS INT.",
    size: "small",
  },
];

const News = () => {
  const handleReadMore = (id) => {
    console.log(`Read more clicked for news item ${id}`);
    // Здесь можно добавить навигацию или другое действие
  };

  return (
    <div className="news-container">
      {/* Заголовок */}
      <h1 className="news-title">НОВОСТИ</h1>

      {/* Сетка новостей */}
      <div className="news-grid">
        {/* Первая карточка - левая верхняя */}
        <div className="news-card news-card-small news-card-1">
          <div className="news-overlay"></div>
          <h2 className="news-card-title">{newsItems[0].title}</h2>
          <button
            onClick={() => handleReadMore(newsItems[0].id)}
            className="news-button"
          >
            БОЛЬШЕ &gt;
          </button>
        </div>

        {/* Вторая карточка - правая верхняя */}
        <div className="news-card news-card-small news-card-2">
          <div className="news-overlay"></div>
          <h2 className="news-card-title">{newsItems[1].title}</h2>
          <button
            onClick={() => handleReadMore(newsItems[1].id)}
            className="news-button"
          >
            БОЛЬШЕ &gt;
          </button>
        </div>

        {/* Третья карточка - левая нижняя (большая) */}
        <div className="news-card news-card-large news-card-3">
          <div className="news-overlay"></div>
          <h2 className="news-card-title">{newsItems[2].title}</h2>
          <button
            onClick={() => handleReadMore(newsItems[2].id)}
            className="news-button"
          >
            БОЛЬШЕ &gt;
          </button>
        </div>

        {/* Четвёртая карточка - правая нижняя */}
        <div className="news-card news-card-medium news-card-4">
          <div className="news-overlay"></div>
          <h2 className="news-card-title">{newsItems[3].title}</h2>
          <button
            onClick={() => handleReadMore(newsItems[3].id)}
            className="news-button"
          >
            БОЛЬШЕ &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
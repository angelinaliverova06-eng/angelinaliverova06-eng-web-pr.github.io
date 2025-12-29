
import React from "react";
import "../components4.css"; 

const newsItems = [
  {
    id: 1,
    title: "БЛАГОДАРНОСТЬ КОМАНДЕ И ТИФОЗИ",
    size: "small",
    image: "/фото/news1.png",
  },
  {
    id: 2,
    title: 'ЛЬЮИС: "ОГРОМНОЕ ЖЕЛАНИЕ РАСТИ"',
    size: "large",
    image: "/фото/news2.png",
  },
  {
    id: 3,
    title: 'ШАРЛЬ: "Я БУДУ СРАЖАТЬСЯ ДО ПОСЛЕДНЕГО ПОВОРОТА"',
    size: "large",
    image: "/фото/news3.png",
  },
  {
    id: 4,
    title: "SCUDERIA FERRARI ПОДПИСАЛА КОНТРАКТ С PHILIP MORRIS INT.",
    size: "small",
    image: "/фото/news4.png",
  },
];

const News = () => {
  const handleReadMore = (id) => {
    console.log(`Read more clicked for news item ${id}`);
    
  };

  return (
    <div className="news-container">
      
      <h1 className="news-title">НОВОСТИ</h1>

   
      <div className="news-grid">
  
        <div className="news-card news-card-1 news-card-small">
          <div className="news-card-red-bg"></div>
          <div
            className="news-card-image image-1"
            style={{ backgroundImage: `url(${newsItems[0].image})` }}
          ></div>
          <div className="news-card-content">
            <h2 className="news-card-title">{newsItems[0].title}</h2>
            <div className="news-button-container">
              <button
                onClick={() => handleReadMore(newsItems[0].id)}
                className="news-button"
              >
                БОЛЬШЕ &gt;
              </button>
            </div>
          </div>
        </div>

       
        <div className="news-card news-card-2 news-card-large">
          <div className="news-card-red-bg"></div>
          <div
            className="news-card-image image-2"
            style={{ backgroundImage: `url(${newsItems[1].image})` }}
          ></div>
          <div className="news-card-content">
            <h2 className="news-card-title">{newsItems[1].title}</h2>
            <div className="news-button-container">
              <button
                onClick={() => handleReadMore(newsItems[1].id)}
                className="news-button"
              >
                БОЛЬШЕ &gt;
              </button>
            </div>
          </div>
        </div>

       
        <div className="news-card news-card-3 news-card-large">
          <div className="news-card-red-bg"></div>
          <div
            className="news-card-image image-3"
            style={{ backgroundImage: `url(${newsItems[2].image})` }}
          ></div>
          <div className="news-card-content">
            <h2 className="news-card-title">{newsItems[2].title}</h2>
            <div className="news-button-container">
              <button
                onClick={() => handleReadMore(newsItems[2].id)}
                className="news-button"
              >
                БОЛЬШЕ &gt;
              </button>
            </div>
          </div>
        </div>

       
        <div className="news-card news-card-4 news-card-small">
          <div className="news-card-red-bg"></div>
          <div
            className="news-card-image image-4"
            style={{ backgroundImage: `url(${newsItems[3].image})` }}
          ></div>
          <div className="news-card-content">
            <h2 className="news-card-title">{newsItems[3].title}</h2>
            <div className="news-button-container">
              <button
                onClick={() => handleReadMore(newsItems[3].id)}
                className="news-button"
              >
                БОЛЬШЕ &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

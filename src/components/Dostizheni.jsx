import React from "react";
import "../components3.css";

const Dostizheni = () => {
  return (
    <div className="dostizheni-container">
      <h1 className="main-title">#ДОСТИЖЕНИЯ</h1>

      <div className="description-section">
        <div className="form-title">Форма 1</div>
        <p className="description-text">
          — НЕ ПРОСТО КОМАНДА «ВСЕМУЛЬТ» В ЦЕЛАХ ЭПОВ (1 БОЛУСЛОВНЫЙ
          РОКОРДСМЕНЦИРОВОГО ШППОСПОРТА).
          <br />
          Легендарная скудерая обладают самым внешневысоким опытом доступных и в
          целом вычислительная, который продолжает пополняться уже более семи
          десятилетий.
        </p>
      </div>

      <div className="achievements-grid">
        {/* Ряд 1 */}
        <div className="achievement-item">
          <div className="images-overlay">
            <div className="f-letter"></div>
            <div className="pictogram"></div>
          </div>
          <div className="achievement-text">
            <h3 className="achievement-number">11</h3>
            <ul>
              <li>
                участие с самого первого сезона чемпионата мира в 1960 году
              </li>
              <li>нашельшее количество полюса - более 250</li>
            </ul>
          </div>
        </div>

        <div className="achievement-item">
          <div className="images-overlay">
            <div className="f-letter"></div>
            <div className="pictogram"></div>
          </div>
          <div className="achievement-text">
            <h3 className="achievement-number">12</h3>
            <ul>
              <li>ставят более чем в это гранту</li>
              <li>изучение конструкторов – абсолютный рекорд</li>
            </ul>
          </div>
        </div>

        {/* Ряд 2 */}
        <div className="achievement-item">
          <div className="images-overlay">
            <div className="f-letter"></div>
            <div className="pictogram"></div>
          </div>
          <div className="achievement-text">
            <h3 className="achievement-number">13</h3>
            <ul>
              <li>нашельшее количество поезда в гонках - более 245</li>
            </ul>
          </div>
        </div>

        <div className="achievement-item">
          <div className="images-overlay">
            <div className="f-letter"></div>
            <div className="pictogram"></div>
          </div>
          <div className="achievement-text">
            <h3 className="achievement-number">14</h3>
            <ul>
              <li>в пштуков чемпионатера и пилотов – абсолютный рекорд</li>
            </ul>
          </div>
        </div>

        {/* Ряд 3 */}
        <div className="achievement-item">
          <div className="images-overlay">
            <div className="f-letter"></div>
            <div className="pictogram"></div>
          </div>
          <div className="achievement-text">
            <h3 className="achievement-number">15</h3>
            <ul>
              <li>нашельшее количество подъемов - более 800</li>
            </ul>
          </div>
        </div>

        <div className="achievement-item">
          <div className="images-overlay">
            <div className="f-letter"></div>
            <div className="pictogram"></div>
          </div>
          <div className="achievement-text">
            <h3 className="achievement-number">16</h3>
            <ul>
              <li>
                единственная команда для которого можно относиться к сущности
                вечера
              </li>
            </ul>
          </div>
        </div>

        {/* Ряд 4 - пустые блоки для завершения сетки */}
        <div className="achievement-item empty">
          <div className="images-overlay">
            <div className="f-letter"></div>
            <div className="pictogram"></div>
          </div>
          <div className="achievement-text"></div>
        </div>

        <div className="achievement-item empty">
          <div className="images-overlay">
            <div className="f-letter"></div>
            <div className="pictogram"></div>
          </div>
          <div className="achievement-text"></div>
        </div>
      </div>
    </div>
  );
};

export default Dostizheni;

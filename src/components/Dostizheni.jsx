import "../components3.css";

const Dostizheni = () => {
  return (
    <div className="dostizheni-container">
      <h1 className="main-dostizheni">достижения</h1>

      <p className="description-text">
        феррари — не просто команда «формулы-1», а целая эпоха и безусловный
        рекордсмен мирового автоспорта. легендарная скудерия обладает самым
        внушительным списком достижений в истории чемпионата, который продолжает
        пополняться уже более семи десятилетий.
      </p>

      <div className="achievements-grid">
        <div className="achievement-item">
          <div className="icon-wrapper">
            <div className="f-letter">F</div>
            <div className="pictogram">📅</div>
          </div>
          <p className="achievement-text">
            участие с самого первого сезона чемпионата мира в 1950 году
          </p>
        </div>

        <div className="achievement-item">
          <div className="icon-wrapper">
            <div className="f-letter">F</div>
            <div className="pictogram">🏁</div>
          </div>
          <p className="achievement-text">старт более чем в 1070 гран-при</p>
        </div>

        <div className="achievement-item">
          <div className="icon-wrapper">
            <div className="f-letter">F</div>
            <div className="pictogram">🏆</div>
          </div>
          <p className="achievement-text">
            наибольшее количество побед в гонках - более 245
          </p>
        </div>

        <div className="achievement-item">
          <div className="icon-wrapper">
            <div className="f-letter">F</div>
            <div className="pictogram">🎯</div>
          </div>
          <p className="achievement-text">
            наибольшее количество подиумов - более 800
          </p>
        </div>

        <div className="achievement-item">
          <div className="icon-wrapper">
            <div className="f-letter">F</div>
            <div className="pictogram">🏅</div>
          </div>
          <p className="achievement-text">
            наибольшее количество полюсов - более 250
          </p>
        </div>

        <div className="achievement-item">
          <div className="icon-wrapper">
            <div className="f-letter">F</div>
            <div className="pictogram">💎</div>
          </div>
          <p className="achievement-text">
            16 кубков конструкторов – абсолютный рекорд
          </p>
        </div>

        <div className="achievement-item">
          <div className="icon-wrapper">
            <div className="f-letter">F</div>
            <div className="pictogram">🏆</div>
          </div>
          <p className="achievement-text">
            15 титулов чемпионов среди пилотов – абсолютный рекорд
          </p>
        </div>

        <div className="achievement-item">
          <div className="icon-wrapper">
            <div className="f-letter">F</div>
            <div className="pictogram">🔧</div>
          </div>
          <p className="achievement-text">
            единственная команда, для которой гонки – это основа и сущность
            бренда
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dostizheni;

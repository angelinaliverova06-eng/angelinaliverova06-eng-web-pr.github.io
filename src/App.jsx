import React from "react";
import HeadScuderri from "./components/HeadScuderri";
import Dostizheni from "./components/Dostizheni";
import News from './components/News';
import Tracci from './components/Tracci';
import CarInfo from "./components/CarInfo";
import DriversCarousel from "./components/DriversCarousel";
import SponsorsSlider from "./components/SponsorsSlider";
import FAQ from "./components/FAQ";
import StaffSlider from "./components/StaffSlider"; 
import "./index.css";
import "./components.css"
import "./components2.css"
import "./components3.css"
import "./components4.css"
import "./components5.css"

const drivers = [
  {
    name: "Льюис Хэмилтон",
    quote: "часть меня всегда лелеяла мечту участвовать в гонках в красном. Я был невероятно счастлив, осознав это",
    bio: "Льюису было всего восемь лет, когда он начал заниматься картингом, сразу же продемонстрировав свой исключительный талант.В 2003 году он стал чемпионом Великобритании в Формуле-Рено, одержав десять побед в 15 гонках, и стал одной из самых ярких звезд британского автоспорта. В 2007 году он дебютировал в Формуле-1 в составе McLaren, объединившись с чемпионом мира Фернандо Алонсо. Его первый сезон был выдающимся: он одержал четыре победы, шесть поул-позиций и девять раз подряд финишировал на подиуме, заняв второе место в личном зачете пилотов, на одно очко отстав от победителя, Кими Райкконена из Ferrari. В 2008 году он впервые стал чемпионом мира, приложив последние усилия на финальном этапе в Бразилии. В то время он был самым молодым чемпионом мира в истории Формулы-1. В 2013 году он перешел из McLaren в команду Mercedes и с 2014 по 2021 год был доминирующей силой в спорте, завоевав еще шесть титулов в 2014, 2015, 2017, 2018, 2019 и 2020 годах, что сделало его совместным рекордсменом с Михаэлем Шумахером по семь титулов у каждого.По состоянию на конец сезона 2024 года на счету Льюиса Хэмилтона 105 побед и 100 поул-позиций, а также целый ряд других рекордов, которые, похоже, сохранятся надолго. Он по праву считается одним из величайших гонщиков всех времен и знаменит как на гонках, так и вне их.",
    photo: "../public/фото/ключевые фигуры/hamilton.jpg" // Добавь фото
  },
  {
    name: "Шарль Леклер", 
    quote: "с тех пор как я был ребенком, моей самой заветной мечтой было научиться водить красную машину, и мне удалось воплотить ее в жизнь",
    bio: "Он начал участвовать в картинговых гонках в возрасте пяти лет. В 2014 году он дебютировал в составе команды Fortec на одноместном автомобиле, заняв второе место в альпийском чемпионате. В 2016 году Чарльз стал членом Академии пилотов Ferrari и выиграл серию GP3 с командой ART Grand Prix. В следующем году он с первой попытки выиграл чемпионат Формулы-2. В 2018 году он дебютировал в Формуле-1. В 2019 году он стал напарником Себастьяна Феттеля в составе пилотов Scuderia Ferrari. Незадолго до Рождества Scuderia Ferrari объявила, что продлила его контракт до сезона 2024 года включительно.",
    photo: "../public/фото/ключевые фигуры/leclerc.jpg" // Добавь фото
  },
  {
    name: "Чжоу Гуаньюй",
    quote: "Я думаю, что для меня я оставил достаточно наследия",
    bio: "Чжоу Гуаньюй — первый китайский пилот в истории Формулы 1. Чжоу начал карьеру в 8 лет в шанхайском картинге. Его талант быстро стал очевиден, и в 12 лет он переехал в Шеффилд, Великобритания, чтобы продолжить обучение в более конкурентной среде европейского автоспорта. Этот ранний переезд, без семьи, закалил его характер и позволил полностью погрузиться в гоночную культуру. Чжоу прошёл классический путь европейской «формульной лестницы», стабильно прогрессируя и привлекая внимание команд Ф1. Чжоу продолжает выступать за команду, которая в 2024 году носит название Stake F1 Team Kick Sauber. Он является лидером и опытным гонщиком в коллективе, а его будущее может быть связано с переходом команды под заводской статус Audi с 2026 года.",
    photo: "../public/фото/ключевые фигуры/Guanyu Zhou.jpg" // Добавь фото
  },
];

function App() {
  const [isPartnersOpen, setIsPartnersOpen] = React.useState(false);

  const togglePartners = () => {
    setIsPartnersOpen(!isPartnersOpen);
  };

  return (
    <div className="App">
      <HeadScuderri
        isPartnersOpen={isPartnersOpen}
        togglePartners={togglePartners}
      />
      <div className="App">
        <Dostizheni />
      </div>

    <div className="App">      
      <CarInfo backgroundImage="../public/фото/bolide-cut.png" />
    </div>

      <DriversCarousel drivers={drivers} />

      <div className="tracci-selection">
        <Tracci />
      </div>
    
      <div className="news-section">
        <News />
      </div>
  
      <div className="staff-section">
        <StaffSlider />
      </div>

      <section className="sponsors-section">
        <h2>Спонсоры</h2>
        <SponsorsSlider />
      </section>

      <div className="faq-section">
        <FAQ />
      </div>
    </div>
  );
}

export default App;

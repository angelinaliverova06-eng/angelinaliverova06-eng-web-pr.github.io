import { useEffect, useState } from "react"
import "../components.css" 
import ferrariLogo from '../../public/фото/спонсоры феррари/brembo.png';


const sponsors = [
  <img src={ferrariLogo} alt="Ferrari" />,
  { name: "Verisure", logo: "/спонсоры/verisure.png" },
  { name: "Shell", logo: "/спонсоры/shell.png" },
  { name: "ZCG", logo: "/спонсоры/zcg.png" },
  { name: "IBM", logo: "/спонсоры/ibm.png" },
  { name: "Ecopista", logo: "/спонсоры/ecopista.png" },
  { name: "UniCredit", logo: "/спонсоры/unicredit.png" },
  { name: "Puma", logo: "/спонсоры/puma.png" },
  { name: "Girard Perregaux", logo: "/спонсоры/girard-perregaux.png" },
  { name: "VGW", logo: "/спонсоры/vgw.png" },
  { name: "SKF", logo: "/спонсоры/skf.png" },
  { name: "Garrett", logo: "/спонсоры/garrett.png" },
]

export function SponsorsMarquee() {
  const [isPaused, setIsPaused] = useState(false)
  
  // Split sponsors into two rows
  const row1 = sponsors.slice(0, 6)
  const row2 = sponsors.slice(6, 12)

  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">ОФИЦИАЛЬНЫЕ ПАРТНЕРЫ</h2>
      
      <div 
        className="slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Top Row - Scrolling Left */}
        <div className={`slider-track ${isPaused ? 'paused' : 'slider-left'}`}>
          {[...row1, ...row1, ...row1].map((sponsor, i) => (
            <div
              key={`row1-${i}`}
              className="sponsor-item"
            >
              <div className="sponsor-logo-container">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-logo"
                  loading="lazy"
                />
              </div>
              <div className="sponsor-name">{sponsor.name}</div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Scrolling Right */}
        <div className={`slider-track ${isPaused ? 'paused' : 'slider-right'}`}>
          {[...row2, ...row2, ...row2].map((sponsor, i) => (
            <div
              key={`row2-${i}`}
              className="sponsor-item"
            >
              <div className="sponsor-logo-container">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-logo"
                  loading="lazy"
                />
              </div>
              <div className="sponsor-name">{sponsor.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
import { useState } from "react"
import "../components.css" 

const sponsors = [
  {logo: "/фото/спонсоры феррари/brembo.png" },
  {logo: "/фото/спонсоры феррари/shell.png" },
  {logo: "/фото/спонсоры феррари/zcg.png" },
  {logo: "/фото/спонсоры феррари/ibm.png" },
  {logo: "/фото/спонсоры феррари/unicredit.png" },
  {logo: "/фото/спонсоры феррари/vgw.png" },
  {logo: "/фото/спонсоры феррари/skf.png" },
  {logo: "/фото/спонсоры феррари/garett.png" },
  {logo: "/фото/спонсоры феррари/111r.png" },
  {logo: "/фото/спонсоры феррари/ambipar.png" },
  {logo: "/фото/спонсоры феррари/aon.png" },
  {logo: "/фото/спонсоры феррари/aws.png" },
  {logo: "/фото/спонсоры феррари/bell.png" },
  {logo: "/фото/спонсоры феррари/bitdefender.png" },
  {logo: "/фото/спонсоры феррари/bo.png" },
  {logo: "/фото/спонсоры феррари/celsius.png" },
  {logo: "/фото/спонсоры феррари/ceva.png" },
  {logo: "/фото/спонсоры феррари/chivas regal.png" },
  {logo: "/фото/спонсоры феррари/ecopol.png" },
  {logo: "/фото/спонсоры феррари/espacio.png" },
  {logo: "/фото/спонсоры феррари/firelli.png" },
  {logo: "/фото/спонсоры феррари/genesys.png" },
  {logo: "/фото/спонсоры феррари/ghmumm.png" },
  {logo: "/фото/спонсоры феррари/giorgio armani.png" },
  {logo: "/фото/спонсоры феррари/hcl software.png" },
  {logo: "/фото/спонсоры феррари/iveco.png" },
  {logo: "/фото/спонсоры феррари/mahle.png" },
  {logo: "/фото/спонсоры феррари/manpowergroup.png" },
  {logo: "/фото/спонсоры феррари/ngk.png" },
  {logo: "/фото/спонсоры феррари/ohlins.png" },
  {logo: "/фото/спонсоры феррари/peroni.png" },
  {logo: "/фото/спонсоры феррари/philip morris.png" },
  {logo: "/фото/спонсоры феррари/puma.png" },
  {logo: "/фото/спонсоры феррари/ray ban.png" },
  {logo: "/фото/спонсоры феррари/richard mille.png" },
  {logo: "/фото/спонсоры феррари/riedel.png" },
  {logo: "/фото/спонсоры феррари/sabelt.png" },
  {logo: "/фото/спонсоры феррари/technogym.png" },
  {logo: "/фото/спонсоры феррари/vistajet.png" },
  {logo: "/фото/спонсоры феррари/x technology.png" },
]

export function SponsorsMarquee() {
  const row1 = sponsors.slice(0, 19)
  const row2 = sponsors.slice(20, 40)

  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">ПАРТНЕРЫ</h2>
      
      <div className="slider-container">
        {/* Top Row - Scrolling Left */}
        <div className="slider-track slider-left">
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
        <div className="slider-track slider-right">
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
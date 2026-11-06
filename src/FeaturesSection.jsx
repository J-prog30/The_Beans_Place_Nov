import { useEffect, useRef, useState } from "react";

import imgArabianMocha from "../assets/Arabian-Mocha-Bag.png";
import imgBrazilianSantos from "../assets/Brazilian-Santos-Bag.png";
import imgColombianSupremo from "../assets/Colombian-Supremo-Bag.png";
import imgCostaRicaTarrazu from "../assets/Costa-Rica-Tarrazu-Bag.png";
import imgEthiopianHarrar from "../assets/Ethiopian-Harrar-Bag.png";
import imgGuatemalaAntigua from "../assets/Guatemala-Antigua-Bag.png";
import imgJamaicanBlueMountain from "../assets/Jamaican-Blue-Mountain-Bag.png";
import imgKenyaAA from "../assets/Kenya-AA-Bag.png";
import imgKona from "../assets/Kona-Bag.png";
import imgPanamaGeisha from "../assets/Panama-Geisha.png";
import imgRedSulawesi from "../assets/Red-Sulawesi-Bag.png";
import imgSumatraMandheling from "../assets/Sumatra-Mandheling-Bag.png";
import imgTanzaniaPeaberry from "../assets/Tanzania-Peaberry-Bag.png";
import imgUrigacheffe from "../assets/Urigacheffe-Bag.png";
import imgVietnameseRobusta from "../assets/Vietnamese-Robusta.png";

const row1 = [
  imgJamaicanBlueMountain,
  imgEthiopianHarrar,
  imgPanamaGeisha,
  imgRedSulawesi,
  imgKona,
  imgTanzaniaPeaberry,
];

const row2 = [
  imgKenyaAA,
  imgArabianMocha,
  imgGuatemalaAntigua,
  imgSumatraMandheling,
  imgBrazilianSantos,
  imgColombianSupremo,
];

const row3 = [
  imgCostaRicaTarrazu,
  imgUrigacheffe,
  imgVietnameseRobusta,
  imgJamaicanBlueMountain,
  imgGuatemalaAntigua,
  imgKenyaAA,
];

function ImageRow({ images, speed = -0.25, offset = 0 }) {
  const doubled = [...images, ...images];

  return (
    <div className="carousel-row" style={{ transform: `translate3d(${offset}px, 0, 0)`, transition: "transform 0.2s linear" }}>
      {doubled.map((src, index) => (
        <div key={`${src}-${index}`} className="carousel-card">
          <img src={src} alt="Coffee bag" className="carousel-image" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const [offsets, setOffsets] = useState([0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);

      setOffsets([
        -progress * 120,
        progress * 150,
        -progress * 90,
      ]);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="carousel-gallery-section" ref={sectionRef}>
      <div className="carousel-gallery-container">
        <ImageRow images={row1} offset={offsets[0]} />
        <ImageRow images={row2} offset={offsets[1]} />
        <ImageRow images={row3} offset={offsets[2]} />
      </div>
    </section>
  );
}

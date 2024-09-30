import BrandItem from "./BrandItem";
import styles from "./Brands.module.css";

import TrampolinesLogo from "../assets/brandslogo/TrampolinesLogo.png";
import KNWLogo from "../assets/brandslogo/KNWLogo.png";
import BlackLogo from "../assets/brandslogo/Black_Logo.png";
import ObviLogo from "../assets/brandslogo/ObviLogo.png";
import LilacStLogo from "../assets/brandslogo/LilacStLogo.png";
import Tabslogo from "../assets/brandslogo/Tabslogo.png";
import TigerToolLogo from "../assets/brandslogo/TigerToolLogo.png";
import LLLogo from "../assets/brandslogo/LLLogo.png";
import DrumeoLogo from "../assets/brandslogo/DrumeoLogo.png";
import UpgrowthZakDesigns from "../assets/brandslogo/UpgrowthZakDesigns.png";

export default function Brands() {
  const brands = [
    { src: TrampolinesLogo, alt: "Brand 1" },
    { src: KNWLogo, alt: "Brand 2" },
    { src: BlackLogo, alt: "Brand 3" },
    { src: ObviLogo, alt: "Brand 4" },
    { src: LilacStLogo, alt: "Brand 5" },
    { src: Tabslogo, alt: "Brand 6" },
    { src: TigerToolLogo, alt: "Brand 7" },
    { src: LLLogo, alt: "Brand 8" },
    { src: DrumeoLogo, alt: "Brand 9" },
    { src: UpgrowthZakDesigns, alt: "Brand 10" },
  ];

  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>Trusted By Brands like</h1>

      <div>
        <ul>
          {brands.map((brand, index) => (
            <BrandItem key={index} imageUrl={brand.src} altText={brand.alt} />
          ))}
        </ul>
      </div>
    </div>
  );
}

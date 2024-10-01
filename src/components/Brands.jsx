import BrandItem from "./BrandItem";
import styles from "./Brands.module.css";

import grandeLash from "../assets/trustedbrandslogo/grande-cosmetics.jpg";

// import grandeLash from "../assets/trustedbrandslogo/png-transparent-grande-thumbnail.png";

import iHerb from "../assets/trustedbrandslogo/i-herbb.png";
import ourPlace from "../assets/trustedbrandslogo/OP_logo.png";
import snowSmall from "../assets/trustedbrandslogo/trysnow-small.jpeg";
import littleTrouble from "../assets/trustedbrandslogo/littletrouble.png";
import magicMolecule from "../assets/trustedbrandslogo/magic-molecule.png";
import caseMate from "../assets/trustedbrandslogo/case-mate-logo-new.png";
import flutterHabit from "../assets/trustedbrandslogo/flutter-habit.png";
import buttah from "../assets/trustedbrandslogo/buttah_logo_black_and_gold.webp";
import beekman from "../assets/trustedbrandslogo/Beekman1802_Logo_Horizontal__2_Logo.jpg";
import mightyPaw from "../assets/trustedbrandslogo/Mighty_Paw_Logo.png";
import squatty from "../assets/trustedbrandslogo/SquattyPottyLogo.jpg";
import ateria from "../assets/trustedbrandslogo/ATER-f7423b29.png";
import plug from "../assets/trustedbrandslogo/logo_the_plugx.png";
import offCourt from "../assets/trustedbrandslogo/OC_TYPELOGO.png";
import oui from "../assets/trustedbrandslogo/OUI_BLACK_LOGO.webp";
import geniusLitter from "../assets/trustedbrandslogo/genius-litter.png";
import makeupEraser from "../assets/trustedbrandslogo/Makeup_Eraser-L.jpg";
import doe from "../assets/trustedbrandslogo/logo_nolash-blue.ai.webp";
import aboutFace from "../assets/trustedbrandslogo/about-face.png";
import nanDog from "../assets/trustedbrandslogo/Logo_NDPG_Black.png";
import chillHouse from "../assets/trustedbrandslogo/chillhouse_logo.svg";
import facetory from "../assets/trustedbrandslogo/2021_FACETORY_LOGO_240x.png";
import evan from "../assets/trustedbrandslogo/logo-wide-black.png";
import strip from "../assets/trustedbrandslogo/logo_cstrip_b.png";
import nactics from "../assets/trustedbrandslogo/natics.png";
import macroLife from "../assets/trustedbrandslogo/lounge-logo21.png";
import duraDry from "../assets/trustedbrandslogo/duradry_black.svg";
import lusso from "../assets/trustedbrandslogo/lusso.png";
import trislasting from "../assets/trustedbrandslogo/TRL_horizontal_registered_purple.png";

export default function Brands() {
  const brands = [
    { src: grandeLash, alt: "Brand 1" },
    { src: iHerb, alt: "Brand 2" },
    { src: ourPlace, alt: "Brand 3" },
    { src: snowSmall, alt: "Brand 4" },
    { src: littleTrouble, alt: "Brand 5" },
    { src: magicMolecule, alt: "Brand 6" },
    { src: caseMate, alt: "Brand 7" },
    { src: flutterHabit, alt: "Brand 8" },
    { src: buttah, alt: "Brand 9" },
    { src: beekman, alt: "Brand 10" },
    { src: mightyPaw, alt: "Brand 1" },
    { src: squatty, alt: "Brand 2" },
    { src: ateria, alt: "Brand 3" },
    { src: plug, alt: "Brand 4" },
    { src: offCourt, alt: "Brand 5" },
    { src: oui, alt: "Brand 6" },
    { src: geniusLitter, alt: "Brand 7" },
    { src: makeupEraser, alt: "Brand 8" },
    { src: doe, alt: "Brand 9" },
    { src: aboutFace, alt: "Brand 10" },
    { src: nanDog, alt: "Brand 4" },
    { src: chillHouse, alt: "Brand 5" },
    { src: facetory, alt: "Brand 6" },
    { src: evan, alt: "Brand 7" },
    { src: strip, alt: "Brand 8" },
    { src: nactics, alt: "Brand 9" },
    { src: macroLife, alt: "Brand 10" },
    { src: duraDry, alt: "Brand 5" },
    { src: lusso, alt: "Brand 6" },
    { src: trislasting, alt: "Brand 7" },
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

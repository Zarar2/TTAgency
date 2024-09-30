import Google from "../assets/partnerslogo/Google+Partner.png";
import Facebook from "../assets/partnerslogo/Facebook.png";
import Instagram from "../assets/partnerslogo/Instagram.png";
import Meta from "../assets/partnerslogo/Meta+Partner.png";
import Shopify from "../assets/partnerslogo/Shopify+Partner.png";
import tiktok from "../assets/partnerslogo/tiktok-shop-partner.jpg";

import styles from "./PartnersList.module.css";

export default function PartnersList() {
  return (
    <ul className={styles.partnerList}>
      <li>
        <img src={Google} alt="" />
      </li>

      <li>
        <img src={tiktok} alt="" />
      </li>

      <li>
        <img src={Meta} alt="" />
      </li>

      <li>
        <img src={Facebook} alt="" />
      </li>

      <li>
        <img src={Instagram} alt="" />
      </li>

      <li>
        <img src={Shopify} alt="" />
      </li>
    </ul>
  );
}

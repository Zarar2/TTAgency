import styles from "./PriceItem.module.css";
import tick from "../assets/done.png";
import PriceButton from "./PriceButton";
export default function PriceItem({ heading, price, duration, priceFeature }) {
  const feature = priceFeature.map((feature) => (
    <li className={styles.priceFeature}>
      <img src={tick} alt="" />
      <span>{feature}</span>
    </li>
  ));

  return (
    <div className={styles.priceItem}>
      <div className={styles.priceHeader}>
        <h1 className={styles.heading}>{heading}</h1>

        <h2 className={styles.price}>
          {price}
          <span>{duration}</span>
        </h2>
      </div>

      <div className={styles.priceFooter}>
        <ul>{feature}</ul>
      </div>

      <PriceButton />
    </div>
  );
}

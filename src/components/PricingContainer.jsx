import PriceItem from "./PriceItem";
import styles from "./PricingContainer.module.css";

export default function PricingContainer() {
  return (
    <div className={styles.container}>
      <PriceItem
        type="silver"
        heading="Silver"
        price="$300 USD"
        duration="3-Days"
        priceFeature={[
          "1 Shop Automation",
          "60 Messages/Day",
          "1800 Messages/Month",
        ]}
      />
      <PriceItem
        type="gold"
        heading="Gold"
        price="$1000 USD"
        duration="/month"
        priceFeature={[
          "1 Shop Automation",
          "800 Messages/Day",
          "800 Target Collaboration",
        ]}
      />
      <PriceItem
        type="platinum"
        heading="Platinum"
        price="$1500 USD"
        duration="/month"
        priceFeature={[
          "3 Shop Automation",
          "Unlimited Messages",
          "Unlimited Target Collaboration",
        ]}
      />

      <PriceItem
        // type="platinum"
        type="diamond"
        heading="Diamond"
        price="$2000 USD"
        duration="/month"
        priceFeature={[
          "3 Shop Automation",
          "Unlimited Messages",
          "Unlimited Target Collaboration",
        ]}
      />
    </div>
  );
}

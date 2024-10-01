import PriceItem from "./PriceItem";
import styles from "./PricingContainer.module.css";

export default function PricingContainer() {
  return (
    <div className={styles.container}>
      <PriceItem
        heading="FREE"
        price=""
        duration="3-Days"
        priceFeature={[
          "1 Shop Automation",
          "60 Messages/Day",
          "1800 Messages/Month",
        ]}
      />
      <PriceItem
        heading="Starter"
        price="$70 USD"
        duration="/month"
        priceFeature={[
          "1 Shop Automation",
          "800 Messages/Day",
          "800 Target Collaboration",
        ]}
      />
      <PriceItem
        heading="Gold"
        price="$150 USD"
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

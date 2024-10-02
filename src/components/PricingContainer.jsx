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
          "Dedicated Team Growth",
          "TikTok Shop Affiliate Outreach",
          "TikTok Shop Follow-Up Messages",
          "TikTok Shop Affiliate Analysis",
          "TikTok Shop Sparks Ads Management",
          "TikTok Shop Mass Outreach (5,000+ daily)",
        ]}
      />
      <PriceItem
        type="gold"
        heading="Gold"
        price="$1000 USD"
        duration="/month"
        priceFeature={[
          "All Silver Package Features",
          "TikTok Samples Request Handling",
          "TikTok Shop Mass Outreach (7,000+ daily)",
          "Personalized Messaging",
          "Content Creation and Messaging for Affiliates",
          "Ads Management on Meta, TikTok, and Google Platforms",
        ]}
      />
      <PriceItem
        type="platinum"
        heading="Platinum"
        price="$1500 USD"
        duration="/month"
        priceFeature={[
          "All Gold Package Features",
          "TikTok Shop Mass Outreach (10,000+ daily)",
          "Social Commerce Ads Management",
          "Ads Management on Meta, TikTok, Google, Bing, and Amazon Platforms",
          "Email Marketing & Social Marketing",
          "Landing Page Development",
          "TikTok Shop Product Management",
        ]}
      />

      <PriceItem
        // type="platinum"
        type="diamond"
        heading="Diamond"
        price="$2000 USD"
        duration="/month"
        priceFeature={[
          "All Platinum Package Features",
          "TikTok Shop Mass Outreach (15,000+ daily)",
          "SMS and Phone Call Marketing",
        ]}
      />
    </div>
  );
}

import Button from "./Button";
import styles from "./Cover.module.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Lottie from "lottie-react";
import phone from "../assets/phone-animation.json";

export default function Cover() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sections + " " + styles.videoPlayer}>
          <Lottie animationData={phone} />
        </div>

        <div className={styles.sections + " " + styles.bannerContent}>
          <h3 className={styles.heading}>
            Globlal e-commerce social media marketing agency..
          </h3>

          <p>
            As a leading social media eCommerce agency,
            <strong>TTAffinity </strong> delivers end-to-end solutions that earn
            the trust of the world’s mostf prestigious brands.
          </p>
          <p>
            From Influencer Marketing and Paid Social to Community Management
            and Social Video Production, we cover every aspect of your brand’s
            digital presence.
          </p>
          <p>
            Our services include comprehensive Brand Awareness Campaigns,
            strategy research, competitor analysis, and innovative concept
            development, like collabs, giveaways, and offline events.
          </p>

          <Button>GET STARTED</Button>
        </div>
      </div>
    </>
  );
}

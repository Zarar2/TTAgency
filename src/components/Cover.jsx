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
          <h1 className={styles.heading}>
            TIKTOK DIGITAL MARKETING FIRM
          </h1>

          <p>
            At <strong>TTAffinity</strong>, we understand the dynamic world of TikTok and its potential 
            to skyrocket your online store's growth. Specializing in TikTok store management and marketing, our dedicated
            team is poised to transform your business's digital trajectory.
          </p>

          {/* <p>
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
          <p>
            At <strong>TTAffinity</strong>, we understand the dynamic world of TikTok and its 
            potential to skyrocket your online store's growth. Specializing 
            in TikTok store management and marketing, our dedicated team is 
            poised to transform your business's digital trajectory.
          </p> */}

          <Button>GET STARTED</Button>
        </div>
      </div>
    </>
  );
}

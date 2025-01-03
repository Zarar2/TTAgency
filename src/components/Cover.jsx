import Button from "./Button";
import styles from "./Cover.module.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import phone from "../assets/phone-animation.json";

export default function Cover() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore the thrilling new product launches on TikTok! Get the scoop on the latest innovations, features, and trends that are shaking up the digital world. Stay ahead with TikTok's new product launches – where creativity meets technology."
        />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.sections + " " + styles.videoPlayer}>
          <Lottie animationData={phone} />
        </div>

        <div className={styles.sections + " " + styles.bannerContent}>
          <h1 className={styles.heading}>
            TIKTOK DIGITAL MARKETING FIRM
          </h1>

          <p>
            Tiktok marketing is all about understanding the Dynamics , at <strong>TTaffinity</strong> using automation and figuring geological post scheduling of your product for the highest output utilizing past data and setting triggers with self made automation tools that cuts the manual labor, working 24/7 for your store
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

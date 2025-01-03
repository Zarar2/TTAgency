import React from "react";
import { Link } from "react-router-dom";
import styles from "./BoostBundle.module.css"

const BoostBundle = () => {
  return (
    <div className={styles.boostBundle}>
      <div className={styles.servicesSection}>
        <div className={styles.serviceCategory}>
        <h3 className={styles.serviceTitle}>
          {/* TIKTOK SERVICES <i className="bi bi-house-door"></i> */}
          TIKTOK SERVICES <Link to="pricing"><i className="bi bi-shop"></i></Link>
        </h3>
          <ul className={styles.serviceList}>
            <li>
              <i className="bi bi-link-45deg"></i> <Link to="tiktokAdCompaigns" target="_blank">TIKTOK AD COMPAIGNS</Link>
            </li>
            <li><i className="bi bi-link-45deg"></i> <Link to="shopHandlingServices" target="_blank">SHOP HANDLING SERVICES</Link></li>
            <li><i className="bi bi-link-45deg"></i> <Link to="tiktokLive" target="_blank">TIKTOK LIVE</Link></li>
            <li><i className="bi bi-link-45deg"></i> <Link to="newProductLaunches" target="_blank">NEW PRODUCT LAUNCHES</Link></li>
            <li><i className="bi bi-link-45deg"></i> <Link to="accountManagement" target="_blank">ACCOUNT MANAGEMENT</Link></li>
            <li><i className="bi bi-link-45deg"></i> <Link to="crossPlatformStrategies" target="_blank">CROSS PLATFORM STRATEGIES</Link></li>
          </ul>
        </div>
        <div className={styles.serviceCategory}>
          <h3 className={styles.serviceTitle}>
            {/* LEAD SCRAPER <i className="bi bi-file-earmark-spreadsheet"></i>  */}
            {/* LEAD SCRAPER <i className="bi bi-person-lines-fill"></i>  */}
            LEAD SCRAPER <Link to="pricing"><i className="bi bi-clipboard-check"></i></Link>
          </h3>
          <ul className={styles.serviceList}>
            <li>Coming Soon</li>
            <li>For updates join our <a href="https://discord.com/invite/prvX8BKA" className={styles.discordLink}>Discord</a> channel</li>
          </ul>
        </div>
        <div className={styles.serviceCategory}>
          <h3 className={styles.serviceTitle}>
            {/* TIKTOK VOICE AGENTS <i className="bi bi-chat-dots"></i>  */}
            TIKTOK VOICE AGENTS <Link to="pricing"><i className="bi bi-headset"></i></Link>
          </h3>
          <ul className={styles.serviceList}>
            <li>Coming Soon</li>
            <li> For updates join our <a href="https://discord.com/invite/prvX8BKA" className={styles.discordLink}>Discord</a> channel</li>
          </ul>
        </div>
        <div className={styles.serviceCategory}>
          <h3 className={styles.serviceTitle}>
            {/* TIKTOK AFFILIATES <i className="bi bi-person-plus"></i> */}
            {/* TIKTOK AFFILIATES <i className="bi bi-person-check"></i>  */}
            TIKTOK AFFILIATES <Link to="pricing"><i className="bi bi-globe"></i></Link>
          </h3>
          <ul className={styles.serviceList}>
            <li><i className="bi bi-link-45deg"></i> <Link to="affiliatesData" target="_blank">AFFILIATE DATA</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>TikTok Digital Marketing Firm</h2>
          <p className={styles.ctaDescription}>
            Let us handle all your website management, from design to updates and security. Focus on your business while we ensure your site runs smoothly and hassle-free.
          </p>
        </div>
        {/* <Link to="contact" target="_blank" className={styles.ctaButton}>Get Started Now</Link> */}
        <Link to="contact" className={styles.ctaButton}>Contact us</Link>
      </div>
    </div>
  );
};

export default BoostBundle;

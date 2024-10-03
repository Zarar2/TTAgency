import styles from "./WhoWeAre.module.css";
import commerce from "../assets/about/commerce.svg";
import sales from "../assets/about/sales.svg";
import ads from "../assets/about/ads.svg";
import service from "../assets/about/service.svg";
import mission from "../assets/about/mission.svg";

export default function WhoWeAre() {
  return (
    <div className={styles.container}>
      <div className={styles.bulletsContainer}>
        <div className={styles.mainPoints}>
          <h1 className={styles.heading}>E-commerce Growth Experts</h1>
          <p className={styles.description}>
            We specialize in managing TikTok Shops and Shopify stores, turning
            online businesses into sales powerhouses.
          </p>
        </div>
        <div className={styles.banner}>
          <img src={commerce} alt="" />
        </div>
      </div>

      <div className={styles.bulletsContainer}>
        <div className={styles.banner}>
          <img src={sales} alt="" />
        </div>

        <div className={styles.mainPoints}>
          <h1 className={styles.heading}>Sales-Driven Approach</h1>
          <p className={styles.description}>
            We don’t just manage your store—we focus on growing your sales and
            driving consistent, scalable results.
          </p>
        </div>
      </div>

      <div className={styles.bulletsContainer}>
        <div className={styles.mainPoints}>
          <h1 className={styles.heading}>Ad Campaigns That Convert</h1>
          <p className={styles.description}>
            Our ad strategies are built to maximize ROI, turning clicks into
            loyal customers and sales.
          </p>
        </div>
        <div className={styles.banner}>
          <img src={ads} alt="" />
        </div>
      </div>

      <div className={styles.bulletsContainer}>
        <div className={styles.banner}>
          <img src={service} alt="" />
        </div>

        <div className={styles.mainPoints}>
          <h1 className={styles.heading}>Full-Service Management</h1>
          <p className={styles.description}>
            From optimizing your store to handling every aspect of your TikTok
            Shop, we ensure smooth operations and sustained growth.
          </p>
        </div>
      </div>

      <div className={styles.bulletsContainer}>
        <div className={styles.mainPoints}>
          <h1 className={styles.heading}>Your Success Is Our Mission</h1>
          <p className={styles.description}>
            We’re passionate about helping your business thrive, combining
            strategy with action to deliver results that matter.
          </p>
        </div>
        <div className={styles.banner}>
          <img src={mission} alt="" />
        </div>
      </div>
    </div>
  );
}

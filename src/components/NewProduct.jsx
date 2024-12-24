import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import styles from './NewProduct.module.css';

export default function NewProduct() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Latest Dive Into TikTok's New Product Launches!</title>
        <meta
          name="description"
          content="Explore the thrilling new product launches on TikTok! Get the scoop on the latest innovations, features, and trends that are shaking up the digital world. Stay ahead with TikTok's new product launches – where creativity meets technology."
        />
      </Helmet>
      <div className={styles.header}>
        <h1 className={styles.headerHeading}>NEW PRODUCT LAUNCHES</h1>
        <ul className={styles.headerText}>
          Ever wondered what's next in the world of TikTok? Hold onto your hats, because <strong>TikTok's new product launches</strong> are here to blow you away! With a knack for staying ahead of the curve, TikTok is at it again, bringing you groundbreaking features that'll redefine how you interact, create, and share. Isn't it about time you got in on the action?
        </ul>
      </div>
      <h2 className={styles.sectionHeading}>What's New from TikTok?</h2>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">1. Augmented Reality Magic</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Step into a new dimension with TikTok's AR capabilities.</li>
              <li>Watch content and interact with it, becoming part of the experience.</li>
              <li>Explore the cool and innovative features that TikTok's AR technology offers.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">2. E-commerce Integrations</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Shop the latest trends seamlessly while scrolling through your TikTok feed.</li>
              <li>TikTok’s new product launches make it easy to shop without interrupting your viewing experience.</li>
              <li>Stay updated with fresh product releases directly within your feed, combining entertainment and shopping.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">3. Enhanced Video Tools</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Utilize snazzy filters and slick editing tools to create professional-looking videos effortlessly.</li>
              <li>Creating high-quality content is now easier than ever with just a smartphone.</li>
              <li>No need for a studio—your phone is all you need to produce amazing videos.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">4. Live Event Streaming</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Catch the action as it happens with enhanced live streaming features.</li>
              <li>Experience live events like concerts or cooking shows in real-time.</li>
              <li>Enjoy live streaming from the comfort of your couch.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2 className={styles.footerHeading}>Why Should You Care?</h2>
        <ul className={styles.footerText}>
          Let's face it, staying updated with <strong>TikTok's new product launches</strong> isn't just about keeping up; it's about being part of a community that's at the forefront of innovation. With each new feature, TikTok isn't just changing the game—it's making sure you're equipped to play it.
        </ul>
        <ul className={styles.footerText2}>
          Ready to be part of something big? <Link to="/contact">Contact us now!</Link>
        </ul>
      </div>
    </div>
  );
}

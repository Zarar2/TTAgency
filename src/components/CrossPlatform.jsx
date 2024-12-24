import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CrossPlatform.module.css';

export default function CrossPlatform() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerHeading}>CROSS PLATFORM STRATEGIES</h1>
        <ul className={styles.headerText}>
          At <strong>TTAffinity</strong>, we optimize your TikTok presence; we amplify your brand's voice across all major digital platforms. By integrating your marketing strategies across TikTok, Instagram, Facebook, and more, we ensure a cohesive and powerful brand message that drives growth and enhances engagement.
        </ul>
      </div>

      <h2 className={styles.sectionHeading}>Why Invest in Cross-Platform Strategies?</h2>
      <div className={styles.cardContainer2}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Unified Brand Message</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Ensure consistency across all platforms to create a unified brand image.</li>
              <li>A consistent message helps to strengthen your brand's identity and visibility.</li>
              <li>Consistency boosts trust, which is crucial for improving conversion and retention rates.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Expanded Reach</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Engage users on multiple platforms to capture a broader audience.</li>
              <li>Tap into unique user bases across various social media channels.</li>
              <li>Leverage different content formats to maximize impact.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionHeading}>Our Proven Approach</h2>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">1. Integrated Campaign Development</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>We create campaigns with a unified voice, ensuring consistency across platforms.</li>
              <li>Our content is tailored to fit the specific format and audience of each platform.</li>
              <li>We maintain your brand’s core message while adapting it to different platforms.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">2. Data-Driven Optimization</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Utilize cross-platform analytics to refine strategies and enhance ROI.</li>
              <li>Adapt and scale campaigns from TikTok to Facebook using insights from performance data.</li>
              <li>Tailor messaging and creative elements based on data insights to suit the Facebook audience.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">3. Continuous Learning and Adapting</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>The digital landscape is constantly evolving.</li>
              <li>We stay ahead by continuously testing new strategies and tools.</li>
              <li>Our goal is to ensure your brand remains relevant and competitive.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionHeading}>Real Results: Case Studies</h2>
      <div className={styles.cardContainer2}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Fashion Retailer Success</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>A client in the fashion sector experienced a 40% increase in overall sales.</li>
              <li>Synchronized promotions were implemented across TikTok and Instagram to enhance campaign reach.</li>
              <li>The campaign's message was reinforced through both visual and interactive content on both platforms.</li>
            </ul>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Tech Gadgets Launch</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Coordinated product launch announcements across multiple platforms: <strong>TikTok, Twitter, and YouTube.</strong></li>
              <li>Achieved a 50% higher engagement rate compared to previous single-platform launches.</li>
              <li>Leveraged cross-platform marketing to boost engagement and reach.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2 className={styles.footerHeading}>Start Building a Comprehensive Digital Presence Today</h2>
        <ul className={styles.footerText}>
          Don’t let your brand’s potential be limited by platform boundaries. With <strong>your agency</strong>, expand your reach, engage more effectively with your audience, and achieve measurable results. 
        </ul>
        <ul className={styles.footerText2}>
          Contact us to schedule a strategy session or learn more about our cross-platform capabilities. Together, we can create a plan that not only meets but exceeds your digital marketing goals. <Link to="/contact">Contact us now!</Link>
        </ul>
      </div>
    </div>
  );
}

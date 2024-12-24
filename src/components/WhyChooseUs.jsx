import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionHeading}>Why Choose Us?</h2>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Expertise in TikTok Services</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Leverage our specialized services in TikTok ad campaigns and shop handling to enhance your visibility and sales.</li>
              <li>Tailored strategies directly address the needs of TikTok store owners.</li>
              <li>Ensure your products not only reach but resonate with your target audience.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Innovative Solutions with TikTok Voice Agents and TikTok Live</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Engage your customers like never before with personalized interactions through TikTok Voice Agents.</li>
              <li>Use TikTok Live sessions for real-time engagement with your audience.</li>
              <li>Showcase your products and effectively launch new ones during live sessions.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Strategic Account Management</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Account management services cover everything from setup to continuous optimization, ensuring your TikTok store thrives.</li>
              <li>Focus on key metrics that matter for driving success.</li>
              <li>Provide guidance in refining strategies for maximum impact and performance.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Cross-Platform Strategies for Expanded Reach</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Don’t just excel on TikTok; dominate across multiple platforms.</li>
              <li>Our integrated cross-platform strategies ensure a cohesive brand presence.</li>
              <li>Your promotions will be powerful, making your brand a formidable force across the digital landscape.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

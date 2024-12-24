import React from 'react';
import styles from './Campaigns.module.css';
import { Link } from 'react-router-dom';

export default function Campaigns() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerHeading}>TIKTOK ADS CAMPAIGN</h1>
        <ul className={styles.headerText}>
          At <strong>TTAffinity</strong>, we specialize in crafting high-impact TikTok ad campaigns that translate into real-world results for your online store. Harness the full potential of TikTok to not only reach your target audience but to drive substantial growth in your sales and customer engagement.
        </ul>
      </div>
      <h2 className={styles.sectionHeading}>Why Partner with Us for TikTok Ads?</h2>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Customized Campaigns</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Each TikTok ad campaign is customized to fit the specific needs of your store.</li>
              <li>Ensures maximum relevance to your target audience.</li>
              <li>Guarantees high impact for better engagement and results.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Advanced Targeting Techniques</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Leverage our deep understanding of TikTok’s algorithm to target the right audience.</li>
              <li>Use insights from user behavior to identify customer preferences and trends.</li>
              <li>Pinpoint your ideal customer demographic for more effective campaigns.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Creative Excellence</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <p>Turn Your TikTok Following Into Revenue: Join our elite network of creators earning $1000-5000 monthly through targeted Spark Ads</p>
            <p>This captures the key elements:</p>
            <ul className="card-text">
              <li>Value proposition (earnings potential)</li>
              <li>Service offering (Spark Ads management)</li>
              <li>Community aspect (Discord network)</li>
              <li>Clear call-to-action with qualification criteria</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Continuous Optimization</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Our campaigns are continuously monitored and optimized.</li>
              <li>We test and tweak your ads regularly to improve their performance.</li>
              <li>Ensuring optimum ad performance through ongoing adjustments and improvements.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionHeading}>Our Proven Process for Maximizing Your ROI</h2>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Strategic Planning</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>We start by understanding your business goals.</li>
              <li>We analyze your target audience to create tailored strategies.</li>
              <li>Our strategic plan is designed to maximize your ad spend.</li>
            </ul>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Creative Development</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Engage your audience with stunning visuals that capture attention.</li>
              <li>Create captivating content that resonates with your audience.</li>
              <li>Highlight the unique selling points of your products to boost interest.</li>
            </ul>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Campaign Launch</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Launch your campaigns with precision targeting.</li>
              <li>Ensure your ads reach the most relevant audience.</li>
              <li>Increase the likelihood of conversions by targeting those most likely to purchase.</li>
            </ul>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Performance Monitoring</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Track key performance indicators (KPIs) such as click-through rates (CTR).</li>
              <li>Monitor conversion rates to assess campaign effectiveness.</li>
              <li>Measure ROI (Return on Investment) to ensure the campaign is on track for success.</li>
            </ul>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Optimization and Scaling</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Utilize real-time data to make informed adjustments to your campaigns.</li>
              <li>Optimize campaigns for better performance.</li>
              <li>Scale successful ads to achieve greater reach.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2 className={styles.footerHeading}>Kickstart Your TikTok Campaign Today</h2>
        <ul className={styles.footerText}>
          Are you ready to see tangible growth in your TikTok store? Contact <strong>TTAffinity</strong> now to schedule your first campaign. Let us help you turn TikTok traffic into customers with targeted, eye-catching ads designed to drive sales.
        </ul>
        <ul className={styles.footerText2}>
          Visit our website, reach out for a consultation, or explore our success stories to learn more about what we can do for you. <Link to="/contact">Contact us now!</Link>
        </ul>
      </div>
    </div>
  );
}

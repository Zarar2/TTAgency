import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShopHandling.module.css';

export default function ShopHandling() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerHeading}>SHOP HANDLING SERVICES</h1>
        <ul className={styles.headerText}>
          In the fast-paced world of TikTok, managing a shop demands precision, agility, and a deep understanding of the platform's unique ecosystem. At <strong>TTAffinity</strong>, we specialize in streamlining and enhancing every aspect of your TikTok shop, ensuring that your business not only meets but exceeds the expectations of today’s digital shopper.
        </ul>
      </div>
      <h2 className={styles.sectionHeading}>Why Shop Handling Services are Critical for Your Success</h2>
      <div className={styles.cardContainer2}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Expert Management</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Our team of experts brings in-depth knowledge and hands-on experience in managing TikTok stores.</li>
              <li>We handle everything from inventory management to order fulfillment.</li>
              <li>Our services are delivered with precision and efficiency, ensuring smooth operations for your store.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Customer Satisfaction</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Ensure smooth and professional customer interactions.</li>
              <li>Enhance user experience through effective communication.</li>
              <li>Boost customer retention with high-quality service.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionHeading}>Proven Impact of Our Shop Handling Services</h2>
      <div className={styles.cardContainer2}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Case Study Highlight</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>A prominent fashion retailer on TikTok saw a 30% increase in monthly sales after outsourcing their shop management to us.</li>
              <li>The client experienced a 50% reduction in customer complaints due to our proactive approach to customer service and inventory accuracy.</li>
              <li>The retailer retained 100% of their clients for a revisit, achieved through our efficient order processing and attention to detail.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Testimonials</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Many clients have expressed satisfaction with our services.</li>
              <li>Clients appreciate the peace of mind they gain when partnering with us.</li>
              <li>Our services contribute to improved operational efficiency for clients.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionHeading}>Our Approach to Transforming Your TikTok Store</h2>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">1. Initial Assessment</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Evaluate your current shop management practices.</li>
              <li>Identify key areas that need improvement.</li>
              <li>Develop strategies for enhancing overall shop performance.</li>
            </ul>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">2. Strategy Implementation</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Develop and implement a customized plan based on the assessment.</li>
              <li>Focus on refining your inventory system and optimizing product listings.</li>
              <li>Enhance customer interaction protocols to improve engagement and service.</li>
            </ul>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">3. Ongoing Support and Optimization</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Our team continuously monitors the performance of your TikTok store.</li>
              <li>We make adjustments as needed to keep pace with market trends.</li>
              <li>We adapt strategies based on changes in consumer behavior.</li>
            </ul>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">4. Regular Reporting</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Receive detailed, actionable reports that provide insights into your store’s performance.</li>
              <li>Gain valuable data to help you make informed decisions.</li>
              <li>Use the insights to refine and improve future strategies.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2 className={styles.footerHeading}>Ready to Elevate Your TikTok Shop Management?</h2>
        <ul className={styles.footerText}>
          Let <strong>TTAffinity</strong> take your shop handling to the next level. Contact us today to schedule a detailed consultation, and start on the path to streamlined operations and enhanced sales on TikTok. 
        </ul>
        <ul className={styles.footerText2}>
          Join the ranks of our satisfied clients and experience the difference professional shop handling can make. <Link to="/contact">Contact us now!</Link>
        </ul>
      </div>
    </div>
  );
}

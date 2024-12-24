import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import styles from './Management.module.css';

export default function Management() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Complete Account Management That Puts You on the Map!</title>
        <meta
          name="description"
          content="Discover unparalleled growth with our Complete TikTok Account Management services! From buzzing new product launches to daily engagement, we handle it all so you can focus on what you do best—creating. Let us take the wheel and drive your TikTok success today!"
        />
      </Helmet>
      <div className={styles.header}>
        <h1 className={styles.headerHeading}>ACCOUNT MANAGEMENT</h1>
        <ul className={styles.headerText}>
        Are you tired of juggling all the bits and pieces that come with managing a TikTok account? Well, worry no more! Our <strong>Complete TikTok Account Management</strong> services are here to sweep you off your feet! Imagine having all the time in the world to focus on creativity and leave the nitty-gritty of TikTok management to the pros. Sounds like a dream, right? Well, buckle up, because we're about to make it a reality!
        </ul>
      </div>

      <h2 className={styles.sectionHeading}>What We Offer:</h2>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">1. Tailored Strategy Planning</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>We create the current, not just go with the flow.</li>
              <li>Our strategies are custom-made to fit your unique brand.</li>
              <li>We tailor our approach to meet the needs of your specific audience.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">2. Content Creation & Scheduling</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Keep your content fresh and frequent effortlessly.</li>
              <li>We plan the content strategy for you.</li>
              <li>We produce and post your content automatically.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">3. Engagement Boosting</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>From likes to comments, we’ll boost interaction and get people talking.</li>
              <li>Our strategies will significantly enhance your audience engagement.</li>
              <li>Consider your engagement rates supercharged with our approach!</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">4. Analytics and Reporting</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Analyze what's working and what's not to optimize performance.</li>
              <li>Deep-dive into data for a comprehensive understanding of your strategy.</li>
              <li>Provide ongoing insights and guidance every step of the way.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">5. TikTok New Product Launches</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Ready to launch a new product? We've got you covered with the hype that’s hard to ignore.</li>
              <li>Our <strong>Complete TikTok Account Management</strong> includes multiple campaigns tailored to your success.</li>
              <li>Designed to make your launches the buzz of TikTok Town!</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionHeading}>Why Us?</h2>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Hands-Off Hassle-Free</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Focus on big-picture ideas and long-term goals.</li>
              <li>Let us handle the day-to-day operations for you.</li>
              <li>We take care of the details, so you can concentrate on growing your business.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Customizable Packages</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>We cater to businesses of all sizes, from big to small.</li>
              <li>Choose the package that best fits your needs.</li>
              <li>Select a package that aligns with your budget.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Proven Track Record</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>We deliver measurable results that demonstrate our effectiveness.</li>
              <li>Our clients' success stories are a testament to the quality of our services.</li>
              <li>We let our results speak louder than words.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2 className={styles.footerHeading}>Why Should You Care?</h2>
        <ul className={styles.footerText}>
          Ain't it high time you gave your brand the spotlight it deserves? With our <strong>Complete TikTok Account Management</strong>, we make every second count.
        </ul>
        <ul className={styles.footerText2}>
          Why blend in when you were born to stand out? Reach out today and let's create some buzz! <Link to="/contact">Contact us now!</Link>
        </ul>
      </div>
    </div>
  );
}

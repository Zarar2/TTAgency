import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import styles from './Live.module.css';

export default function Live() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Power of Engagement: TikTok Live Trends in 2025!</title>
        <meta
          name="description"
          content="Discover how #TikTok Live Services can transform your digital presence! Engage in real-time with followers, boost interaction, and skyrocket your brand's visibility—all through the magic of live streaming."
        />
      </Helmet>
      <div className={styles.header}>
        <h1 className={styles.headerHeading}>TIKTOK LIVE</h1>
        <ul className={styles.headerText}>
          Ever wondered how to take your brand from just buzzing to absolutely booming? Well, wonder no more! #TikTok Live Services are here to catapult your engagement rates through the roof. Whether you're looking to host a live Q&A, showcase your products, or just connect with your audience in the most genuine way possible, #TikTok Live Services has got your back.
        </ul>
      </div>

      <h2 className={styles.sectionHeading}>Why Choose #TikTok Live Services?</h2>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Instant Connection</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Interact with your audience in real-time.</li>
              <li>Answer questions on the fly.</li>
              <li>Make your audience feel right at home with your brand.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Boost Your Reach</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Every live session has the potential to go viral.</li>
              <li>You're not just engaging with your followers.</li>
              <li>You also reach the followers of your audience, expanding your reach.</li>
            </ul>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">Authentic Interaction</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Let your brand's personality shine through live streaming.</li>
              <li>Engage naturally and spontaneously with your audience.</li>
              <li>Show your audience the real you during live sessions.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionHeading}>How Can #TikTok Live Services Elevate Your Brand?</h2>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">1. Showcase Products Live</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Showcase your products in real-time to provide a hands-on experience.</li>
              <li>Address customer inquiries instantly, enhancing engagement.</li>
              <li>Build trust and close sales immediately by resolving concerns during the live session.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">2. Host Giveaways and Contests</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Live giveaways create excitement and engage your audience.</li>
              <li>Ramp up participation with real-time contests.</li>
              <li>Watch your engagement soar as your audience becomes more involved.</li>
            </ul>
          </div>
        </div>

        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">3. Conduct Live Tutorials</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Makeup tutorials and cooking shows are excellent examples of live content that engages an audience.</li>
              <li>Teaching something live allows you to connect with your audience in real-time, increasing interaction.</li>
              <li>Live sessions are a fantastic way to hold an audience's attention by providing valuable, real-time content.</li>
            </ul>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            <h3 className="card-title">4. Behind-the-Scenes Exclusives</h3>
          </div>
          <div className={`card-body ${styles.cardBody}`}>
            <ul className="card-text">
              <li>Give your audience an exclusive behind-the-scenes look at your brand.</li>
              <li>Use #TikTok Live Services to offer a sneak peek into your daily operations.</li>
              <li>Build a strong, lasting connection with your audience by sharing authentic moments.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2 className={styles.footerHeading}>Ready to Go Live?</h2>
        <ul className={styles.footerText}>
          Are you pumped to get started but not sure how? Don’t sweat it! Our team at #TikTok Live Services is all geared up to help you kick things off without a hitch.
        </ul>
        <ul className={styles.footerText2}>
          Why not give it a whirl and see just how your brand can flourish with a bit of live magic? <Link to="/contact">Contact us now!</Link>
        </ul>
      </div>
    </div>
  );
}

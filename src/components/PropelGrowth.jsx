import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WhyChooseUs.module.css';

const PropelGrowth = () => {
    const navigate = useNavigate();

    const navigateButton = () => navigate('contact');

    return (
        <div className={styles.container}>
            <h2 className={styles.sectionHeading}>How We Propel Your Growth</h2>
            <div className={styles.cardContainer}>
                <div className={`card ${styles.card}`}>
                    <div className={`card-header ${styles.cardHeader}`}>
                        <h3 className="card-title">Consultation and Strategy Development</h3>
                    </div>
                    <div className={`card-body ${styles.cardBody}`}>
                        <ul className="card-text">
                            <li>Start with a comprehensive consultation to understand your business needs.</li>
                            <li>Align our expertise with your specific business objectives.</li>
                            <li>Ensure tailored strategies that support your goals and growth.</li>
                        </ul>
                    </div>
                </div>

                <div className={`card ${styles.card}`}>
                    <div className={`card-header ${styles.cardHeader}`}>
                        <h3 className="card-title">Custom Campaign Creation</h3>
                    </div>
                    <div className={`card-body ${styles.cardBody}`}>
                        <ul className="card-text">
                            <li>Dive into custom-designed TikTok ad campaigns tailored for your store.</li>
                            <li>Engage in promotional activities designed to boost your store's visibility.</li>
                            <li>Strategies are specifically crafted to align with your store’s unique needs.</li>
                        </ul>
                    </div>
                </div>

                <div className={`card ${styles.card}`}>
                    <div className={`card-header ${styles.cardHeader}`}>
                        <h3 className="card-title">Execution and Optimization</h3>
                    </div>
                    <div className={`card-body ${styles.cardBody}`}>
                        <ul className="card-text">
                            <li>Continuous monitoring to ensure your strategies perform effectively.</li>
                            <li>Real-time adjustments to optimize campaign performance.</li>
                            <li>Efficiently meet your goals through tailored strategies.</li>
                        </ul>
                    </div>
                </div>

                <div className={`card ${styles.card}`}>
                    <div className={`card-header ${styles.cardHeader}`}>
                        <h3 className="card-title">Reporting and Scaling</h3>
                    </div>
                    <div className={`card-body ${styles.cardBody}`}>
                        <ul className="card-text">
                            <li>Receive detailed analytics reports highlighting successes and areas for improvement.</li>
                            <li>Scale strategies effectively based on the insights from the reports.</li>
                            <li>Enhance your store's growth through data-driven decisions and optimizations.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className={styles.ctaContainer}>
                <h2 className={styles.ctaHeading}>Ready to Transform Your TikTok Store?</h2>
                <ul className={styles.ctaText}>Connect with us today to see how we can elevate your TikTok presence and sales to unprecedented heights. Visit our contact page, schedule a consultation, or dive right into our services to start your journey towards remarkable digital success.</ul>
                <button className={styles.ctaButton} onClick={navigateButton}>Contact us</button>
            </div>
        </div>
    );
};

export default PropelGrowth;

import React, { useEffect } from 'react';
import styles from './TermServices.module.css'

export default function TermServices() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="container">
                <h1 className={styles.heading}>Licenses</h1>
                <p className={styles.date}>Last updated: January 21, 2024</p>
                <p className={styles.paragraph}>Sales Policy All Sales Are Final</p>
                <p className={styles.paragraph2}>Thank you for choosing TTinit for your digital services needs. We are committed to providing our customers with the highest quality digital solutions and customer support. Please carefully read our sales policy to ensure that you understand our practices and your rights as a customer.</p>

                <ol className={styles.list}>
                    <li className={styles.listComponent}>
                        <p>1. Finality of Sales</p>
                        All sales made through TTinit including but not limited to purchases of digital services, subscriptions, and any other transactions conducted through our website, mobile application, or directly with our sales team, are final. Once a transaction has been completed, it cannot be canceled, and the payment made is non-refundable except as explicitly provided for in our Refund Policy.
                    </li>

                    <li className={styles.listComponent}>
                        <p>2. Refund Policy</p>
                        TTinit operates with a strict "all sales are final" policy. Due to the digital nature of our services and the immediacy of the benefits, refunds cannot be provided once a service has been activated or accessed. We encourage our customers to carefully review their orders and read all product information before making a purchase.In exceptional circumstances, if you believe that you have been charged due to an error on our part or have encountered issues with accessing or receiving our services that cannot be resolved, please contact our customer support team at support@ttinit.com. We will review your case individually and strive to ensure your satisfaction within the confines of our policy.
                    </li>

                    <li className={styles.listComponent}>
                        3. Exceptions Notwithstanding the above, TTinit may, at its sole discretion, offer refunds or credits in specific cases where a service has not been delivered as promised or if there are extenuating circumstances. Any such exceptions will be made on a case-by-case basis and do not constitute a waiver of the "all sales are final" policy.
                    </li>

                    <li className={styles.listComponent}>
                        <p>4. Customer Support</p>
                        For any questions or concerns regarding your purchase, our sales policy, or services, please contact our customer support team. We are here to assist you and ensure that your experience with TTinit is positive and satisfactory.Thank you for your understanding and for choosing TTinit.---Remember, this is a template and might need adjustments to fit your specific legal and business requirements. Consulting with a legal professional to tailor this policy to your company's needs is advisable.
                    </li>
                </ol>
            </div>
        </>
    );
}

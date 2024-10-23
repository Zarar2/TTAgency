import styles from "./Faqs.module.css";

export default function Faqs() {
  return (
    <div className={styles.faqs}>
      <h1 className={styles.heading}>Why partner with TTAfinity?</h1>

      <ul className={styles.saleList}>
        <li>
          🚀 <strong> 30x Growth in Sales – </strong>Just in the first month!
        </li>
        <li>
          📈 <strong> 40x Sales Increase –</strong> Accelerated growth in the
          second month!
        </li>
        <li>
          💥 <strong>50x Sales Boom – </strong> Massive success by the third
          month!
        </li>
      </ul>

      <div className={styles.description}>
        <p>
          Everything that we do is centered around getting you better results.
          <br />
          But what does that look like?
        </p>

        <div className={styles.faqCardContainer}>
          <div className={styles.faqCard}>
            <div>
              <h3>1) Less meetings and more action</h3>
              <div className={styles.hoverDiv}>
                <p>Meetings don't get results - a bias towards action does.</p>
              </div>
            </div>
          </div>

          <div className={styles.faqCard}>
            <div>
              <h3>2) Psychology Based Approach To Marketing</h3>
              <div className={styles.hoverDiv}>
                <p>
                  We don't just guess at what is going to work. We use a
                  psychological framework to create ads.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.faqCard}>
            <div>
              <h3>3) We measure brand growth - not ad account growth</h3>
              <div className={styles.hoverDiv}>
                <p>
                  We don't believe that there is one tool for growth (if all you
                  have is a hammer, all you see are nails).
                </p>
              </div>
            </div>
          </div>

          <div className={styles.faqCard}>
            <div>
              <h3>1) Less meetings and more action</h3>
              <div className={styles.hoverDiv}>
                <p>Meetings don't get results - a bias towards action does.</p>
              </div>
            </div>
          </div>
        </div>
        <p>Instead…</p>

        <p>
          <strong>
            We use all of the tools that we have to help your business grow.
          </strong>
        </p>

        <p>
          <strong>
            <h1 className={styles.secondaryHeading}>
              The choice is yours: Do you want to grow with us using our
              strategies?
            </h1>
          </strong>
        </p>

        <p>
          <strong>
            <h1 className={styles.secondaryHeading}>Here’s the brands stats</h1>
          </strong>
        </p>
      </div>
    </div>
  );
}

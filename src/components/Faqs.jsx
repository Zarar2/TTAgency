import styles from "./Faqs.module.css";

export default function Faqs() {
  return (
    <div className={styles.faqs}>
      <h1 className={styles.heading}>Why partner with upGrowth?</h1>

      <div className={styles.description}>
        <p>
          Everything that we do is centered around getting you better results.
          But what does that look like?
        </p>
        <p>
          <strong>1) Less meetings and more action</strong>
        </p>
        <p>Meetings don't get results - a bias towards action does.</p>
        <p>
          <strong>2) Psychology Based Approach To Marketing</strong>
        </p>
        <p>
          We don't just guess at what is going to work. We use a psychological
          framework to create ads that resonate with your target customers
          deepest desires.
        </p>

        <p>
          <strong>3) We measure brand growth - not ad account growth</strong>
        </p>
        <p>
          We don't believe that there is one tool for growth (if all you have is
          a hammer, all you see are nails).
        </p>
        <p>Instead…</p>

        <p>
          <strong>
            We use all of the tools that we have to help your business grow.
          </strong>
        </p>
        <p>
          <strong>For us, that could be...</strong>
        </p>
      </div>
    </div>
  );
}

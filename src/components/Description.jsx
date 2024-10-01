import styles from "./Description.module.css";

export default function Description() {
  return (
    <div className={styles.description}>
      <h1>Packages</h1>
      <div className={styles.content}>
        <p>
          We realize that there is no “one size fits all” approach when it comes
          to what a marketing agency can offer you.
        </p>
        <p>
          As you scale your business your marketing strategy will scale too.{" "}
        </p>
        <p>
          Our packages are designed to provide you with proven services and
          experts for each marketing function of your business. Our goal is to
          support your team's impact to expand revenue and profitability
          exponentially.
        </p>
      </div>
    </div>
  );
}

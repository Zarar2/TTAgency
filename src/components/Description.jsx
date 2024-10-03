import styles from "./Description.module.css";

export default function Description() {
  return (
    <div className={styles.description}>
      <h1>Packages</h1>
      <div className={styles.content}>
        <p>
          We understand that a “one size fits all” approach doesn’t work when it
          comes to marketing. Your business is unique, and as it grows, so
          should your marketing strategy.
        </p>
        <p>As you scale your business your marketing strategy will scale too</p>
        <p>
          Our packages are crafted to provide you with customized,
          results-driven services and expert guidance for every aspect of your
          marketing. We’re here to empower your team, helping you scale
          effectively and boost both revenue and profitability to new heights.
        </p>
      </div>
    </div>
  );
}

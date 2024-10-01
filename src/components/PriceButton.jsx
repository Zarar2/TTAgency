import styles from "./PriceButton.module.css";

export default function PriceButton() {
  return (
    <div className={styles.shadow}>
      <span className={styles.button}>
        <a href="">Get started</a>
      </span>
    </div>
  );
}

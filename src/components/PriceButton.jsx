import styles from "./PriceButton.module.css";

export default function PriceButton() {
  return (
    <div className={styles.parent}>
      <div className={styles.shadow}>
        <span className={styles.button}>
          <a
            target="_blank"
            href="https://cal.com/theawaisahmadkhan/ttinit-onboarding-demo"
          >
            Get started
          </a>
        </span>
      </div>
    </div>
  );
}

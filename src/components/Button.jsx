import styles from "./Button.module.css";

export default function Button({ children }) {
  return (
    <div className={styles.button}>
      <a>{children}</a>
    </div>
  );
}

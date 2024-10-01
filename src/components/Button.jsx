import styles from "./Button.module.css";

export default function Button({ children, onClick, type }) {
  let Button = "primaryButton";
  if (type === "secondary") {
    Button = "secondaryButton";
  }

  return (
    <div className={styles[Button]} onClick={onClick}>
      <a>{children}</a>
    </div>
  );
}

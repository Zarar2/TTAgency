import Header from "./Header";
import styles from "./Banner.module.css";
import Cover from "./Cover";

export default function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <Cover />
      </div>
    </>
  );
}

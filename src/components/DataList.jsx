import CreaterList from "./CreaterList";
import Filters from "./Filters";
import styles from "./DataList.module.css";

export default function DataList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        REACH OUT TO YOUR AFFILIATE AND HOW THEY HAVE PERFORMED WITH US:
      </h1>
      {/* <Filters /> */}
      <CreaterList />;
    </div>
  );
}

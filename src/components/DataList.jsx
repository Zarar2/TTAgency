import CreaterList from "./CreaterList";
import Filters from "./Filters";
import styles from "./DataList.module.css";

export default function DataList() {
  return (
    <div className={styles.container}>
      <Filters />
      <CreaterList />;
    </div>
  );
}

import CreaterCard from "./CreaterCard";
import styles from "./CreaterList.jsx";
export default function CreaterList({ creators }) {
  <div className={styles["creater-list"]}>
    {creators.map((creator, index) => {
      <CreaterCard key={index} creator={creator} />;
    })}
  </div>;
}

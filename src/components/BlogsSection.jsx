import styles from "./BlogsSection.module.css";
import { Outlet } from "react-router-dom";

export default function BlogsSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Main Blogs</h1>
      <div className={styles.blogContainer}>{/* <Outlet /> */}</div>
    </div>
  );
}

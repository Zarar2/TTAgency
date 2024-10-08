import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import styles from "./BlogsSection.module.css";
import CircularProgress from "@mui/material/CircularProgress";
export default function BlogsCards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonfakery.com/blogs/infinite-scroll`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const results = await response.json();
      setData(results.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Main Blogs</h1>
        <div className={styles.blogContainer}>
          {data &&
            data.map((writer) => <BlogCard writer={writer} key={writer.id} />)}
          {loading && (
            <CircularProgress color="inherit" className={styles.indicator} />
          )}
        </div>
      </div>
    </>
  );
}

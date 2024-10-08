import { useLocation } from "react-router-dom";
import DOMPurify from "dompurify";

import styles from "./DetailedBlog.module.css";

export default function DetailedBlog() {
  const location = useLocation();
  const blog = location.state;
  const content = blog.writer.main_content;
  const sanitizedHtml = DOMPurify.sanitize(content);
  console.log(blog.writer);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Blog Post</h1>
      <div className={styles.blogPost}>
        <div className={styles.banner}>
          <img src={blog.writer.featured_image} alt="" />
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        ></div>
        <span>{blog.writer.created_at}</span>
      </div>
    </div>
  );
}

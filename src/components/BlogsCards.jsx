import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogsCards() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {data &&
        data.map((writer) => <BlogCard writer={writer} key={writer.id} />)}
    </>
  );
}

import CreatorCard from "./CreaterCard";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./CreaterCard.module.css";
import { useEffect, useState } from "react";

export default function CreaterList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://ttinit-api-54ffa078f75c.herokuapp.com/all_users/?page=${offset}&size=23`
      );

      if (!response.ok) throw new Error("Network response was not ok");
      const results = await response.json();
      const newData = results.results;

      setData((prev) => [...prev, ...newData]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;

      console.log(scrollHeight, currentHeight);

      if (currentHeight + 1 >= scrollHeight - 100 && offset) {
        setOffset((offset) => offset + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  const results = data;

  console.log(results);
  return (
    <div className={styles.tableContainer}>
      <Table className={styles.table}>
        <TableHeader>
          <TableRow>
            <TableHead className={styles.tableHead}> Creator</TableHead>
            <TableHead className={styles.tableHead}>GMV</TableHead>
            <TableHead className={styles.tableHead}> Items sold</TableHead>
            <TableHead className={styles.tableHead}>Avg. vidoe views</TableHead>
            <TableHead className={styles.tableHead}>Engagement Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className={styles.tableBody}>
          {results &&
            results.map((creator, index) => (
              <CreatorCard key={index} creator={creator} />
            ))}
          {loading && (
            <TableCell colspan={5}>
              <CircularProgress color="inherit" className={styles.indicator} />
            </TableCell>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

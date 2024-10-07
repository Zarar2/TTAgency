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
  const [hasMoreData, setHasMoreData] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(1);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://ttinit-api-54ffa078f75c.herokuapp.com/all_users/?page=${offset}&size=100`
      );

      if (!response.ok) throw new Error("Network response was not ok");
      const results = await response.json();

      const newData = results.results.filter(
        (user) => user?.sales_data?.gmv_numeric?.[0] > 10000
      );

      if (newData.length === 0 && results.results.length > 0) {
        setOffset((prev) => prev + 1);
      } else if (results.results.length === 0) {
        setHasMoreData(false);
      } else {
        setData((prev) => [...prev, ...newData]);
      }

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (hasMoreData) {
      fetchData();
    }
  }, [offset, hasMoreData]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;

      if (currentHeight + 1 >= scrollHeight - 100 && hasMoreData) {
        setOffset((offset) => offset + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  const results = data;

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
            <TableCell colSpan={5}>
              <CircularProgress color="inherit" className={styles.indicator} />
            </TableCell>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

import CreatorCard from "./CreaterCard";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import styles from "./CreaterCard.module.css";

const creators = [
  {
    name: "lolardz527",
    profilePic: "https://example.com/pic1.jpg",
    category: "Health, +2",
    followers: "9.7K, Female 61%, 35-44",
    gmv: "$5,365.67",
    itemsSold: 261,
    avgViews: 407,
    engagementRate: 4.0,
    isFastGrowing: true,
  },
  {
    name: "ceciliarun",
    profilePic: "https://example.com/pic2.jpg",
    category: "Beauty & Personal Care, +2",
    followers: "15.5K, Female 72%, 25-34",
    gmv: "$764.75",
    itemsSold: 32,
    avgViews: 1200,
    engagementRate: 3.8,
    isFastGrowing: false,
  },
  {
    name: "ceciliarun",
    profilePic: "https://example.com/pic2.jpg",
    category: "Beauty & Personal Care, +2",
    followers: "15.5K, Female 72%, 25-34",
    gmv: "$764.75",
    itemsSold: 32,
    avgViews: 1200,
    engagementRate: 3.8,
    isFastGrowing: true,
  },
  {
    name: "ceciliarun",
    profilePic: "https://example.com/pic2.jpg",
    category: "Beauty & Personal Care, +2",
    followers: "15.5K, Female 72%, 25-34",
    gmv: "$764.75",
    itemsSold: 32,
    avgViews: 1200,
    engagementRate: 3.8,
    isFastGrowing: true,
  },
];

export default function CreaterList() {
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
        <TableBody>
          {creators.map((creator, index) => (
            <CreatorCard key={index} creator={creator} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

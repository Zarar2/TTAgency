import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import img from "../assets/testimonials/Colin+Dougherty.jpg";
import { Badge } from "@/components/ui/badge";

import styles from "./CreaterCard.module.css";

export default function CreaterCard({ creator }) {
  const {
    name,
    profilePic,
    category,
    followers,
    gmv,
    itemsSold,
    avgViews,
    engagementRate,
    isFastGrowing,
  } = creator;

  return (
    <TableRow className={styles.tableRow}>
      <TableCell>
        <div className={styles.creator}>
          <div className={styles.profile}>
            <img src={img} alt="" />
          </div>
          <div>
            <h1>
              <strong>{name} </strong>
              {isFastGrowing && <Badge>fast growing</Badge>}
            </h1>
            <p>ninamartineze</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <strong>
          <span>{gmv}</span>
        </strong>
      </TableCell>
      <TableCell>
        <strong>
          <span>{itemsSold}</span>
        </strong>
      </TableCell>
      <TableCell>
        <strong>
          <span>{avgViews}</span>
        </strong>
      </TableCell>
      <TableCell>
        <strong>
          <span>{engagementRate}</span>
        </strong>
      </TableCell>
      <TableCell>
        <Button variant="outline">Invite</Button>
      </TableCell>
    </TableRow>
  );
}

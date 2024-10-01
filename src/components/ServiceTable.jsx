import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import styles from "./ServiceTable.module.css";
export default function ServiceTable() {
  return (
    <div className={styles.tableContainer}>
      <Table className={styles.table}>
        <TableHeader>
          <TableRow>
            <TableHead className={styles.tableHead}> Service</TableHead>
            <TableHead className={styles.tableHead}>Monthly Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <strong>Social Commerce</strong> <br /> TikTok Shop, Influencer
              Seeding, YouTube Shop
            </TableCell>
            <TableCell>
              starting at <br /> <strong>$5,000 + 3% rev share</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Retention Email + SMS Marketing
            </TableCell>
            <TableCell>
              starting at <br /> <strong>$4,000</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Creative Growth Plan</TableCell>
            <TableCell>
              <strong>$499</strong> (one time)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              In Person Strategy Session w/ Jordan
            </TableCell>
            <TableCell>
              {" "}
              <strong>$25,000+</strong> (one time)
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

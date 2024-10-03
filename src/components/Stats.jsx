import { Carousel } from "flowbite-react";
import styles from "./Stats.module.css";
import { Badge } from "@/components/ui/badge";
import "./Carousel.css";
import overview24_04 from "../assets/stats/overview-04.png";
import overview24_05 from "../assets/stats/overview-05.png";
import overview24_06 from "../assets/stats/overview-06.png";
import overview24_07 from "../assets/stats/overview-07.png";
import overview24_08 from "../assets/stats/overview-08.png";
import overview24_09 from "../assets/stats/overview-09.png";

export default function Stats() {
  return (
    <div className={styles.statsContainer}>
      <h1 className={styles.heading}>Here’s the brands stats</h1>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div>
            <div className={styles.stat}>
              <img src={overview24_04} alt="..." />

              <Badge className={styles.label}>first Month</Badge>
            </div>
          </div>

          <div>
            <div className={styles.stat}>
              <img src={overview24_05} alt="..." />
              <Badge className={styles.label}>Second Month</Badge>
            </div>
          </div>

          <div>
            <div className={styles.stat}>
              <img src={overview24_06} alt="..." />
              <Badge className={styles.label}>Third Month</Badge>
            </div>
          </div>

          <div>
            <div className={styles.stat}>
              <img src={overview24_07} alt="..." />
              <Badge className={styles.label}>Forth Month</Badge>
            </div>
          </div>

          <div>
            <div className={styles.stat}>
              <img src={overview24_08} alt="..." />
              <Badge className={styles.label}>Fifth Month</Badge>
            </div>
          </div>

          <div>
            <div className={styles.stat}>
              <img src={overview24_09} alt="..." />
              <Badge className={styles.label}>Fifth Month</Badge>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

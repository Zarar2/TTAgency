import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import user from "../assets/free-user-icon.png";
import { Button } from "@/components/ui/button";
import styles from "./CreaterCard.module.css";

export default function CreaterCard({ creator }) {
  const { user_name, bio_data, sales_data, videos_data, followers_data } =
    creator;
  let age = followers_data?.age?.followers_by_age_group;
  let maxPerAge = "";
  let max = 0;

  if (age) {
    for (let key in age) {
      let maxAge = Number(age[key].replace("%", ""));
      if (maxAge > max) {
        max = maxAge;
        maxPerAge = key;
      }
    }
  }

  return (
    <TableRow className={styles.tableRow}>
      <TableCell>
        <div className={styles.creator}>
          <div className={styles.profile}>
            <img src={user} alt="" />
          </div>
          <div>
            <h1>
              <strong>{user_name} </strong>
            </h1>
            <p className={styles.name}>{bio_data?.name}</p>

            <div className={styles.category}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"
                />
              </svg>
              <span>
                {bio_data?.categories?.[0]}, +{bio_data?.categories?.length - 1}
              </span>
            </div>

            <div className={styles.category}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5S5.5 6.57 5.5 8.5S7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35c.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35"
                />
              </svg>
              <span>
                {bio_data?.follower_count}
                {followers_data?.gender && ", Female "}
                {followers_data?.gender?.followers_by_gender?.Female}
                {", " + maxPerAge}
              </span>
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <strong>
          <span>{sales_data?.gmv ? sales_data?.gmv : "0"}</span>
        </strong>
      </TableCell>
      <TableCell>
        <strong>
          <span>{sales_data?.units_sold ? sales_data?.units_sold : "0"}</span>
        </strong>
      </TableCell>
      <TableCell>
        <strong>
          <span>
            {videos_data?.avg_video_views ? videos_data?.avg_video_views : "0"}
          </span>
        </strong>
      </TableCell>
      <TableCell>
        <strong>
          <span>
            {videos_data?.avg_video_engagement_rate
              ? videos_data?.avg_video_engagement_rate
              : "0%"}
          </span>
        </strong>
      </TableCell>
      <TableCell>
        <Button variant="outline">Invite</Button>
      </TableCell>
    </TableRow>
  );
}

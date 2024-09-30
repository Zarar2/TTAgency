import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link>PODCAST</Link>
        </li>
        <li>
          <Link>PRICING</Link>
        </li>
        <li>
          <Link>CASE STUDIES</Link>
        </li>
        <li>
          <Link>WHO ARE WE</Link>
        </li>
        <li>
          <Link>CAREERS</Link>
        </li>
      </ul>
    </nav>
  );
}

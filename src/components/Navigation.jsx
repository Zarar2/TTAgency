import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="pricing">PRICING</Link>
        </li>
        <li>
          <Link>CASE STUDIES</Link>
        </li>
        <li>
          <Link>WHO ARE WE</Link>
        </li>
      </ul>
    </nav>
  );
}

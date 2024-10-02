import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/pricing">PRICING</Link>
        </li>
        <li>
          <Link to="/testinomials">TESTINOMAILS</Link>
        </li>
        <li>
          <Link>CASE STUDIES</Link>
        </li>
        <li>
          <Link>WHO ARE WE</Link>
        </li>

        <li>
          <Link to="/data">AFFILAITE DATA</Link>
        </li>

        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
}

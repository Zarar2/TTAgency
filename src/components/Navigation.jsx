import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Button from "./Button";

export default function Navigation({ setIsModalOpen }) {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="pricing">PRICING</Link>
          </li>

          <li>
            <Link to="blogs">CASE STUDIES</Link>
          </li>
          <li>
            <Link to="about">WHO ARE WE</Link>
          </li>

          <li>
            <Link to="affiliatesData">AFFILAITE DATA</Link>
          </li>

          <li>
            <Link to="contact">CONTACT US</Link>
          </li>
        </ul>
      </nav>
      <Button onClick={() => setIsModalOpen(true)}>CONTACT</Button>
    </>
  );
}

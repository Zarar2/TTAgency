import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
    </div>
  );
}

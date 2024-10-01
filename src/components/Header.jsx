import Logo from "./Logo";
import styles from "./Header.module.css";
import Navigation from "./Navigation";

import ModalContact from "./ModalContact";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <ModalContact />
    </header>
  );
}

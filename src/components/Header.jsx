import Logo from "./Logo";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import Button from "./Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <Button>CONTACT</Button>
    </header>
  );
}

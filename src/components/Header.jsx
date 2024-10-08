import Logo from "./Logo";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import ModalContact from "./ModalContact";
import { useEffect, useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  // Function to check the screen size
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1150);
  };

  useEffect(() => {
    // Set initial value based on current screen width
    handleResize();

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isMobile);

  return (
    <header className={styles.header}>
      <Logo />
      {isMobile && <MobileNavigation setIsModalOpen={setIsModalOpen} />}

      {!isMobile && (
        <Navigation setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      )}

      <ModalContact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </header>
  );
}

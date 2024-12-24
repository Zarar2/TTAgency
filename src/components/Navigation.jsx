import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Button from "./Button";
import { useState, useEffect } from "react";
import BoostBundle from "./BoostBundle";

export default function Navigation({ setIsModalOpen }) {
  const [isTikTokDropdownOpen, setIsTikTokDropdownOpen] = useState(false);

  const handleDropdownClose = () => {
    setIsTikTokDropdownOpen(false);
  };

  const handleDropdownOpen = () => {
    setIsTikTokDropdownOpen(true);
  };

  // Disable scrolling on body when the dropdown is open
  useEffect(() => {
    let timeoutId; // Declare a timeout ID

    if (isTikTokDropdownOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      timeoutId = setTimeout(() => {
        document.body.style.overflow = "auto"; // Enable scrolling after a delay
      }, 100); // You can adjust the timeout delay as needed
    }

    // Cleanup: Remove overflow style or timeout if component unmounts
    return () => {
      clearTimeout(timeoutId); // Clear the timeout if effect cleanup happens
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
    };
  }, [isTikTokDropdownOpen]); // Run when the dropdown state changes
  
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li
            className={styles.dropdown}
            // onClick={handleDropdownOpen}
            onMouseEnter={handleDropdownOpen}
            // onMouseLeave={handleDropdownClose}
          >
            <span className={styles.dropdownTitle}>
              <Link to="/" onClick={handleDropdownClose}>
                TIKTOK DIGITAL MARKETING FIRM
              </Link>
              <span className={styles.dropdownArrow}>&#9662;</span>
            </span>
            {isTikTokDropdownOpen && (
              <div
                className={styles.dropdownContent}
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
                onClick={handleDropdownClose}
              >
                <BoostBundle />
              </div>
            )}
          </li>
          <li>
            <Link to="about" onClick={handleDropdownClose}>
              WHO WE ARE
            </Link>
          </li>
          <li>
            <Link to="pricing" onClick={handleDropdownClose}>
              PRICING
            </Link>
          </li>
          <li>
            <Link to="contact" onClick={handleDropdownClose}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
      <Button onClick={() => setIsModalOpen(true)}>CONTACT</Button>
    </>
  );
}

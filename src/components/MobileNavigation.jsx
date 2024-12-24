import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import "./MobileNavigation.css";

export default function MobileNavigation({ setIsModalOpen }) {
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggleMainDropdown = () => {
    setIsMainDropdownOpen(!isMainDropdownOpen);
    setActiveSubDropdown(null); // Reset sub-dropdown when main dropdown toggles
  };

  const toggleSubDropdown = (dropdownId) => {
    setActiveSubDropdown(activeSubDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Hamburger toggle={true} className="hamburger-button" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mobile-nav-wrapper">
          <ul className="nav-links">
            <li>
              <Link to="about">WHO WE ARE</Link>
            </li>
            <li>
              <Link to="pricing">PRICING</Link>
            </li>
            <li>
              <Link to="contact">CONTACT US</Link>
            </li>
            <li>
              <div className="dropdown-title" onClick={toggleMainDropdown}>
                TIKTOK DIGITAL MARKETING FIRM <span>&#9662;</span>
              </div>
              {isMainDropdownOpen && (
                <ul className="dropdown">
                  <li>
                    <div
                      className="dropdown-title"
                      onClick={() => toggleSubDropdown("tiktokServices")}
                    >
                      TIKTOK SERVICES <span>&#9656;</span>
                    </div>
                    {activeSubDropdown === "tiktokServices" && (
                      <ul className="sub-dropdown">
                        <li>
                          <Link to="tiktokAdCompaigns">TIKTOK AD COMPAIGNS</Link>
                        </li>
                        <li>
                          <Link to="shopHandlingServices">SHOP HANDLING SERVICES</Link>
                        </li>
                        <li>
                          <Link to="tiktokLive">TIKTOK LIVE</Link>
                        </li>
                        <li>
                          <Link to="newProductLaunches">NEW PRODUCT LAUNCHES</Link>
                        </li>
                        <li>
                          <Link to="accountManagement">ACCOUNT MANAGEMENT</Link>
                        </li>
                        <li>
                          <Link to="crossPlatformStrategies">CROSS PLATFORM STRATEGIES</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      className="dropdown-title"
                      onClick={() => toggleSubDropdown("leadScraper")}
                    >
                      LEAD SCRAPER <span>&#9656;</span>
                    </div>
                    {activeSubDropdown === "leadScraper" && (
                      <ul className="sub-dropdown">
                        <li>
                          COMING SOON
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      className="dropdown-title"
                      onClick={() => toggleSubDropdown("tiktokVoiceAgent")}
                    >
                      TIKTOK VOICE AGENTS <span>&#9656;</span>
                    </div>
                    {activeSubDropdown === "tiktokVoiceAgent" && (
                      <ul className="sub-dropdown">
                        <li>
                          COMING SOON
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      className="dropdown-title"
                      onClick={() => toggleSubDropdown("tiktokAffiliates")}
                    >
                      TIKTOK AFFILIATES <span>&#9656;</span>
                    </div>
                    {activeSubDropdown === "tiktokAffiliates" && (
                      <ul className="sub-dropdown">
                        <li>
                          <Link to="affiliatesData">AFFILIATE DATA</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={() => setIsModalOpen(true)}>CONTACT</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

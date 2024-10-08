import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import "./MobileNavigation.css";

export default function MobileNavigation({ setIsModalOpen }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <SheetClose asChild>
            <Hamburger toggle={true} className="hamburger-button" />
          </SheetClose>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="grid gap-4 py-4">
          <ul className="nav-links">
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

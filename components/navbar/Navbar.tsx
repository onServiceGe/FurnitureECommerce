import React from "react";
import Button from "../ui/Button";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="container py-4 rounded-md flex justify-between items-center">
        <Button
          bg="var(--color-main)"
          color="var(--color-white)"
          font="var(--font-mainBold)"
        >
          ონ დიზაინი
        </Button>
        <NavLinks />
        <NavIcons />
      </div>
    </nav>
  );
};

export default Navbar;

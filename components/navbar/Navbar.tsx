import React from "react";
import Button from "../ui/Button";
import NavLinks from "./NavLinks";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white">
      <div className="container py-4 rounded-md flex justify-between items-center">
        <Button
          bg="var(--color-main)"
          color="var(--color-white)"
          font="var(--font-mainBold)"
        >
          ონ დიზაინი
        </Button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;

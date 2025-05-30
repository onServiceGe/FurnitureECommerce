import { navLinks } from "@/api/navbar-links";
import Link from "next/link";
import React from "react";

const NavLinks: React.FC = () => {
  return (
    <div>
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            {/* მერე გადაკეთდება link.href ად */}
            <Link
              href={link.href}
              className="font-mainBold text-black relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;

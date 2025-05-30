import Link from "next/link";
import React from "react";

const NavLinks: React.FC = () => {
  const links = [
    {
      name: "მთავარი",
      href: "/",
    },
    {
      name: "კატალოგი",
      href: "/",
    },
    {
      name: "მიტანის სერვისი",
      href: "/",
    },
  ];
  return (
    <div>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-mainBold text-black">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;

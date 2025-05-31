import { FooterWrapperProps } from "@/lib/types/footer";
import React from "react";

const FooterWrapper: React.FC<FooterWrapperProps> = ({ children }) => {
  return (
    <footer className="bg-white mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-4 gap-42">{children}</div>
      </div>
    </footer>
  );
};

export default FooterWrapper;

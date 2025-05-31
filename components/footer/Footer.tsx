import React from "react";
import FooterWrapper from "./FooterWrapper";
import FooterLinks from "./FooterLinks";
import { footerData } from "@/api/footer-data";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      {footerData.map((section, index) => (
        <FooterLinks
          key={index}
          title={section.title}
          links={section.links}
          non_link={section.non_link}
        />
      ))}
    </FooterWrapper>
  );
};

export default Footer;

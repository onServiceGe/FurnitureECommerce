import { ReactNode } from "react";

export interface FooterLink {
  label: string;
  href: string;
  non_link?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
  non_link?: boolean;
}

export interface FooterLinksProps {
  title: string;
  links: FooterLink[];
  non_link?: boolean;
}

export interface FooterWrapperProps {
  children: ReactNode;
}

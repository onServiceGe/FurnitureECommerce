import { FooterLinksProps } from "@/lib/types/footer";

export const footerData: FooterLinksProps[] = [
  {
    title: "კომპანიის შესახებ",
    links: [
      {
        label:
          "მრავალფეროვანი არჩევანი და მარტივად მოწყობილი გარემო შენთვის, რათა შეარჩიო შენთვის მორგებული ავეჯი",
        href: "/",
        non_link: true,
      },
    ],
  },
  {
    title: "ნავიგაცია",
    links: [
      { label: "მთავარი", href: "/delivery" },
      { label: "ძებნა", href: "/returns" },
      { label: "კონტაქტი", href: "/payment" },
      { label: "მიტანის სერვისი", href: "/faq" },
    ],
  },
  {
    title: "კონტაქტი",
    links: [
      { label: "Facebook", href: "/category/sofas" },
      { label: "Instagram", href: "/category/chairs" },
      { label: "+995 598 92 15", href: "/category/tables" },
      { label: "onservicege@gmail.com", href: "/category/beds" },
    ],
  },
  {
    title: "ხშირად მოთხოვნადი",
    links: [
      { label: "ყავის მაგიდა", href: "tel:+995599999999" },
      { label: "ალუმინის კარი", href: "mailto:info@furniture.ge" },
      { label: "ხის სკამი", href: "#" },
      { label: "დიდი დივანი", href: "#" },
    ],
  },
];

import sofa from "@/public/assets/images/categories/sofa.png";
import closet from "@/public/assets/images/categories/closet.png";
import table from "@/public/assets/images/categories/table.png";
import door from "@/public/assets/images/categories/door.png";
export const categories = [
  {
    id: 1,
    title: "დივნები",
    image: sofa.src,
    cardBg: "bg-[#ff1e001a]",
    buttonBg: "var(--color-main)",
    textColor: "text-[var(--color-main)]",
  },
  {
    id: 2,
    title: "კარადები",
    image: closet.src,
    cardBg: "bg-[#ffae001a]",
    buttonBg: "#ffae00",
    textColor: "text-[#ffae00]",
  },
  {
    id: 3,
    title: "მაგიდები",
    image: table.src,
    cardBg: "bg-[#9c2be71a]",
    buttonBg: "#9c2be7",
    textColor: "text-[#9c2be7]",
  },
  {
    id: 4,
    title: "კარებები",
    image: door.src,
    cardBg: "bg-[#5454541a]",
    buttonBg: "#545454",
    textColor: "text-[#545454]",
  },
];

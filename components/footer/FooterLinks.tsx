import { FooterLinksProps } from "@/lib/types/footer";

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-main font-mainBold text-lg">{title}</h4>
      {links.map((link, index) => (
        <span
          key={index}
          className={`text-paragraph font-mainMedium  transition-colors ${
            !link.non_link ? "hover:text-main cursor-pointer" : ""
          }`}
        >
          {link.label}
        </span>
      ))}
    </div>
  );
};

export default FooterLinks;

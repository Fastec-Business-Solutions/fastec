import Logo from "../Logo";

const Footer = () => {
  const footerLinks = [
    { name: "Copy Rights", href: "#" },
    { name: "Privacy & Policy", href: "#" },
    { name: "Terms & Condition", href: "#" },
  ];
  return (
    <div className="flex flex-col sm:flex-row px-4 md:px-8 lg:px-20 py-4 md:py-7 justify-between items-center bg-white gap-4 md:gap-0">
      <Logo />

      <ul className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-10">
        {footerLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="font-medium text-sm md:text-base hover:underline text-center"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

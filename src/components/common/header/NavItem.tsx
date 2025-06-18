type NavItemProps = {
  label: React.ReactNode;
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  href?: string;
};

const NavItem: React.FC<NavItemProps> = ({
  label,
  isActive,
  onClick,
  href,
}) => {
  return (
    <a
      className={`cursor-pointer relative flex flex-col items-center ${
        isActive ? "bg-gradient-header" : "text-black hover:bg-gradient-header"
      }`}
      onClick={onClick}
      href={href}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-4 left-1/2 w-2 h-2 dotted-active-style rounded-full transform -translate-x-1/2" />
      )}
    </a>
  );
};

export default NavItem;

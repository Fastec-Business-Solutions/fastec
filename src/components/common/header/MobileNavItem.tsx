import NavItem from "./NavItem";

type MobileNavItemProps = {
  isOpen: boolean;
  activeItem: string;
  onClose: () => void;
  setActiveItem: (item: string) => void;
  requestCallBack: () => void;
};

const MobileNavItem = ({
  isOpen,
  activeItem,
  onClose,
  setActiveItem,
  requestCallBack,
}: MobileNavItemProps) => {
  if (!isOpen) return null;

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about-us" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact-us" },
  ];
  return (
    <div className="relative md:hidden z-50">
      <div className="flex flex-col items-center bg-white shadow-2xl py-8 px-6 ">
        <div>
          <div className="flex justify-end absolute right-2 top-1">
            <button onClick={onClose} className="text-gray-600 text-xl mb-4">
              ✕
            </button>
          </div>
          <nav className="flex flex-col space-y-8 font-family-inter font-light text-[12px]">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                isActive={activeItem === item.label}
                onClick={() => {
                  setActiveItem(item.label);
                  onClose();
                }}
              />
            ))}
          </nav>
        </div>
        <div className="mt-6 ">
          <button
            onClick={() => {
              requestCallBack();
              onClose();
            }}
            type="submit"
            className="w-full sm:w-auto px-2 py-2 bg-gradient-secondary-to-primary text-white rounded-full font-light text-[12px]"
          >
            Request Call Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavItem;

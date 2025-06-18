import { useState } from "react";

import { HiOutlineBars3 } from "react-icons/hi2";

import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";
import { Icons } from "../../../lib/utils/Icons";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about-us" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact-us" },
  ];

  const handleRequestCallBack = () => {
    window.location.href = "#contact-us";
  };

  const handleReload = () => {
    window.location.reload();
  };
  return (
    <>
      <header className="flex items-center relative justify-between px-[120px] lg:px-[100px] md:px-8  py-8 shadow-[5px_14px_45px_0_rgba(0,0,0,0.02)] rounded-3xl header-bg max-sm:px-3 min-[640px]:px-2">
        <div
          onClick={handleReload}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img
            src={Icons.Logo.src}
            alt={Icons.Logo.alt}
            className="md:h-8 w-auto max-sm:h-4 min-[640px]:h-6"
          />
          <img
            src={Icons.Fastec.src}
            alt={Icons.Fastec.alt}
            className="md:h-8 w-auto max-sm:h-4 min-[640px]:h-6"
          />
        </div>
        <div className="flex items-center gap-30 sm:gap-8">
          <nav className="flex space-x-10 font-family-inter font-light text-[14px] md:flex-row md:space-y-0 md:space-x-7 text-sm max-sm:hidden min-[640px]:space-x-3">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                isActive={activeItem === item.label}
                onClick={() => setActiveItem(item.label)}
              />
            ))}
          </nav>
          <button
            type="submit"
            className="cursor-pointer w-full sm:w-auto px-6 py-3 bg-gradient-secondary-to-primary text-white font-semibold rounded-full md:px-4 md:py-2 max-sm:hidden"
            onClick={handleRequestCallBack}
          >
            Request Call Back
          </button>
        </div>
        <div className="min-[640px]:hidden">
          <HiOutlineBars3 onClick={() => setIsMobileNavOpen(true)} />
        </div>

        <div className="absolute top-20 right-0 ">
          {isMobileNavOpen && (
            <MobileNavItem
              isOpen={isMobileNavOpen}
              activeItem={activeItem}
              onClose={() => setIsMobileNavOpen(false)}
              setActiveItem={setActiveItem}
              requestCallBack={handleRequestCallBack}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

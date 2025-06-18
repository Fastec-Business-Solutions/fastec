import { Icons } from "../../lib/utils/Icons";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <img src={Icons.Logo.src} alt={Icons.Logo.alt} />
      <img src={Icons.Fastec.src} alt={Icons.Fastec.alt} />
    </div>
  );
};

export default Logo;

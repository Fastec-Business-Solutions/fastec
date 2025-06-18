import { Icons } from "../../lib/utils/Icons";

interface TopNotchProps {
  isTransparent?: boolean;
}

const TopNotch = ({ isTransparent }: TopNotchProps) => {
  const backgroundContainerClass = isTransparent
    ? "bg-white/20"
    : "bg-tertiary-blue/20";
  return (
    <div className="max-w-[295px] h-[41px] relative">
      <div
        className={` w-[292px] h-[41px] top-0 left-px ${backgroundContainerClass} rounded-[60px]`}
      />
      <div
        className={`absolute h-[17px] top-3 left-[53px] font-family-inter font-medium text-[#000000] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap ${
          isTransparent ? "text-white" : ""
        }`}
      >
        Top notch business consultancy
      </div>
      <div className="absolute w-[41px] h-[41px] top-0 left-0 bg-gradient-secondary-to-primary rounded-full">
        <img
          className="absolute w-4 h-4 top-[13px] left-[13px]"
          alt={Icons.Star.alt}
          src={Icons.Star.src}
        />
      </div>
    </div>
  );
};

export default TopNotch;

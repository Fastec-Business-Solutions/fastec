interface RoundedDesignProps {
  size: "small" | "medium" | "large" | "xlarge";
  icon: React.ReactNode;
  isTransparent?: boolean;
  isPointer?: boolean;
  onClick?: () => void;
}

const RoundedDesign = ({
  size,
  icon,
  isTransparent,
  isPointer,
  onClick = () => {},
}: RoundedDesignProps) => {
  const sizeClasses = {
    small: "p-2",
    medium: "p-4",
    large: "p-5",
    xlarge: "p-5",
  };

  const paddingClass = sizeClasses[size];
  const pointerClass = isPointer ? "cursor-pointer" : "";
  const backgroundClass = isTransparent
    ? "bg-white border-gradient-secondary-to-primary"
    : "bg-gradient-secondary-to-primary max-md:p-[17px]";

  const combinedClasses = [
    "rounded-full",
    pointerClass,
    paddingClass,
    backgroundClass,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={combinedClasses} onClick={onClick}>
      {icon}
    </div>
  );
};

export default RoundedDesign;

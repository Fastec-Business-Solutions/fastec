import RoundedDesign from "../common/RoundedDesign";
import { Icons } from "../../lib/utils/Icons";

export interface CardProps {
  cardSize: "small" | "medium" | "large";
  cardtext?: string;
  cardImage?: boolean;
  cardNumber?: string;
  highlighted?: boolean;
}

const Card = ({
  cardSize,
  cardtext,
  cardImage,
  cardNumber,
  highlighted,
}: CardProps) => {
  let sizeClasses = "";

  if (cardSize === "large") {
    sizeClasses = "w-[217px] h-[225px]";
  } else if (cardSize === "medium") {
    sizeClasses = "w-[187px] h-[193px] ";
  } else if (cardSize === "small") {
    sizeClasses = "w-[140px] h-[150px] ";
  }

  const backgroundClasses = highlighted
    ? "bg-white/70 backdrop-blur-[104px]"
    : "bg-white";

  return (
    <div
      className={`${backgroundClasses} ${sizeClasses} rounded-3xl p-4 flex flex-col justify-between shadow-[5px_14px_45px_#00000008]`}
    >
      <div className="flex justify-between items-start">
        <span className="text-sm text-gray-400 font-semibold">
          {cardNumber}
        </span>
        {cardImage ? (
          <RoundedDesign
            icon={
              <img
                src={Icons.Star.src}
                alt={Icons.Star.alt}
                className="w-4 h-4"
              />
            }
            size="medium"
          />
        ) : null}
      </div>
      <div className="rounded-[20px] w-fit p-1">
        <h2
          className={`${
            cardSize == "small" ? "text-base" : "text-xl"
          }  font-semibold`}
        >
          <span>{cardtext}</span>
        </h2>
      </div>
    </div>
  );
};

export default Card;

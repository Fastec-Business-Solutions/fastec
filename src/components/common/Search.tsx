import { IoChevronDown } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";

import RoundedDesign from "./RoundedDesign";

const Search = () => {
  const searchItems = [
    "Business Domain",
    "Region in Qatar",
    "Time slot for enquiry",
  ];
  const handleRequestCallBack = () => {
    window.location.href = "#contact-us";
  };
  return (
    <div className="font-family-inter flex flex-row items-center justify-between w-[95%] md:w-[90%] mx-auto p-4 md:p-8 backdrop-blur-md shadow-base rounded-search bg-white">
      <ul className="flex max-[830px]:flex-col flex-row items-center justify-evenly w-full xl:w-[60%] lg:w-full">
        {searchItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 md:gap-5 mb-2 text-sm md:text-lg"
          >
            <span className="text-center md:text-left">{item}</span>
            <IoChevronDown className="text-sm md:text-base" />
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 md:gap-3">
        <p className="text-secondary-text-blue text-sm md:text-base max-xl:hidden">
          Get Started
        </p>
        <RoundedDesign
          icon={
            <BiRightArrowAlt
              color="white"
              size={24}
              className="md:w-[30px] md:h-[30px]"
            />
          }
          size="large"
          onClick={handleRequestCallBack}
          isPointer={true}
        />
      </div>
    </div>
  );
};

export default Search;

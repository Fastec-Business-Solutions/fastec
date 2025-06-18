import FAQAccordion from "./FAQAccordion";
import { Images } from "../../lib/utils/Images";

const FAQ = () => {
  return (
    <div className="w-full text-white relative lg:grid-cols-2 grid-cols-1 grid p-10 md:px-14 px-5 bg-gradient-secondary-to-primary rounded-[50px]">
      <div className="flex flex-col justify-evenly items-start md:mb-20 w-full md:w-[60%] mx-auto leading-[1.3]">
        <h1 className="uppercase font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] mb-4 md:mb-0">
          Are you Facing these <span className="font-extrabold">problems</span>{" "}
        </h1>
        <p className="font-family-inter text-sm sm:text-base">
          With the right support, business challenges become easier. We offer
          <span className="font-bold">
            {" "}
            strategic, tailored solutions to boost growth, streamline
            operations, and stay competitive,
          </span>{" "}
          delivering expert, cost-effective guidance for success.
        </p>
      </div>
      <FAQAccordion />
      <img
        src={Images.BackgroundEffect.src}
        alt={Images.BackgroundEffect.alt}
        className="absolute left-0 bottom-0 w-full pointer-events-none"
      />
    </div>
  );
};

export default FAQ;

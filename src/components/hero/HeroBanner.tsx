import SmartSuggestion from "./SmartSuggestion";
import SuccessRate from "./SuccessRate";
import TopNotch from "../common/TopNotch";

const HeroBanner = () => {
  return (
    <div className=" flex flex-wrap px-10 pb-32 justify-between overflow-hidden">
      <div className="flex-1 flex flex-col items-center max-[761px]:mt-10 mt-[100px]  space-y-6">
        <div className="space-y-10">
          <TopNotch />
          <h2 className="font-family-jakarta text-[52px] leading-tight max-[1220px]:text-[30px] max-[788px]:text-[23px]">
            <span className="block">UNLOCK YOUR {""}</span>
            <span className="block font-family-jakarta font-bold text-gradient-secondary-to-primary ">
              BUSINESS POTENTIAL
            </span>
            <span className="block">WITH OUR STRATEGIC</span>
            <span>CONSULTING</span>
          </h2>
        </div>
        <div className="flex max-[761px]:w-full max-[761px]:justify-center w-[70%] mx-auto items-center justify-end max-[1220px]:text-[13px] max-[788px]:text-[12px] ">
          <p className="font-normal leading-relaxed max-w-lg">
            <span className="block">Guiding your business journey with</span>
            <span className="font-bold text-gradient-secondary-to-primary">
              unwavering expertise, cutting-edge{" "}
            </span>
            <span className="block">
              innovation , and a dedicated commitment to
            </span>
            <span className="block">
              driving your success every step of the way
            </span>
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-wrap justify-center gap-10 max-[622px]:py-20 py-32">
        <SuccessRate />
        <div className="mt-16">
          <SmartSuggestion />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

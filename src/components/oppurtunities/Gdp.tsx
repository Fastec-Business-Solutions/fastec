import RoundedDesign from "../common/RoundedDesign";
import { Icons } from "../../lib/utils/Icons";
import { Images } from "../../lib/utils/Images";

const Gdp = () => {
  return (
    <div className="relative w-[102px] md:w-[153px] lg:w-[204px] h-[123px] md:h-[185px] lg:h-[246px] overflow-visible">
      <div>
        <img
          loading="lazy"
          src={Images.Gdp.src}
          alt={Images.Gdp.alt}
          className=" w-[102px] md:w-[153px] lg:w-auto"
        />
      </div>
      <div className="absolute left-[-22px] md:left-[-33px] lg:left-[-44px] top-[-21px] md:top-[-31px] lg:top-[-41px]">
        <RoundedDesign
          size="xlarge"
          icon={
            <img
              loading="lazy"
              src={Icons.Grow.src}
              alt={Icons.Grow.alt}
              className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]"
            />
          }
        />
      </div>
    </div>
  );
};

export default Gdp;

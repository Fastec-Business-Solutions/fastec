import Flag from "./Flag";
import Gdp from "./Gdp";
import TallBuilding from "./TallBuilding";

const Oppurtunities = () => {
  return (
    <div className="flex min-[1285px]:relative flex-col lg:flex-row lg:flex-wrap max-xl:items-center items-start justify-between pt-5 md:pt-10 pb-0 w-[95%] lg:w-[90%] mx-auto gap-10 lg:gap-20 overflow-hidden">
      <div className="flex flex-col max-xl:items-center items-start justify-between flex-1 gap-10 md:gap-20 lg:gap-40">
        <h1 className="uppercase text-[28px] md:text-[42px] lg:text-[52px] leading-[1.3] font-medium max-w-full max-xl:text-center md:max-w-[80%] lg:max-w-[60%] ml-2 md:ml-5 lg:ml-10 mt-2 md:mt-5">
          {" "}
          <span className="text-secondary-blue font-extrabold">Qatar</span> the
          land of opportunities
        </h1>
        <div className="min-[1285px]:absolute bottom-0 left-[-80px]">
          <Flag />
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 min-[1285px]:pt-32 pt-5 items-center sm:gap-30 gap-10">
        <div>
          <p className="font-family-inter text-sm md:text-base lg:text-lg leading-[1.3] text-center lg:text-left px-4 lg:px-0">
            Qatar is an ideal place to start a business, offering a{" "}
            <span className="text-secondary-blue font-bold">
              strong economy, investor-friendly policies, and top-tier
              infrastructure.{" "}
            </span>{" "}
            Its strategic location, tax benefits, and government support create
            a dynamic environment for growth. Whether you're a startup or an
            established firm,{" "}
            <span className="text-secondary-blue font-bold">
              Qatar's innovation-driven market offers great opportunities to
              launch and expand.
            </span>{" "}
          </p>
        </div>
        <div className="flex sm:gap-5 gap-2 items-center max-sm:flex-wrap max-[370px]:flex-col justify-center pb-10">
          <div className="lg:mt-52">
            <Gdp />
          </div>
          <div className="max-[370px]:mt-6">
            <TallBuilding />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oppurtunities;

import { Images } from "../../lib/utils/Images";

const TallBuilding = () => {
  return (
    <div className="relative w-[200px] md:w-[300px] lg:w-[400px]">
      <div className="absolute right-[-40px] -z-10 md:right-[-120px] lg:right-[12px] top-[-65px] md:top-[-120px] lg:top-[-96px]">
        <img
          src={Images.PersonEffect.src}
          alt={Images.PersonEffect.alt}
          className="w-[160px] md:w-[280px] lg:w-auto"
        />
      </div>
      <div className="">
        <img
          src={Images.TallBuilding.src}
          alt={Images.TallBuilding.alt}
          className="w-[180px] md:w-[300px] lg:w-auto"
        />
      </div>
      <div className="bg-white p-3 md:p-4 lg:p-5 rounded-[15px] md:rounded-[20px] lg:rounded-[30px] absolute top-[-34px] md:top-[-50px] lg:top-[-67px] left-[-44px] md:left-[-66px] lg:left-[-88px]">
        <img
          src={Images.HandShake.src}
          alt={Images.HandShake.alt}
          className="w-[40px] md:w-[60px] lg:w-auto"
        />
      </div>
    </div>
  );
};

export default TallBuilding;

import { Images } from "../../lib/utils/Images";

const SuccessRate = () => {
  return (
    <div className="relative w-[200px] h-[243px] flex justify-center items-center">
      <div className="absolute top-[-100px] left-[-100px] w-[259px] h-[259px] max-[761px]:w-[150px] max-[761px]:h-[150px] max-[761px]:left-[-50px] max-[761px]:top-[-50px]">
        <img src={Images.PersonEffect.src} alt={Images.PersonEffect.alt} />
      </div>
      <div className="w-[200px] h-[243px]">
        <img
          src={Images.SuccessRate.src}
          alt={Images.SuccessRate.alt}
          className="w-fit h-fit"
        />
      </div>
      <div className="absolute top-[-60px] right-[-50px] w-[112px] h-[112px] max-[761px]:w-[80px] max-[761px]:h-[80px] max-[761px]:right-[-35px] max-[761px]:top-[-30px]">
        <img src={Images.Person1.src} alt={Images.Person1.alt} />
      </div>
    </div>
  );
};

export default SuccessRate;

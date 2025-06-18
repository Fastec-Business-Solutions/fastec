import Card from "./Card";
import { Images } from "../../lib/utils/Images";

const SmartSuggestion = () => {
  return (
    <div className="relative max-[640px]:w-[250px] max-[640px]:h-[250px] w-[389px] h-[479px] flex justify-center items-center">
      <div className="w-[53px] h-[44px] absolute top-[-40px] right-[-30px] max-[640px]:w-[33px] max-[640px]:top-[-60px] max-[640px]:right-[-20px]">
        <img
          src={Images.ImageHighLighter.src}
          alt={Images.ImageHighLighter.alt}
          className="w-full h-full"
        />
      </div>
      <div>
        <img src={Images.Person2.src} alt={Images.Person2.alt} />
      </div>
      <div className="absolute left-[-120px] bottom-[-100px] max-[640px]:hidden">
        <Card
          cardSize="large"
          cardtext="Smart Suggestions"
          cardImage={true}
          cardNumber="01"
          highlighted={false}
        />
      </div>
      <div className="absolute left-[-50px] bottom-[-100px] min-[640px]:hidden">
        <Card
          cardSize="small"
          cardtext="Smart Suggestions"
          cardImage={true}
          cardNumber="01"
          highlighted={false}
        />
      </div>
      <div className="-z-10 absolute right-[-110px] bottom-[-100px] max-[640px]:w-[150px] max-[640px]:right-[-60px] max-[640px]:bottom-[-90px]">
        <img src={Images.PersonEffect.src} alt={Images.PersonEffect.alt} />
      </div>
    </div>
  );
};

export default SmartSuggestion;

import { Images } from "../../lib/utils/Images";

const Flag = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-29px] right-[100px] max-lg:right-[10%] max-[500px]:top-[0%] max-md:top-[0%]">
        <img
          src={Images.ImageHighLighter.src}
          alt={Images.ImageHighLighter.alt}
          className="max-lg:w-[50px] max-lg:h-[50px] "
        />
      </div>
      <div>
        <img
          src={Images.Flag.src}
          alt={Images.Flag.alt}
          className="lg:w-[700px] lg:h-[450px] w-[600px] h-[350px] min-[500px]:w-[700px] min-[500px]:h-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default Flag;

import { Images } from "../../lib/utils/Images";

const ExampleStory = () => {
  return (
    <div className="relative max-md:w-full w-[674px] md:h-[304px] min-[530px]:h-[250px] font-family-inter bg-white min-[530px]:p-10 px-4 pt-5 pb-0 rounded-[30px]">
      <div className="min-[530px]:w-[60%] w-full flex flex-col justify-between h-full">
        <p className="max-sm:text-xs max-md:text-sm">
          Working with this team has been a{" "}
          <span className="text-primary-text-blue font-bold">
            game-changer for our business.
          </span>{" "}
          Their expertise, strategic guidance, and personalized approach helped
          us streamline operations and expand into new markets seamlessly. Their{" "}
          <span className="text-primary-text-blue font-bold">
            commitment to our success
          </span>{" "}
          was evident at every step.
        </p>
        <p className="max-sm:text-xs max-md:text-sm max-[530px]:mt-4">
          -John Doe, CEO <strong>XYZ</strong> Enterprises
        </p>
      </div>
      <img
        className="min-[530px]:absolute right-[-28px] max-md:right-[-30px] bottom-0 max-md:w-[250px] max-md:h-[250px]"
        src={Images.Person3.src}
        alt={Images.Person3.alt}
      />
      <img
        className="absolute right-[-22px] top-[-52px] max-sm:top-[-32px] max-sm:w-[40px] max-sm:h-[40px] w-auto h-auto"
        src={Images.ImageHighLighter.src}
        alt={Images.ImageHighLighter.alt}
      />
      <img
        className="absolute -z-10 left-[-98px] top-[-104px] max-md:left-[-60px] max-md:top-[-70px] w-[200px] md:w-[300px] lg:w-auto"
        src={Images.PersonEffect.src}
        alt={Images.PersonEffect.alt}
      />
    </div>
  );
};

export default ExampleStory;

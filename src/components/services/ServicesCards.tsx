import Card from "../hero/Card";
import { Images } from "../../lib/utils/Images";

const cardData = [
  { number: "01", title: "Tailored solutions", isHighlighted: false },
  { number: "02", title: "Expertise in corporation", isHighlighted: true },
  null,
  { number: "03", title: "Public Relations Management", isHighlighted: true },
  { number: "04", title: "Maximised Efficiency", isHighlighted: false },
  { number: "05", title: "Tailored solutions", isHighlighted: true },
  null,
  { number: "06", title: "Tailored solutions", isHighlighted: false },
  { number: "07", title: "Personalised consultancy", isHighlighted: false },
];

const visibleCardData = [
  { number: "01", title: "Tailored solutions", isHighlighted: false },
  { number: "02", title: "Expertise in corporation", isHighlighted: true },
  { number: "03", title: "Public Relations Management", isHighlighted: true },
  { number: "04", title: "Maximised Efficiency", isHighlighted: false },
  { number: "05", title: "Tailored solutions", isHighlighted: true },
  { number: "06", title: "Tailored solutions", isHighlighted: false },
  { number: "07", title: "Personalised consultancy", isHighlighted: false },
];

const ServicesCards = () => {
  return (
    <div
      id="services"
      className="relative min-h-screen w-full flex flex-col justify-center"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={Images.ServiceBackground.src}
          alt={Images.ServiceBackground.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute left-0 bottom-0 w-full pointer-events-none -z-10">
        <img
          src={Images.BackgroundEffect.src}
          alt={Images.BackgroundEffect.alt}
          className="w-full"
        />
      </div>

      <div className="flex flex-col min-[800px]:ml-[120px] gap-[94px]  max-[1380px]:mt-18  max-[801px]:gap-[48px] max-[801px]:mx-auto my-[20px] max-[801px]:w-[90%] max-[801px]:items-center">
        <h2 className="text-white font-family-jakarta text-5xl leading-tight max-lg:text-[30px] ">
          <span className="block">WHAT MAKES US</span>
          <span className="font-family-jakarta text-5xl font-bold text-gradient-secondary-to-primary  max-lg:text-[35px]">
            EXCEPTIONAL
          </span>
        </h2>
        <p className="text-white font-family-inter text-base leading-relaxed break-words max-w-xl  max-lg:text-[16px]">
          We offer tailored business incorporation services for a{" "}
          <b>
            smooth setup, strategic PR to boost brand presence, and efficient
            processes
          </b>{" "}
          to streamline operations. Our personalized consultancy ensures expert
          guidance at every stage.
        </p>
      </div>

      <div className="max-[1360px]:hidden grid grid-cols-2 md:grid-cols-3 gap-6 absolute right-[100px] bottom-[-100px] ">
        {cardData.map((card, index) => {
          if (!card) {
            return <div key={`empty-${index}`} />;
          }

          return (
            <Card
              key={index}
              cardtext={card.title}
              cardSize={"medium"}
              cardImage={false}
              cardNumber={card.number}
              highlighted={card.isHighlighted}
            />
          );
        })}
      </div>

      <div className="min-[1360px]:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 place-items-center px-10 py-5">
        {visibleCardData.map((card, index) => {
          if (!card) {
            return <div key={`empty-${index}`} />;
          }

          return (
            <Card
              key={index}
              cardtext={card.title}
              cardSize={"small"}
              cardImage={false}
              cardNumber={card.number}
              highlighted={card.isHighlighted}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCards;

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import RoundedDesign from "../common/RoundedDesign";
import ExampleStory from "./ExampleStory";

const ClientStories = () => {
  const [progress, setProgress] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const duration = 7000;
    const intervalMs = 100;
    const increment = 100 / (duration / intervalMs);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setImageIndex((idx) => (idx + 1) % 3);
          return 0;
        }
        return prev + increment;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      id="about-us"
      className="flex flex-col flex-wrap gap-6 md:gap-10 p-4 md:p-10 mt-6 md:mt-10 w-[95%] md:w-[90%] mx-auto"
    >
      <div className="text-left">
        <h1 className="text-[32px] md:text-[42px] lg:text-[52px] font-medium uppercase leading-tight">
          Client <br />
          <span className="font-extrabold text-gradient-secondary-to-primary">
            success stories
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row-reverse flex-wrap items-center justify-center xl:justify-between gap-6">
        <div className="flex flex-col items-start gap-2 order-2 md:order-1">
          <div className="flex items-center gap-5">
            <RoundedDesign
              icon={
                <BiLeftArrowAlt size={20} className="text-primary-icon-blue" />
              }
              size="large"
              isTransparent={true}
              isPointer={true}
              onClick={() => {
                setImageIndex((prev) => (prev - 1 + 3) % 3);
                setProgress(0);
              }}
            />
            <RoundedDesign
              icon={<BiRightArrowAlt size={20} color="white" />}
              size="large"
              isPointer={true}
              onClick={() => {
                setImageIndex((prev) => (prev + 1) % 3);
                setProgress(0);
              }}
            />
          </div>
          <div className="w-[120px] md:w-[300px] h-[5px] bg-[#E2E2E2] rounded-full mt-2 relative overflow-hidden">
            <div
              className="h-full bg-gradient-secondary-to-primary rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="">
          <AnimatePresence mode="wait">
            <motion.div
              key={imageIndex}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.7, ease: "backOut" }}
            >
              <ExampleStory />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ClientStories;

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import RoundedDesign from '../common/RoundedDesign';
import ExampleStory from './ExampleStory';
import { Images } from '../../lib/utils/Images';

export type Story = {
  id: number;
  content: string;
  author: string;
  image: {
    src: string;
    alt: string;
  };
};

const stories: Story[] = [
  {
    id: 1,
    content: `FASTEC exceeded our expectations! Their expert advice and guidance transformed our business strategy, 
    leading to significant growth and improved efficiency. Their team's professionalism, expertise, and dedication were outstanding. 
    We highly recommend FASTEC to anyone seeking top-notch consultancy services.
`,
    author: 'Mrs. Anna Tech Yu Yan (Singapore)',
    image: {
      src: Images.Person3.src,
      alt: Images.Person3.alt,
    },
  },
  {
    id: 2,
    content: `
    FASTEC made a real difference. Their expertise and professional approach boosted our efficiency and growth.
     A trusted partner in every sense.

    `,
    author: 'Mrs. Fhranches Palattao Luyun (Philippines)',
    image: {
      src: Images.Person4.src,
      alt: Images.Person4.alt,
    },
  },
  {
    id: 3,
    content: `
    We are truly grateful for FASTEC's support. 
    Their expertise and professional commitment helped us achieve new levels of growth and efficiency. 
    They've proven to be a reliable and valued partner every step of the way.

    `,
    author: 'Mrs. Kanyanat Meesaeng (Thailand)',
    image: {
      src: Images.Person5.src,
      alt: Images.Person5.alt,
    },
  },
  {
    id: 4,
    content: `
    FASTEC is more than just a consultancy — they're a true partner in progress. 
   Their knowledgeable team and strategic guidance led to measurable improvements in our operations and growth.
    `,
    author: 'Mrs. Jenny Lou Collanter Adornado (Philippines)',
    image: {
      src: Images.Person6.src,
      alt: Images.Person6.alt,
    },
  },
  {
    id: 5,
    content: `
    With FASTEC by our side, we experienced real transformation. Their support, expertise, 
    and commitment helped our business move forward with confidence and success.
    `,
    author: 'Mrs. Nurul Hafizah Binti Zakaria (Malaysia)',
    image: {
      src: Images.Person4.src,
      alt: Images.Person4.alt,
    },
  },
];

const ClientStories = () => {
  const [progress, setProgress] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  useEffect(() => {
    const duration = 7000;
    const intervalMs = 100;
    const increment = 100 / (duration / intervalMs);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setStoryIndex((idx) => (idx + 1) % stories.length);
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
                setStoryIndex(
                  (prev) => (prev - 1 + stories.length) % stories.length
                );
                setProgress(0);
              }}
            />
            <RoundedDesign
              icon={<BiRightArrowAlt size={20} color="white" />}
              size="large"
              isPointer={true}
              onClick={() => {
                setStoryIndex((prev) => (prev + 1) % stories.length);
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

        <AnimatePresence mode="wait">
          <motion.div
            key={storyIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'backOut' }}
          >
            <ExampleStory story={stories[storyIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClientStories;

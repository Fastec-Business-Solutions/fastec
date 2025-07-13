import BackgroundEffect from '../../assets/images/background-effect.svg';
import ContactUsBackground from '../../assets/images/contact-us-background.svg';
import SuccessRate from '../../assets/images/success-rate.svg';
import Person1 from '../../assets/images/person-1.svg';
import PersonEffect from '../../assets/images/person-effect.svg';
import Person2 from '../../assets/images/person-2-large.svg';
import ImageHighLighter from '../../assets/images/image-highlighter.svg';
import ServiceBackground from '../../assets/images/services-background.svg';
import Flag from '../../assets/images/flag.png';
import Gdp from '../../assets/images/gdp.svg';
import TallBuilding from '../../assets/images/tall-building.svg';
import HandShake from '../../assets/images/hand-shake.svg';
import Person3 from '../../assets/images/person-3.svg';
import ServiceBg from '../../assets/images/services-bg.svg';
import Person4 from '../../assets/images/person-4.png';
import Person5 from '../../assets/images/person-5.png';
import Person6 from '../../assets/images/person-6.png';

interface ImageData {
  src: string;
  alt: string;
}

export const Images = {
  BackgroundEffect: {
    src: BackgroundEffect,
    alt: 'Background effect image',
  },
  ContactUsBackground: {
    src: ContactUsBackground,
    alt: 'Contact us background image',
  },
  SuccessRate: {
    src: SuccessRate,
    alt: 'Success rate image',
  },
  Person1: {
    src: Person1,
    alt: 'Person 1 image',
  },
  PersonEffect: {
    src: PersonEffect,
    alt: 'Person effect image',
  },
  Person2: {
    src: Person2,
    alt: 'Smart suggestion image',
  },
  ImageHighLighter: {
    src: ImageHighLighter,
    alt: 'Image highlighter',
  },
  ServiceBackground: {
    src: ServiceBackground,
    alt: 'Service background image',
  },
  Flag: {
    src: Flag,
    alt: 'Flag image',
  },
  Gdp: {
    src: Gdp,
    alt: 'GDP image',
  },
  TallBuilding: {
    src: TallBuilding,
    alt: 'Tall building image',
  },
  HandShake: {
    src: HandShake,
    alt: 'Handshake image',
  },
  Person3: {
    src: Person3,
    alt: 'Person 3 image',
  },
  Person4: {
    src: Person4,
    alt: 'Person 3 image',
  },
  Person5: {
    src: Person5,
    alt: 'Person 3 image',
  },
  Person6: {
    src: Person6,
    alt: 'Person 3 image',
  },
  ServiceBg: {
    src: ServiceBg,
    alt: 'Service Background',
  },
} as const satisfies Record<string, ImageData>;

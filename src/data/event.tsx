export enum EventType {
  'pre-event-1-1',
  'pre-event-1-2',
  'pre-event-1-3',
  'pre-event-2',
}

export type PreEventThumbnailVideoType = {
  backgroundImage: string;
  title: React.ReactNode;
  subTitle: string;
  description: string;
};

export type PreEventDataType = {
  type: keyof typeof EventType;
  backgroundImage: string;
  logo: string;
  logoText: string;
  title: React.ReactNode;
  subTitle: string;
  description: string;
  video: string;
  thumbnail: PreEventThumbnailVideoType;
};

export const getEventData = (type: keyof typeof EventType) => {
  return preEventData.filter((data) => data.type === (type as string))[0];
};

export const getThumbnailData = (type: keyof typeof EventType) => {
  return preEventData.filter((data) => data.type !== (type as string));
};

//TODO change youtube video link for pre-event-2
export const preEventData: PreEventDataType[] = [
  {
    type: 'pre-event-2',
    backgroundImage:
      'https://res.cloudinary.com/tedxits/image/upload/v1650714433/event/pre-event-04_rcg8eu.jpg',
    logo: '/svg/elephant-red-outline.svg',
    logoText: 'Fending the tasteful lie to see the great importance.',
    title: (
      <>
        TH<span className='font-pilow'>E</span> ACCEPT
        <span className='font-pilow'>A</span>BLE <br />
        POISO<span className='font-pilow'>N</span>.
      </>
    ),
    subTitle: 'Pre-Event 2',
    description:
      'The easy access to clean water conceals the huge struggle of the process. Now, let’s take a look at the dark side of water treatment and the biggest floodgate in Surabaya, Pintu Air Jagir.',

    video: 'https://www.youtube.com/embed/KbMNCfR04Ak',
    thumbnail: {
      title: 'Deadly Water:',
      subTitle: 'Pre-Event 2',
      description: 'The Acceptable Poison',
      backgroundImage:
        'https://res.cloudinary.com/tedxits/image/upload/v1650786606/event/thumbnail-small-2_ye3igi.jpg',
    },
  },
  {
    type: 'pre-event-1-1',
    backgroundImage:
      'https://res.cloudinary.com/tedxits/image/upload/v1650714432/event/pre-event-01_l4sp87.jpg',
    logo: '/svg/elephant-black-outline.svg',
    logoText:
      'Breaking the unseen wall of prohibition to speak the final taboo.',
    title: (
      <>
        Social <span className='font-pilow'>E</span>xperiment :
        <br />
        Blind Conversation
      </>
    ),
    subTitle: 'Pre-Event 1',
    description:
      'Part 1: Grooming in Relationship To Voice, Recover, and Rescue',
    video: 'https://www.youtube.com/embed/kBTvMuJtoDU',
    thumbnail: {
      title: 'Part 1: Grooming in Relationship',
      subTitle: 'Pre-Event 1',
      description: 'To Voice, Recover, and Rescue',
      backgroundImage:
        'https://res.cloudinary.com/tedxits/image/upload/v1650786604/event/thumbnail-small-1-1_psjeoe.jpg',
    },
  },
  {
    type: 'pre-event-1-2',
    backgroundImage:
      'https://res.cloudinary.com/tedxits/image/upload/v1650714432/event/pre-event-02_akpyxh.jpg',
    logo: '/svg/elephant-black-outline.svg',
    logoText:
      'Breaking the unseen wall of prohibition to speak the final taboo.',
    title: (
      <>
        Social <span className='font-pilow'>E</span>xperiment :
        <br />
        Blind Conversation
      </>
    ),
    subTitle: 'Pre-Event 1',
    description: 'Part 2: RUU TPKS Searching for The Power of Legal',
    video: 'https://www.youtube.com/embed/phi3sX0gltU',
    thumbnail: {
      title: 'Part 2: RUU TPKS',
      subTitle: 'Pre-Event 1',
      description: 'Searching for The Power of Legal',
      backgroundImage:
        'https://res.cloudinary.com/tedxits/image/upload/v1650786605/event/thumbnail-small-1-2_ea68kd.jpg',
    },
  },
  {
    type: 'pre-event-1-3',
    backgroundImage:
      'https://res.cloudinary.com/tedxits/image/upload/v1650714434/event/pre-event-03_lczkkm.jpg',
    logo: '/svg/elephant-black-outline.svg',
    logoText:
      'Breaking the unseen wall of prohibition to speak the final taboo.',
    title: (
      <>
        Social <span className='font-pilow'>E</span>xperiment :
        <br />
        Blind Conversation
      </>
    ),
    subTitle: 'Pre-Event 1',
    description:
      'Part 3: Online Gender-Based Violence (KGBO) The Beauty Label in @cantik/ganteng.campus',
    video: 'https://www.youtube.com/embed/4nFyuddwuWA',
    thumbnail: {
      title: 'Part 3: Online Gender-Based Violence (KGBO)',
      subTitle: 'Pre-Event 1',
      description: 'The Beauty Label in @cantik/ganteng.campus',
      backgroundImage:
        'https://res.cloudinary.com/tedxits/image/upload/v1650786605/event/thumbnail-small-1-3_p1dqbn.jpg',
    },
  },
];

export type FaqDataType = {
  question: string;
  answer: string;
};
export const FaqData: FaqDataType[] = [
  {
    question: 'When and where the main event will be held?',
    answer:
      'TEDxITS 2022 main event details are to be announced, but for sure, this event will be held offline so you can get new and refreshing experiences on the D-day.',
  },
  {
    question:
      'Where do we have to send the evidence of transfer after buying the tickets?',
    answer:
      'You can send it to Ticketing TEDxITS 2022 Line Official Account (Line ID : @193pbtpg)',
  },
  {
    question: 'Can I cancel my ticket purchase and get my money back?',
    answer:
      'All types of TEDxITS 2022 tickets can not be canceled and are non-refundable after the payment.',
  },
  {
    question: 'How do I receive my ticket(s)?',
    answer:
      'We provide two shipping options; you can pick the ticket(s) at ITS campus or choose the delivery option. If you want it the to be delivered, please write down your address as detail as possible. Also, the shipping fee will be added to the total price. We will inform you later about ticket(s) pick-up and shipping schedules. ',
  },
  {
    question:
      'What should I do on D-day if my ticket(s) were lost, stolen, or destroyed?',
    answer:
      'If something happened to your ticket(s), you are still able to come to the event on the D-day by showing us the unique code that you got when processing ticket purchases. We recommend you to keep your ticket(s) intact until the event is over.',
  },
];

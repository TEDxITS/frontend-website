export enum EventType {
  'pre-event-1-1',
  'pre-event-1-2',
  'pre-event-1-3',
  'pre-event-2',
  'pre-event-3',
}

export type PreEventThumbnailVideoType = {
  backgroundImage: string;
  title: React.ReactNode;
  subTitle: string;
  description: string;
  url: string;
};

export type PreEventCuratedDataType = {
  logo: string;
  logoText: string;
  backgroundImage: string;
  title: React.ReactNode;
  subTitle: string;
  url: string;
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

// Pre-event
export const get_pre_event_thumbnail_data = () => {
  return [pre_event_3_data, pre_event_2_data, ...pre_event_1_data].map(
    ({ thumbnail }) => thumbnail
  );
};

export const pre_event_cover_data: string[] = [
  'https://res.cloudinary.com/tedxits/image/upload/v1654054451/event/pre-event-05_sg9fkm.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1650714433/event/pre-event-04_rcg8eu.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1650714432/event/pre-event-01_l4sp87.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1650714432/event/pre-event-02_akpyxh.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1650714434/event/pre-event-03_lczkkm.jpg',
];

export const pre_event_curated_data: PreEventCuratedDataType[] = [
  {
    logo: '/svg/elephant-black.svg',
    logoText:
      'Breaking the unseen wall of prohibition to speak the final taboo.',
    backgroundImage:
      'https://res.cloudinary.com/tedxits/image/upload/v1650714432/event/pre-event-01_l4sp87.jpg',
    title: (
      <>
        Social <span className='font-pilow'>E</span>xperiment :
        <br />
        Blind Conversation
      </>
    ),
    subTitle: 'Pre-Event 1',
    url: '/pre-events/1',
  },
  {
    logo: '/svg/elephant-red.svg',
    logoText: 'Fending the tasteful lie to see the great importance.',
    backgroundImage:
      'https://res.cloudinary.com/tedxits/image/upload/v1650714433/event/pre-event-04_rcg8eu.jpg',
    title: (
      <>
        TH<span className='font-pilow'>E</span> ACCEPT
        <span className='font-pilow'>A</span>BLE <br />
        POISO<span className='font-pilow'>N</span>.
      </>
    ),
    subTitle: 'Pre-Event 2',
    url: '/pre-events/2',
  },
  {
    logo: '/svg/elephant-white.svg',
    logoText: 'Unravelling the serenity to listen to the unheard voices.',
    backgroundImage:
      'https://res.cloudinary.com/tedxits/image/upload/v1654054451/event/pre-event-05_sg9fkm.jpg',
    title: (
      <span>
        TED<span className='font-light'>x</span>ITS
        <br />T<span className='font-pilow'>A</span>KE O
        <span className='font-pilow'>V</span>ER.
      </span>
    ),
    subTitle: 'Pre-Event 3',
    url: '/pre-events/3',
  },
];

// Pre-event 1
export const pre_event_1_part: (keyof typeof EventType)[] = [
  'pre-event-1-1',
  'pre-event-1-2',
  'pre-event-1-3',
];
export const get_active_pre_event_1_data = (type: keyof typeof EventType) => {
  return pre_event_1_data.filter((data) => data.type === (type as string))[0];
};

export const get_pre_event_1_thumbnail_data = (
  type: keyof typeof EventType
) => {
  return pre_event_1_data.filter((data) => data.type !== (type as string));
};

export const pre_event_1_data: PreEventDataType[] = [
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
      url: '/pre-events/1?part=1',
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
      url: '/pre-events/1?part=2',
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
      url: '/pre-events/1?part=3',
    },
  },
];

// Pre-event 2
export const pre_event_2_data: PreEventDataType = {
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
    url: '/pre-events/2',
  },
};

// Pre-event 3
export const pre_event_3_data: PreEventDataType & { textureImage: string } = {
  type: 'pre-event-3',
  backgroundImage:
    'https://res.cloudinary.com/tedxits/image/upload/v1654054451/event/pre-event-05_sg9fkm.jpg',
  logo: '/svg/elephant-white.svg',
  logoText: 'Unravelling the serenity to listen to the unheard voices.',
  title: (
    <span>
      TED<span className='font-light'>x</span>ITS
      <br />T<span className='font-pilow'>A</span>KE O
      <span className='font-pilow'>V</span>ER.
    </span>
  ),
  subTitle: 'Pre-Event 3',
  description:
    'The terrifying backspace that hides undelivered messages is crashed. TEDxITS takes over 4 cafes in 3 days to spark conversation in respect of friendship and relationship.',
  video: '',
  textureImage:
    'https://res.cloudinary.com/tedxits/image/upload/v1654093793/event/pre-event-3-bg_e2hxim.jpg',
  thumbnail: {
    title: 'TEDxITS Take Over',
    subTitle: 'Pre-Event 3',
    description: 'TEDxITS takes over 4 cafes in 3 days',
    backgroundImage:
      'https://res.cloudinary.com/tedxits/image/upload/v1654054794/event/thumbnail-small-3_u9cecq.jpg',
    url: '/pre-events/3',
  },
};

export const pre_event_3_images: string[] = [
  'https://res.cloudinary.com/tedxits/image/upload/v1654053864/event/pre-event-3/IMG_01_mjpemw.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053865/event/pre-event-3/IMG_02_dma0wi.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053865/event/pre-event-3/IMG_03_pl5uwe.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053867/event/pre-event-3/IMG_04_tmkvch.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053867/event/pre-event-3/IMG_05_r8xzoo.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053865/event/pre-event-3/IMG_06_slqwyc.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053866/event/pre-event-3/IMG_07_iqzyrm.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053866/event/pre-event-3/IMG_08_vdyklm.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053867/event/pre-event-3/IMG_09_ajgn7o.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053864/event/pre-event-3/IMG_10_xyaucv.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053863/event/pre-event-3/IMG_11_hxuczl.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053864/event/pre-event-3/IMG_12_mjzypg.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053864/event/pre-event-3/IMG_13_aaflc1.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053864/event/pre-event-3/IMG_14_clbn4p.jpg',
  'https://res.cloudinary.com/tedxits/image/upload/v1654053864/event/pre-event-3/IMG_15_fkepzt.jpg',
];

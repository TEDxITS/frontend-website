export type PositionData = {
  dataClassName?: string;
  data: JobType[] | [];
  image: string;
};

export type JobType = {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

export const positionData: PositionData[] = [
  {
    dataClassName: 'grid-cols-1 gap-24 sm:grid-cols-3 md:gap-48',
    data: [
      {
        image: '/images/t-shirt.png',
        title: <>T-SHIRT</>,
        description: <>Rp150.000,00</>,
      },
      {
        image: '/images/totebag.png',
        title: <>TOTEBAG</>,
        description: <>Rp150.000,00</>,
      },
      {
        image: '/images/baseball-cap.png',
        title: <>BASEBALL CAP</>,
        description: <>Rp150.000,00</>,
      },
    ],
    image: '',
  },
  {
    dataClassName: 'grid-cols-1 gap-24 sm:grid-cols-3 md:gap-48',
    data: [
      {
        image: '/images/keychain.png',
        title: <>KEYCHAIN</>,
        description: <>Rp150.000,00</>,
      },
      {
        image: '/images/pocket-hs.png',
        title: <>POCKET HAND SANITIZER</>,
        description: <>Rp150.000,00</>,
      },
      {
        image: '/images/waterproof.png',
        title: <>WATERPROOF WALLET</>,
        description: <>Rp150.000,00</>,
      },
    ],
    image: '',
  },
  {
    dataClassName: 'grid-cols-1 gap-24 sm:grid-cols-3 md:gap-48',
    data: [
      {
        image: '/images/keychain.png',
        title: <>KEYCHAIN</>,
        description: <>Rp150.000,00</>,
      },
    ],
    image: '',
  },
];

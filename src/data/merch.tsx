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
        title: <>T-Shirt</>,
        description: <>Rp90.000,00</>,
      },
      {
        image: '/images/totebag.png',
        title: <>Tote Bag</>,
        description: <>Rp70.000,00</>,
      },
      {
        image: '/images/baseball-cap.png',
        title: <>Baseball Cap</>,
        description: <>Rp55.000,00</>,
      },
    ],
    image: '',
  },
  {
    dataClassName: 'grid-cols-1 gap-24 sm:grid-cols-3 md:gap-48',
    data: [
      {
        image: '/images/keychain.png',
        title: <>STNK Holder</>,
        description: <>Rp30.000,00</>,
      },
      {
        image: '/images/pocket-hs.png',
        title: <>Pocket Handsanitizer</>,
        description: <>Rp20.000,00</>,
      },
      {
        image: '/images/waterproof.png',
        title: <>Sako Wallet</>,
        description: <>Rp35.000,00</>,
      },
    ],
    image: '',
  },
  {
    dataClassName: 'grid-cols-1 gap-24 sm:grid-cols-3 md:gap-48',
    data: [
      {
        image: '/images/b-t-shirt.png',
        title: <>Black Tshirt</>,
        description: <>Rp90.000,00</>,
      },
    ],
    image: '',
  },
];

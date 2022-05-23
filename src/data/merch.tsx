import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

export type ProductType = {
  image: React.ReactNode;
  title: string;
  price: string;
};

export type PhotoType = {
  url: string;
  description?: string;
  width: number;
  height: number;
};

export type MerchProductDataType = {
  title: string;
  subtitle?: string;
  price: string;
  description?: string[];
  photo: PhotoType[];
  ref: string;
  zoom_origin: string;
};

export type BundleProductDataType = {
  title: string;
  subtitle: string;
  price: string;
  photo: PhotoType;
};

const MERCH_IMAGE_STYLE =
  ' drop-shadow-xs w-full hover:drop-shadow-xl transition-all duration-300 ease-in-out hover:scale-[200%]';
export const merch_1_data: ProductType[] = [
  {
    image: (
      <NextImage
        useSkeleton={true}
        src='/images/merch/tshirt-white.png'
        width={960}
        height={906}
        alt='White Tshirt'
        className={clsxm(MERCH_IMAGE_STYLE)}
      />
    ),
    title: 'White T-Shirt',
    price: 'Rp90.000,00',
  },
  {
    image: (
      <NextImage
        useSkeleton={true}
        src='/images/merch/tshirt-black.png'
        width={720}
        height={666}
        alt='Black Tshirt'
        className={clsxm(MERCH_IMAGE_STYLE)}
      />
    ),
    title: 'Black T-Shirt',
    price: 'Rp90.000,00',
  },
  {
    image: (
      <NextImage
        useSkeleton={true}
        src='/images/merch/totebag.png'
        width={720}
        height={793}
        alt='Totebag'
        className={clsxm(MERCH_IMAGE_STYLE)}
      />
    ),
    title: 'Tote Bag',
    price: 'Rp70.000,00',
  },
  {
    image: (
      <NextImage
        useSkeleton={true}
        src='/images/merch/cap.png'
        width={720}
        height={716}
        alt='Baseball Cap'
        className={clsxm(MERCH_IMAGE_STYLE)}
      />
    ),
    title: 'Baseball Cap',
    price: 'Rp55.000,00',
  },
  {
    image: (
      <NextImage
        useSkeleton={true}
        src='/images/merch/keychain.png'
        width={960}
        height={797}
        alt='Keychain'
        className={clsxm(MERCH_IMAGE_STYLE)}
      />
    ),
    title: 'STNK Holder',
    price: 'Rp30.000,00',
  },
  {
    image: (
      <NextImage
        useSkeleton={true}
        src='/images/merch/hand-sanitizer.png'
        width={960}
        height={640}
        alt='Hand Sanitizer'
        className={clsxm(MERCH_IMAGE_STYLE)}
      />
    ),
    title: 'Pocket Handsanitizer',
    price: 'Rp20.000,00',
  },
  {
    image: (
      <NextImage
        src='/images/merch/wallet.png'
        width={960}
        height={614}
        alt='Sako Wallet'
        className={clsxm(MERCH_IMAGE_STYLE, 'origin-bottom-right')}
      />
    ),
    title: 'Sako Wallet',
    price: 'Rp35.000,00',
  },
];

export const merch_2_data: MerchProductDataType[] = [
  {
    title: 'T-SHIRT',
    ref: 'tshirt',
    subtitle: '*Available in Oversize',
    price: '90.000',
    description: ['Cotton Combed 30s', 'Print Plastisol'],
    photo: [
      {
        url: 'https://res.cloudinary.com/tedxits/image/upload/v1653133400/merch/tshirt/TS_Good_Hurts_Purple_2_-_front_x7ux1w.png',
        description: 'Front View',
        width: 1597,
        height: 1500,
      },
      {
        url: 'https://res.cloudinary.com/tedxits/image/upload/v1653133397/merch/tshirt/TS_Good_Hurts_Purple_2s_wayfqh.png',
        description: 'Back View',
        width: 1643,
        height: 1500,
      },
    ],
    zoom_origin: 'origin-center',
  },
  {
    title: 'TUMBLR',
    ref: 'tumblr',
    price: '75.000',
    description: ['Tumbler Sport 500ml', 'Stainless Material'],
    photo: [
      {
        url: 'https://res.cloudinary.com/tedxits/image/upload/v1653133609/merch/tumblr/Tumblr_Front_With_Shadow_p8siyu.png',
        description: 'Front View',
        width: 2000,
        height: 2000,
      },
      {
        url: 'https://res.cloudinary.com/tedxits/image/upload/v1653133611/merch/tumblr/Tumblr_Back_With_Shadow_lmozos.png',
        description: 'Back View',
        width: 2000,
        height: 2000,
      },
    ],
    zoom_origin: 'origin-center',
  },
  {
    title: 'REVERSIBLE BUCKET HAT',
    ref: 'bucket',
    subtitle: '*Reversible',
    price: '55.000',
    description: ['Drill premium', 'All size diameter 58cm'],
    photo: [
      {
        url: 'https://res.cloudinary.com/tedxits/image/upload/v1653133534/merch/bucket-hat/Reversible_Bucket_Hat_Outside_rk7gkr.png',
        description: 'Outside View',
        width: 3264,
        height: 3348,
      },
      {
        url: 'https://res.cloudinary.com/tedxits/image/upload/v1653133537/merch/bucket-hat/Reversible_Bucket_Hat_Inside_majwup.png',
        description: 'Inside View',
        width: 3264,
        height: 3348,
      },
    ],
    zoom_origin: 'origin-center',
  },
  {
    title: 'STICKER PACK',
    ref: 'sticker',
    price: '15.000',
    photo: [
      {
        url: 'https://res.cloudinary.com/tedxits/image/upload/v1652954191/merch/cover/sticker.png',
        width: 1024,
        height: 768,
      },
    ],
    zoom_origin: 'origin-center',
  },
  {
    title: 'SAKO WALLET',
    ref: 'sako',
    subtitle: '*Waterproof',
    price: '35.000',
    photo: [
      {
        url: 'https://res.cloudinary.com/tedxits/image/upload/v1653276947/merch/lanyard/Lanyard_Sako_Waterproof_Wallet_vmtp4q.png',
        width: 2500,
        height: 1600,
      },
    ],
    zoom_origin: 'origin-bottom-right',
  },
];

export const merch_2_bundle_data: BundleProductDataType[] = [
  {
    title: 'FIND YOUR LIGHT',
    subtitle: 'T-SHIRT + TUMBLER',
    price: '155RB',
    photo: {
      url: 'https://res.cloudinary.com/tedxits/image/upload/v1653155150/merch/bundle/bundle-01_m1bxoz.png',
      width: 2000,
      height: 2000,
    },
  },
  {
    title: 'Breakthrough the darkness',
    subtitle: 'BUCKET HAT + SAKO WALLET',
    price: '85RB',
    photo: {
      url: 'https://res.cloudinary.com/tedxits/image/upload/v1653279356/merch/bundle/bundle-02_tibphw.png',
      width: 2000,
      height: 2000,
    },
  },
];

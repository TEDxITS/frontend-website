import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

export type ProductType = {
  image: React.ReactNode;
  title: string;
  price: string;
};

const MERCH_IMAGE_STYLE =
  ' drop-shadow-xs w-full hover:drop-shadow-xl transition-all duration-300 ease-in-out hover:scale-[200%]';
export const merchData: ProductType[] = [
  {
    image: (
      <NextImage
        useSkeleton={true}
        src='/images/merchandise/tshirt-white.png'
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
        src='/images/merchandise/tshirt-black.png'
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
        src='/images/merchandise/totebag.png'
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
        src='/images/merchandise/cap.png'
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
        src='/images/merchandise/keychain.png'
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
        src='/images/merchandise/hand-sanitizer.png'
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
        src='/images/merchandise/wallet.png'
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

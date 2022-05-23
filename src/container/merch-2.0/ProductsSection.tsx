import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { HiOutlineZoomIn, HiOutlineZoomOut, HiX } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import { merch_2_data, MerchProductDataType, PhotoType } from '@/data/merch';

import NextImage from '@/components/NextImage';

export default function ProductSection() {
  return (
    <div className='relative my-16' id='products'>
      <div className='border-cdark layout min-h-main text-cdark'>
        <div className='grid gap-24 w-full lg:grid-cols-2 lg:gap-16'>
          {merch_2_data.map((data, i) => (
            <ProductCard key={i} data={data} />
          ))}
        </div>
      </div>
      <NextImage
        src='/images/forgot-password/float.png'
        width={365}
        height={402}
        alt='float'
        className='absolute right-0 bottom-0 w-full pointer-events-none md:w-1/3'
      />
    </div>
  );
}
type PhotoStateType = { photo: PhotoType; zoom_origin: string };
function ProductCard({ data }: { data: MerchProductDataType }) {
  const [carouselState, setCarouselState] = React.useState<number>(0);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [photoState, setPhotoState] = React.useState<PhotoStateType>();

  const openPhotoModal = (photo: PhotoType, zoom_origin: string) => {
    setPhotoState({ photo, zoom_origin });
    setModalOpen(true);
  };
  return (
    <div className='grid md:grid-cols-2 md:gap-4 2xl:grid-cols-5' id={data.ref}>
      {photoState?.photo.url && (
        <PhotoModal
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
          data={photoState as PhotoStateType}
        />
      )}

      <div className='font-fivo flex flex-col 2xl:col-span-2'>
        <h3 className='text-cdark text-4xl font-extrabold md:text-2xl'>
          {data.title}
        </h3>
        <h4 className='text-cblue italic'>{data.subtitle}</h4>
        <h3 className='text-cred mt-4 font-bold'>Rp{data.price}</h3>
        <ul className='pl-2 mt-4 font-medium'>
          {data.description?.map((text, i) => (
            <li key={i} className='lowercase'>
              • <span>{text}</span>
            </li>
          ))}
        </ul>
        {data.photo.length > 1 && (
          <div className='relative gap-4 mt-auto w-full'>
            <small>display</small>
            <hr className='border-cdark' />
            <p className='font-medium lowercase'>
              {data.photo[carouselState].description}
            </p>
            <div className='flex relative gap-1 mb-8 w-full h-16'>
              {data.photo.map((photo, i) => (
                <NextImage
                  useSkeleton
                  onClick={() => setCarouselState(i)}
                  key={i}
                  src={photo.url}
                  alt='cover'
                  priority={true}
                  objectFit='cover'
                  layout='fill'
                  className={clsxm(
                    'flex relative w-16 cursor-pointer',
                    'transition-all duration-150 ease-in',
                    carouselState === i
                      ? 'bg-cdark'
                      : 'bg-cdark/50 hover:bg-cdark/80'
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className='flex flex-col gap-4 items-center 2xl:col-span-3'>
        <div className={clsxm('flex overflow-hidden relative flex-col w-full')}>
          {data.photo.map((photo, i) => (
            <NextImage
              useSkeleton
              onClick={() => openPhotoModal(photo, data.zoom_origin)}
              key={i}
              src={photo.url}
              alt='cover'
              priority={true}
              objectFit='cover'
              layout='fill'
              className={clsxm(
                'aspect-h-1 aspect-w-1 absolute w-full',
                'bg-cdark drop-shadow-xl md:hover:brightness-90',
                'transition-all duration-300 ease-in',

                carouselState === i
                  ? 'opacity-100 z-10 delay-75'
                  : 'opacity-0 pointer-events-none'
              )}
            />
          ))}
          <div className='aspect-h-1 aspect-w-1 bg-cdark w-full'></div>
        </div>
        {data.photo.length > 1 && (
          <div className='flex gap-2'>
            {[...Array(data.photo.length)].map((_, i) => (
              <div
                onClick={() => setCarouselState(i)}
                key={i}
                className={clsxm(
                  'border-cdark flex-shrink-0 w-4 h-4 rounded-full border cursor-pointer',
                  'ease transition-all duration-150 ',

                  carouselState === i ? 'bg-cdark' : 'hover:bg-cdark/50'
                )}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

type PhotoModalProps = {
  isOpen: boolean;
  data: PhotoStateType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function PhotoModal({ isOpen, setIsOpen, data }: PhotoModalProps) {
  const [zoom, setZoom] = React.useState<number>(120);

  function closeModal() {
    setIsOpen(false);
  }

  function zoomInPic() {
    if (zoom > 200) {
      return;
    }
    setZoom(zoom + 30);
  }

  function zoomOutPic() {
    if (zoom < 50) {
      return;
    }
    setZoom(zoom - 30);
  }
  const buttonStyle =
    'bg-clight cursor-pointer p-1 rounded-full shadow-lg hover:text-cdark/80';
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as='div'
        className='bg-cdark/80 flex overflow-hidden fixed inset-0 z-50 flex-col'
        onClose={closeModal}
      >
        <div className='min-h-main z-20 text-center'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='layout inline-block w-full align-middle transition-all transform'>
              <main className='bg-cdark ring-clight flex overflow-hidden relative flex-col justify-center items-center rounded-3xl ring-1'>
                <div className='text-cdark flex absolute top-8 right-8 bottom-8 z-10 flex-col justify-between'>
                  <HiX onClick={closeModal} size={35} className={buttonStyle} />
                  <div className='flex flex-col gap-4'>
                    <HiOutlineZoomIn
                      size={35}
                      onClick={zoomInPic}
                      className={buttonStyle}
                    />
                    <HiOutlineZoomOut
                      size={35}
                      onClick={zoomOutPic}
                      className={buttonStyle}
                    />
                  </div>
                </div>
                <div
                  className={clsxm(
                    'ease flex justify-center w-full max-w-md transition-all duration-150',
                    data.zoom_origin
                  )}
                  style={{ transform: `scale(${zoom}%)` }}
                >
                  <NextImage
                    useSkeleton
                    alt='Merch Image'
                    width={data.photo.width}
                    height={data.photo.height}
                    src={data.photo.url}
                    className={clsxm(' w-full')}
                  />
                </div>
              </main>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

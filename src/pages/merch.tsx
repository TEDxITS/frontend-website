import * as React from 'react';

import { Merch2Url } from '@/data/url';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import CarouselSection from '@/container/merch-2.0/CarouselSection';
import CoverSection from '@/container/merch-2.0/CoverSection';
import ProductsSection from '@/container/merch-2.0/ProductsSection';
import MerchClosedModal from '@/container/modal/MerchClosedModal';

export default function MerchPage() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Layout withDashboard={true} className='bg-cgray' isDark={true}>
      <Seo templateTitle='Merch 2.0' />

      <MerchClosedModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className='bg-cgray flex overflow-hidden relative z-10 flex-col'>
        <CoverSection />
        <ProductsSection />
        <CarouselSection />
        <div className='flex flex-col justify-center items-center mb-16 text-center'>
          <div className='block fixed bottom-12 z-20 mx-auto mt-16 animate-bounce'>
            <ButtonLink
              href={Merch2Url}
              className='from-cdark to-cdark px-16 py-4 shadow-2xl'
            >
              BUY NOW
            </ButtonLink>
          </div>
        </div>
      </section>
    </Layout>
  );
}

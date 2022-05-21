import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CoverSection from '@/container/merch-1.0/CoverSection';
import ProductsSection from '@/container/merch-1.0/ProductsSection';
import MerchClosedModal from '@/container/modal/MerchClosedModal';

export default function MerchPage() {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return (
    <Layout withDashboard={true} className='bg-cgray' isDark={true}>
      <Seo templateTitle='Merch 1.0' />

      <MerchClosedModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className='bg-cgray flex overflow-hidden relative z-10 flex-col'>
        <CoverSection />
        <ProductsSection />
        <div className='flex flex-col justify-center items-center mb-16 text-center'>
          <div className='block fixed bottom-12 z-20 mx-auto mt-16 animate-bounce'>
            <Button
              className='from-cdark to-cdark px-16 py-4 shadow-2xl'
              onClick={() => setIsOpen(true)}
            >
              BUY NOW
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

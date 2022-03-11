import * as React from 'react';

import Button from '@/components/buttons/Button';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CoverSection from '@/container/merch/CoverSection';
import ProductsSection from '@/container/merch/ProductsSection';
import MerchClosedModal from '@/container/modal/MerchClosedModal';

export default function MerchPage() {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return (
    <Layout>
      <Seo templateTitle='Merch' />
      <MerchClosedModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className='bg-cgray pt-8 md:pt-16'>
        <Header isDark={true} />
        <section className='bg-cgray flex overflow-hidden relative flex-col'>
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
      </main>
    </Layout>
  );
}

import React from 'react';

import { bookData } from '@/data/book';

import Book from './Book';

export default function LogoSection() {
  return (
    <div className='flex flex-col items-center py-16'>
      <div className='text-cdark'>
        <div className='flex gap-2'>
          <h1 className='text-cdark -translate-y-4'>“</h1>
          <div className='text-center'>
            <h1 className='text-cdark'>
              The <span className='font-sympath'>M</span>eaning
            </h1>
            <p>What does elephant represents?</p>
          </div>
          <h1 className='text-cdark translate-y-[calc(50%)]'>”</h1>
        </div>
      </div>
      <div className='flex flex-col gap-x-8 gap-y-16 items-center lg:px-16 xl:flex-row'>
        {bookData.map((book, i) => (
          <Book data={book} key={i} />
        ))}
      </div>
    </div>
  );
}

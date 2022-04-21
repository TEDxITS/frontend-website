import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

export default function LoadingPage() {
  return (
    <div className='bg-cdark flex flex-col justify-center items-center min-h-screen text-gray-800'>
      <ImSpinner8 className='text-clight mb-4 text-4xl animate-spin' />
      <p className='text-clight'>Loading...</p>
    </div>
  );
}

import React from 'react';

import TitleCfsRegistration from '@/assets/svg/TitleCfsRegistration';

export default function RegistrationSection() {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <TitleCfsRegistration className='w-3/4 md:w-1/2 lg:w-1/3' />
      <p className='text-cdark max-w-3xl leading-relaxed text-center'>
        {'Compile the requirements of points '}
        <span className='border-cdark p-1 mr-1 font-black border'>2</span>
        <span className='border-cdark p-1 mr-1 font-black border'>3</span>
        <span className='border-cdark p-1 mr-1 font-black border'>4</span>
        <span className='border-cdark p-1 mr-1 font-black rounded-full border'>
          5B
        </span>
        {' and upload them to your '}
        <span className='font-bold'>Google Drive folder</span>
        {' and submit the link '}
        <span className='text-cblue'>
          (make sure that the folder is accessible for everyone)
        </span>
        . For point <span className='font-black'>5b</span> , submit the link of
        your <span className='font-bold'>Instagram Reels</span> post on the form
        below.
      </p>
    </div>
  );
}

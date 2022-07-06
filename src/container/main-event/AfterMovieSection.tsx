import React from 'react';
import ReactPlayer from 'react-player';

export default function AfterMovieSection() {
  return (
    <div className='border-cdark layout p-2 border-2 shadow-inner'>
      <div className='aspect-h-9 aspect-w-16 bg-cdark overflow-hidden rounded-sm shadow-inner'>
        <ReactPlayer
          url='https://www.youtube.com/embed/pNxzzJfvrDY'
          width={'100%'}
          height={'100%'}
          controls={true}
        />
      </div>
    </div>
  );
}

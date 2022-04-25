import { differenceInSeconds, isBefore } from 'date-fns';
import React from 'react';
import { useTimer } from 'react-timer-hook';

import { toDate } from '@/lib/date';

type TimerPropsType = {
  endTime: string;
};

const getStringValue = (value: number) => {
  const leftDigit = value >= 10 ? value.toString()[0] : '0';
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
  return `${leftDigit}${rightDigit}`;
};
export default function Timer({ endTime }: TimerPropsType) {
  const [isEnd, setIsEnd] = React.useState<boolean>(false);

  const end = toDate(endTime);
  const now = new Date();
  now.setSeconds(
    now.getSeconds() +
      differenceInSeconds(end, now, { roundingMethod: 'floor' })
  ); // 10 minutes timer
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: now,
    autoStart: true,
    onExpire: () => setIsEnd(true),
  });

  if (!isBefore(new Date(), end)) {
    return <div className='hidden'>Timer</div>;
  } else if (!isEnd) {
    return (
      <div className='text-clight flex justify-center items-center'>
        <TimerNumber value={days} type='days' />
        <span className='font-fivo text-cdark mx-1 text-lg'>:</span>
        <TimerNumber value={hours} type='hours' />
        <span className='font-fivo text-cdark mx-1 text-lg'>:</span>
        <TimerNumber value={minutes} type='min' />
        <span className='font-fivo text-cdark mx-1 text-lg'>:</span>
        <TimerNumber value={seconds} type='sec' />
      </div>
    );
  } else {
    return <p className='text-cdark'>Confirm Payment Expired</p>;
  }
}

function TimerNumber({ value, type }: { value: number; type: string }) {
  return (
    <div className='text-center'>
      <div className='bg-cdark min-w-[40px] flex justify-center items-center px-2 py-1 leading-none rounded-lg'>
        <p>{getStringValue(value)}</p>
      </div>
      <small className='font-fivo text-cdark text-xs'>{type}</small>
    </div>
  );
}

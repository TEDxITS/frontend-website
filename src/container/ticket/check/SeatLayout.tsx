import React from 'react';

import clsxm from '@/lib/clsxm';

import { SeatType } from '@/pages/ticket/check';

import { EventSeatApiData } from '@/types/event';

const generateSeat = (
  input: {
    count: number;
    seat: number[];
    start: number;
  }[]
) => {
  const ALPHABET = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let rowCounter = 0;
  let seatId = 0;
  const result = input.map(({ count, seat, start }) =>
    [...Array(count)].map((_) => {
      let seatCounter = start;
      const temp = seat.map((numbers) =>
        [...Array(numbers)].map((_) => {
          const seatNumber = `${ALPHABET[rowCounter]}${seatCounter}`;
          seatCounter += 1;
          seatId += 1;
          return {
            title: seatNumber,
            value: seatId,
          };
        })
      );
      rowCounter += 1;
      return temp;
    })
  );
  return result;
};

type SeatLayoutProps = {
  seatNumber: SeatType;
  setSeatNumber: React.Dispatch<React.SetStateAction<SeatType>>;
  seatData: EventSeatApiData[];
};

export default function SeatLayout({
  seatNumber,
  setSeatNumber,
  seatData,
}: SeatLayoutProps) {
  const seatConfiguration = [
    {
      count: 6,
      seat: [5, 11, 5],
      start: 1,
    },
    {
      count: 1,
      seat: [4],
      start: 9,
    },
  ];

  const isSeatOccupied = (id: number) => {
    const data = seatData.find((element) => element.seat_no === id);
    return data?.status;
  };

  const setSeat = (title: string, value: number) => {
    setSeatNumber({ title, value });
  };
  return (
    <div className='flex flex-col gap-y-4 items-center w-full'>
      {generateSeat(seatConfiguration).map((type) =>
        type.map((row, i) => (
          <div key={i} className='flex gap-8'>
            {row.map((group, j: React.Key) => (
              <div key={j} className='flex gap-2'>
                {group.map((seat, i) => (
                  <button
                    key={i}
                    onClick={() => setSeat(seat.title, seat.value)}
                    tabIndex={isSeatOccupied(seat.value) ? -1 : 0}
                    disabled={isSeatOccupied(seat.value)}
                    className={clsxm(
                      'inline-flex justify-center items-center px-2 py-1 w-12 rounded-md border ',
                      'disabled:hover:bg-clight disabled:opacity-20 disabled:cursor-not-allowed disabled:select-none',
                      seat.value === seatNumber.value
                        ? 'bg-cred hover:bg-cred/80'
                        : 'hover:bg-clight/30 '
                    )}
                  >
                    <p>{seat.title}</p>
                  </button>
                ))}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

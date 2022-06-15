import React from 'react';

import clsxm from '@/lib/clsxm';

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
  seatNumber: number;
  setSeatNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function SeatLayout({
  seatNumber,
  setSeatNumber,
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
                    onClick={() => setSeatNumber(seat.value)}
                    className={clsxm(
                      'inline-flex justify-center items-center px-2 py-1 w-12 rounded-md border ',
                      seat.value === seatNumber
                        ? 'bg-cred hover:bg-cred/80'
                        : 'hover:bg-clight/30'
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

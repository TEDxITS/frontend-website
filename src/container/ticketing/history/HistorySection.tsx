import React from 'react';

import Ticket from '@/container/ticketing/history/Ticket';

const ticketdata = [
  {
    booking_id: '3795a484-dc79-46ad-af8e-6ac9f7628fc4',
    event_id: '206697aa-590e-4820-8095-34155010177e',
    user_id: '1e3b9172-ca9e-44c7-b6ce-6134361cd77d',
    booking_name: 'again',
    booking_address: 'makassar 1',
    booking_telp: '621231 ',
    booking_status: false,
    booking_start_time: '2022-04-13T01:25:53.500Z',
    booking_finish_time: '2022-04-13T04:25:53.500Z',
    Event: {
      event_id: '206697aa-590e-4820-8095-34155010177e',
      event_name: 'TEDxITS : Elephant in The Room',
      event_date: '2022-06-18T00:00:00.000Z',
      event_start: null,
      event_finish: null,
      event_type: 'OFFLINE_KIT',
    },
  },
  {
    booking_id: '3795a484-dc79-46ad-af8e-6ac9f7628fc4',
    event_id: '206697aa-590e-4820-8095-34155010177e',
    user_id: '1e3b9172-ca9e-44c7-b6ce-6134361cd77d',
    booking_name: 'again',
    booking_address: 'makassar 1',
    booking_telp: '621231 ',
    booking_status: true,
    booking_start_time: '2022-04-13T01:25:53.500Z',
    booking_finish_time: '2022-04-13T04:25:53.500Z',
    Event: {
      event_id: '206697aa-590e-4820-8095-34155010177e',
      event_name: 'TEDxITS : Elephant in The Room',
      event_date: '2022-06-18T00:00:00.000Z',
      event_start: null,
      event_finish: null,
      event_type: 'OFFLINE_KIT',
    },
  },
];

function HistorySection() {
  return (
    <div className='layout'>
      {ticketdata.map((data) => {
        return <Ticket key={data.booking_id} data={data} />;
      })}

      <div className='text-cdark flex justify-between mt-12 mb-6 text-xs'>
        <p className='font-medium'>
          <span className='font-black'>TED</span>xITS
        </p>
        <p>&copy; 2022</p>
      </div>
    </div>
  );
}

export default HistorySection;

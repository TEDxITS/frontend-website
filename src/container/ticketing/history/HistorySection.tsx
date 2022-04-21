import React from 'react';

import Ticket from '@/container/ticketing/history/Ticket';

import { TicketResponse } from '@/types/api';

function HistorySection({ data }: { data: TicketResponse[] }) {
  return (
    <div className='layout'>
      {data.map((ticketdata) => {
        return <Ticket key={ticketdata.booking_id} data={ticketdata} />;
      })}
    </div>
  );
}

export default HistorySection;

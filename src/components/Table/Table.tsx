'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

import { Booking } from '@/models/booking';

type Props = {
  bookingDetails: Booking[];
  setRoomId: Dispatch<SetStateAction<string | null>>;
  toggleRatingModal: () => void;
};

const Table: FC<Props> = ({ bookingDetails, setRoomId, toggleRatingModal }) => {
  const router = useRouter();

  return (
    <div className='overflow-x-auto max-w-[340px] rounded-lg mx-auto md:max-w-full shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 border-gray-300 border-4 border-t border-r'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th className='px-6 py-3 font-extrabold font-serif'>Room name</th>
            <th className='px-6 py-3 font-extrabold font-serif'>Unit Price</th>
            <th className='px-6 py-3 font-extrabold font-serif'>Price</th>
            <th className='px-6 py-3'>Discount</th>
            <th className='px-6 py-3 font-extrabold font-serif'>No. Days Booked</th>
            <th className='px-6 py-3 font-extrabold font-serif'>Days Left</th>
            <th className='px-6 py-3 font-extrabold font-serif'></th>
          </tr>
          <tr>
            <td className='px-6 py-2'> Basic room</td>
            <td className='px-6 py-2'> 10$</td>
            <td className='px-6 py-2'> 15$</td>
            <td className='px-6 py-2'> 5%</td>
            <td className='px-6 py-2'> 3 dsays</td>
            <td className='px-6 py-2'> 1</td>
            <td><button className='border-2 bg-green-500 text-yellow-400 py-1 px-2'>Delete</button></td>

          </tr>
        </thead>
        <tbody>
          {bookingDetails.map(booking => (
            <tr
              key={booking._id}
              className='bg-white border-b hover:bg-gray-50'
            >
              <th
                onClick={() =>
                  router.push(`/rooms/${booking.hotelRoom.slug.current}`)
                }
                className='px-6 underline text-blue-600 cursor-pointer py-4 font-medium whitespace-nowrap'
              >
                {booking.hotelRoom.name}
              </th>
              <td className='px-6 py-4'>{booking.hotelRoom.price}</td>
              <td className='px-6 py-4'>{booking.totalPrice}</td>
              <td className='px-6 py-4'>{booking.discount}</td>
              <td className='px-6 py-4'>{booking.numberOfDays}</td>
              <td className='px-6 py-4'>0</td>
              <td className='px-6 py-4'>
                <button
                  onClick={() => {
                    setRoomId(booking.hotelRoom._id);
                    toggleRatingModal()
                  }}
                  className='font-medium text-blue-600 hover:underline'
                >
                  Rate
                </button>
              </td>
              {/*  */}
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

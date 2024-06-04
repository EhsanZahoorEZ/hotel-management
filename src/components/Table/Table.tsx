'use client';

import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Booking } from '@/models/booking';
const PageSize = 5;
type Props = {
  bookingDetails: Booking[];
  setRoomId: Dispatch<SetStateAction<string | null>>;
  toggleRatingModal: () => void;
};

const Table: FC<Props> = ({ bookingDetails,  setRoomId, toggleRatingModal }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const totalPages = Math.ceil(bookingDetails.length / PageSize);

  const handlePageChange = (selectedPage: number) => {
      setCurrentPage(selectedPage);
  };

  const displayedBookings = bookingDetails.slice(
      currentPage * PageSize,
      (currentPage + 1) * PageSize
  );

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
      {/*  */}
      {/*  */}
      <h1 className='font-serif text-yellow-400 font-bold mt-2'>For Food Detail</h1>
      <table className='w-full text-sm text-left text-gray-500 border-gray-300 border-4 border-t border-r'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th className='px-6 py-3 font-extrabold font-serif'>Name</th>
            <th className='px-6 py-3 font-extrabold font-serif'>Phone Number</th>
            <th className='px-6 py-3 font-extrabold font-serif'>Email</th>
            <th className='px-6 py-3'>Address</th>
            <th className='px-6 py-3 font-extrabold font-serif'>Location</th>
            
          </tr>
          <tr>
            <td className='px-6 py-2'> John</td>
            <td className='px-6 py-2'> ********</td>
            <td className='px-6 py-2'>John@123gmail.com</td>
            <td className='px-6 py-2'> Kpk</td>
            <td className='px-6 py-2'> Haripur</td>            
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
              <td className='px-6 py-4'></td>
              <td className='px-6 py-4'></td>
              <td className='px-6 py-4'></td>
              <td className='px-6 py-4'></td>
              <td className='px-6 py-4'></td>
              <td className='px-6 py-4'>
                <button
                  onClick={() => {
                    setRoomId(booking.hotelRoom._id);
                    toggleRatingModal()
                  }}
                  className='font-medium text-blue-600 hover:underline'
                >
                  Delete
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

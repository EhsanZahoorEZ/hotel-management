// components/FoodTable.tsx

import React from 'react';

interface FoodBooking {
    itemName: string;
    name: string;
    email: string;
    location: string;
    address: string;
    phoneNumber: string;
}

interface FoodTableProps {
    bookings: FoodBooking[];
}

const FoodTable: React.FC<FoodTableProps> = ({ bookings }) => {
    return (
        <div>
            <h2>Food Bookings</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.itemName}</td>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td>{booking.location}</td>
                            <td>{booking.address}</td>
                            <td>{booking.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FoodTable;

import { useRouter } from 'next/router';

const TableFood = () => {
    const router = useRouter();
    const { itemName, name, email, location, address, phoneNumber } = router.query;

    return (
        <div>
            <h1>Food Details Table</h1>
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
                    <tr>
                        <td>{itemName}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{location}</td>
                        <td>{address}</td>
                        <td>{phoneNumber}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableFood;
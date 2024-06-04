import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// interface ModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     onSubmit: (formData: FormData) => void;
// }
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: FormData) => void;
}

interface FormData {
    itemName: string;
    name: string;
    email: string;
    location: string;
    address: string;
    phoneNumber: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        itemName: '',
        name: '',
        email: '',
        location: '',
        address: '',
        phoneNumber: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);

        // const query = Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, String(value)]));

        
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-4 shadow-lg w-full max-w-md">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    &times;
                </button>
                <h2 className="text-lg font-bold text-tertiary-dark mb-2">Enter Your Food Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                            Item Name
                        </label>
                        <input
                            type="text"
                            id="itemName"
                            name="itemName"
                            value={formData.itemName}
                            onChange={handleChange}
                            className="appearance-none shadow-lg border-gray-500 border-2 border-r border-t rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        <div className="flex justify-between my-2">
                            <div className="w-1/2 pr-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="appearance-none shadow-lg border-gray-500 border-2 border-r border-t rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="w-1/2 pl-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none rounded shadow-lg border-gray-500 border-2 border-r border-t w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="appearance-none shadow-lg border-gray-500 border-2 border-t rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="appearance-none shadow-lg border-gray-500 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="appearance-none shadow-lg border-gray-500 border-2 border-t rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <Link href='/FoodTable'
                            type="submit"
                            className="bg-green-700 rounded-1xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;

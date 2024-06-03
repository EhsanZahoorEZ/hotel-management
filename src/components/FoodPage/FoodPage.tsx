'use client';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '../FoodModel/FoodModel';
interface FoodItem {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

const foodItems: FoodItem[] = [
    {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce and mozzarella cheese.',
        price: 'Pkr 250',
        imageUrl: 'images/marpiza.jfif',
    },

    {
        id: 2,
        name: 'Cheeseburger',
        description: 'Juicy beef patty with cheddar cheese and lettuce.',
        price: 'Pkr 300',
        imageUrl: '/images/chesetwo.jfif',
    },
    {
        id: 2,
        name: 'Chickenburger',
        description: 'Classic burger patty with cheddar cheese and lettuce.',
        price: 'Pkr 280',
        imageUrl: '/images/chickenburger.jfif',
    },
    {
        id: 2,
        name: 'Cheeseburger',
        description: 'Classic burger patty with cheddar cheese and lettuce.',
        price: 'Pkr 300',
        imageUrl: '/images/pizza.jfif',
    },

    //   this section for lunch items 
];
const LunchItems: FoodItem[] = [
    {
        id: 1,
        name: 'Grilled Chicken Salad',
        description: 'Fresh salad with grilled chicken, lettuce, tomatoes, and dressing.',
        price: 'Pkr 1900',
        imageUrl: '/images/chicken.jfif',
    },
    {
        id: 2,
        name: 'Club Sandwich',
        description: 'Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo.',
        price: 'Pkr 1300',
        imageUrl: '/images/sandwitch.jfif',
    },
    {
        id: 2,
        name: 'Pasta Primavera',
        description: 'Pasta with fresh vegetables and a light olive oil sauce with perfect.',
        price: 'Pkr 480',
        imageUrl: '/images/pasta.jfif',
    },
    {
        id: 2,
        name: 'Mutton',
        description: 'Fresh salad with mutton, lettuce, tomatoes, and dressing.',
        price: 'Pkr 2300',
        imageUrl: '/images/mutton.jfif',
    },
];
//   this section for dinner
const DinnerItems: FoodItem[] = [
    {
        id: 1,
        name: 'Grilled Chicken Salad',
        description: 'Fresh salad with grilled chicken, lettuce, tomatoes, and dressing.',
        price: 'Pkr 1900',
        imageUrl: '/images/chicken.jfif',
    },
    {
        id: 2,
        name: 'Steak',
        description: 'Juicy steak cooked to perfection with a side of mashed potatoes.',
        price: 'Pkr 1300',
        imageUrl: '/images/sandwitch.jfif',
    },

    {
        id: 2,
        name: 'seekh kabab  ',
        description: 'Fresh salad with seekh kabab , lettuce, tomatoes, and dressing.',
        price: 'Pkr 480',
        imageUrl: '/images/kababs.jfif',
    },
    {
        id: 2,
        name: 'Mutton',
        description: 'Fresh salad with mutton, lettuce, tomatoes, and dressing.',
        price: 'Pkr 2300',
        imageUrl: '/images/mutton.jfif',
    },
];

const FoodPage: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOrderNow = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (formData: FormData) => {
        console.log('Submitted data:', formData);
        // You can handle form submission logic here, such as sending the data to a server
        // After handling the submission, close the modal
        setIsModalOpen(false);
    };
   
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center font-bold text-tertiary-dark font-serif text-2xl md:text-3xl lg:text-4xl">Welcome to Our Hotel Management and Delicious Delight!</h1>
            <p className="mb-8 text-center text-sm md:text-base lg:text-lg">Experience the vibrant flavors of Asia with our expertly crafted dishes that blend traditional techniques with modern twists. Enjoy sushi, stir-fries, and more in a contemporary setting.</p>

            {/* Navigation Links */}
            <ul className="flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 my-10">
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link className="font-bold border rounded-md px-3 py-1 sm:px-5 sm:py-2" href='/Menu'>All</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link className="font-bold border rounded-md px-3 py-1 sm:px-5 sm:py-2" href='/'>BreakFast</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link className="font-bold border rounded-md px-3 py-1 sm:px-5 sm:py-2" href='/'>Lunch</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link className="font-bold border rounded-md px-3 py-1 sm:px-5 sm:py-2" href='/'>Dinner</Link>
                </li>
            </ul>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
            
            {/* Menu for BreakFast */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">Our Menu For BreakFast</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {foodItems.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-2">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            <p className="text-lg font-bold">{item.price}</p>
                            <button onClick={handleOrderNow} className="bg-orange-400 text-white hover:scale-110 duration-400 border-4 border-gray-300 transition-all shadow-primary text-lg font-serif font-extrabold rounded-xl flex justify-center items-center py-2 px-4 md:px-6 lg:px-8" >Order Now</button>                           
                        </div>                      
                    </div>
                ))}
            </div>

            {/* Menu for Lunch */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-5 text-center">Our Menu For Lunch</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {LunchItems.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-2">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            <p className="text-lg font-bold">{item.price}</p>
                            <button onClick={handleOrderNow} className="bg-orange-400 text-white hover:scale-110 duration-400 border-4 border-gray-300 transition-all shadow-primary text-lg font-serif font-extrabold rounded-xl flex justify-center items-center py-2 px-4 md:px-6 lg:px-8" >Order Now</button>
                             </div>
                    </div>
                ))}
            </div>

            {/* Menu for Dinner */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-5 text-center">Our Menu For Dinner</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {DinnerItems.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-2">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            <p className="text-lg font-bold">{item.price}</p>
                            <button onClick={handleOrderNow} className="bg-orange-400 text-white hover:scale-110 duration-400 border-4 border-gray-300 transition-all shadow-primary text-lg font-serif font-extrabold rounded-xl flex justify-center items-center py-2 px-4 md:px-6 lg:px-8" >Order Now</button>
 
                             </div>
                    </div>
                ))}
            </div>

            {/* Go to Menu Link */}
            <div className="flex flex-col justify-center items-center mt-8">
                <Link href='/Menu' className="bg-primary text-white hover:scale-110 duration-400 w-72 flex justify-center items-center py-4 border-4 border-gray-300 transition-all shadow-primary text-lg font-serif font-extrabold rounded-xl">Go To Menu</Link>
            </div>
        </div>
    );
};

export default FoodPage;
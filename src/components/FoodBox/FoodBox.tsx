import React from 'react';
import Link from 'next/link';
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

const FoodMenu: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className='text-center font-bold text-tertiary-dark font-serif'>Welcome to Our Hotel Management and  Delicious Delight!</h1>
            <p className="mb-8 text-center text-sm">Experience the vibrant flavors of Asia with our expertly crafted dishes that blend traditional techniques with modern twists. Enjoy sushi, stir-fries, and more in a contemporary setting..</p>

            {/*  */}
            <ul className='flex items-center justify-between mx-96 my-10 '>
                <li className='hover:-translate-y-2 duration-500  transition-all'>
                    <Link className='font-bold border   rounded-md  px-5 py-2 ' href='/Menu'>All</Link>
                </li>
                <li className='hover:-translate-y-2 duration-500 transition-all '>
                    <Link className='font-bold border   rounded-md  px-7 py-2' href='/'>BreakFast</Link>
                </li>
                <li className='hover:-translate-y-2 duration-500 transition-all'>
                    <Link className='font-bold border   rounded-md  px-4 py-2  ' href='/'>Lunch</Link>
                </li>
                <li className='hover:-translate-y-2 duration-500 transition-all '>
                    <Link className='font-bold border   rounded-md px-5 py-2 ' href='/'>Dinner</Link>
                </li>
            </ul>
            <h1 className="text-2xl font-bold mb-8 text-center">Our Menu For BreakFast</h1>
            {/*  */}
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {foodItems.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-lg">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-1xl font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            <p className="text-lg font-bold">{item.price}</p>
                            <Link href='/Menu' className='bg-orange-400 text-white hover:scale-110 duration-400 border-4 border-gray-300 border-t border-r transition-all  shadow-primary text-lg font-serif font-extrabold rounded-xl  flex flex-col justify-center items-center py-2'>Order Now</Link>

                        </div>
                    </div>
                ))}
            </div>
            {/*  */}
            <h1 className="text-2xl font-bold my-5 text-center ">Our Menu For Lunch</h1>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {LunchItems.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-lg">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-1xl font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            <p className="text-lg font-bold">{item.price}</p>
                            <Link href='/Menu' className='bg-orange-400 text-white hover:scale-110 duration-400 border-4 border-gray-300 border-t border-r transition-all  shadow-primary text-lg font-serif font-extrabold rounded-xl  flex flex-col justify-center items-center py-2'>Order Now</Link>

                        </div>
                    </div>
                ))}
            </div>
            {/*  */}
            <h1 className="text-2xl font-bold my-5 text-center ">Our Menu For Dinner</h1>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {DinnerItems.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-lg">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-1xl font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            <p className="text-lg font-bold">{item.price}</p>
                            <Link href='/Menu' className='bg-orange-400 text-white hover:scale-110 duration-400 border-4 border-gray-300 border-t border-r transition-all  shadow-primary text-lg font-serif font-extrabold rounded-xl  flex flex-col justify-center items-center py-2'>Order Now</Link>

                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center mt-8">
                <Link href='/Menu' className='bg-primary text-white hover:scale-110 duration-400 w-72  flex flex-col justify-center items-center py-4    border-4 border-gray-300 border-t border-r transition-all  shadow-primary text-lg font-serif font-extrabold rounded-xl  '>Go To Menu</Link>
            </div>

        </div>
    );
};

export default FoodMenu;

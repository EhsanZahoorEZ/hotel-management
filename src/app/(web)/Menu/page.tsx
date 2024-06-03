// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'


// function page() {
//     return (
//         <div className='px-5 w-auto'>
//             <div className='h-80'>
//                 <Image
//                     alt='gallery'
//                     className='img rounded-2xl '
//                     src='/images/hero-13.jpeg'
//                     width={200}
//                     height={200}
//                 />
//             </div>
//             {/*  */}
//             <h1 className='text-4xl font-bold '>Menu</h1>
//             {/*  */}
//             <div className="flex items-center justify-between  mt-5">
//                 <div className="border-2 border-gray-300 p-2">
//                     <div className="w-48 h-">
//                         <Image
//                             alt='gallery'
//                             className='img rounded-s '
//                             src='/images/hero-13.jpeg'
//                             width={200}
//                             height={200}
//                         />
//                     </div>
//                     <p className="">Chicken</p>
//                     <div className="mt-2  justify-items-center">
//                         <Link href='/' className='border-2 border-red-400  shadow-sm  px-10 py-1 bg-red-500 rounded-2xl  '>Order</Link>
//                     </div>
//                 </div>
             
//                 <div className="border-2 border-gray-300 p-2">
//                     <div className="w-40 h-28">
//                         <Image
//                             alt='gallery'
//                             className='img rounded-s '
//                             src='/images/hero-13.jpeg'
//                             width={200}
//                             height={200}
//                         />
//                     </div>
//                     <p className="">Chicken</p>
//                     <div className="mt-2  justify-items-center">
//                         <Link href='/' className='border-2 border-red-400  shadow-sm  px-10 py-1 bg-red-500 rounded-2xl  '>Order</Link>
//                     </div>
//                 </div>
      
//                 <div className="border-2 border-gray-300 p-2">
//                     <div className="w-32 h-16">
//                         <Image
//                             alt='gallery'
//                             className='img rounded-s '
//                             src='/images/hero-13.jpeg'
//                             width={200}
//                             height={200}
//                         />
//                     </div>
//                     <p className="">Chicken</p>
//                     <div className="mt-2  justify-items-center">
//                         <Link href='/' className='border-2 border-red-400  shadow-sm  px-10 py-1 bg-red-500 rounded-2xl  '>Order</Link>
//                     </div>
//                 </div>
//                 {/*  */}
//                 <div className="border-2 border-gray-300 p-2">
//                     <div className="w-48 h-16">
//                         <Image
//                             alt='gallery'
//                             className='img rounded-s '
//                             src='/images/hero-13.jpeg'
//                             width={200}
//                             height={200}
//                         />
//                     </div>
//                     <p className="">Chicken</p>
//                     <div className="mt-2  justify-items-center">
//                         <Link href='/' className='border-2 border-red-400  shadow-sm  px-10 py-1 bg-red-500 rounded-2xl  '>Order</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default page

// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import FoodBox from '@/components/FoodBox/FoodBox';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>OUR Menu</title>
        <meta name="description" content="Responsive food box with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Food Box App</h1>
        <FoodBox
          imageSrc="/public/images/hero-1.jpeg"
          title="Delicious Pizza"
          description="A tasty pizza with fresh ingredients and a crispy crust."
        />
      </main>
    </div>
  );
};

export default Home;

'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { PiLockKeyFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

function About() {
  return (
    <div className='px-6'>
      <div className="">
        <div className=" flex flex-wrap md:flex-nowrap items-center justify-between">
          <div className="w-full md:w-5/12 mb-6 md:mb-0">
            <p className='font-black font-serif text-4xl '>
              About Us
            </p>
            <p className='font-serif'>Welcome to Hotel Room Booking Website!</p>
            <br />
            <p className='font-serif text-base'>At  Hotel Room Booking Website ,we are passionate about providing travelers with the perfect accommodations for their journeys. Whether you are planning a business trip, a romantic getaway, or a family vacation, we are here to help you find the ideal hotel room to suit your needs and preferences.</p>
          </div>
          {/*  */}
          <div className="w-full md:w-5/12">
            <div className='md:grid hidden gap-6 grid-cols-1 '>
              <div className='rounded-2xl overflow-hidden h-32'>
                <Image
                  alt='gallery'
                  src='/images/hero-3.jpeg'
                  width={200}
                  height={200}
                  className='img scale-animation w-full h-full object-cover'
                />
              </div>

              <div className='grid grid-cols-2 gap-8 h-32 mt-4'>
                <div className='rounded-2xl overflow-hidden '>
                  <Image
                    src='/images/hero-2.jpeg'
                    alt='hero-2'
                    width={300}
                    height={300}
                    className='img scale-animation w-full h-full object-cover'
                  />
                </div>
                <div className='rounded-2xl overflow-hidden'>
                  <Image
                    src='/images/hero-3.jpeg'
                    alt='hero-3'
                    width={300}
                    height={300}
                    className='img scale-animation w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" flex flex-wrap md:flex-nowrap items-center justify-between mt-12">
        <div className='w-full md:w-5/12 mb-6 md:mb-0'>
          <div className='md:grid hidden gap-6 grid-cols-1 '>
            <div className='rounded-2xl overflow-hidden h-96'>
              <Image
                alt='gallery'
                className='img'
                src='/images/hero-12.jpeg'
                width={200}
                height={200}
              />
            </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 mt-5">
            <p className='font-black font-serif text-4xl '>
              Our Menu
            </p>
            <div className=" mt-5 w-auto">
                <h2 className='font-bold font-serif text-2xl text-tertiary-dark '>Ez Hotelzz </h2>
                <p className='font-serif text-sm mt-2'>Experience the vibrant flavors of Asia with our expertly crafted dishes that blend traditional techniques with modern twists. Enjoy sushi, stir-fries, and more in a contemporary setting.</p>
                <p className='text-sm mt-2 '> <span className='text-lg font-bold text-tertiary-dark'>Hours:</span> <br />
                    11 AM - 10 PM
                    <p className='font-serif text-sm mt-2'><span className='text-lg font-bold  text-tertiary-dark'>Atmosphere:</span></p>
                    Modern and chic, ideal for dinner dates and group gatherings.</p>

                <h2 className='text-lg font-bold text-tertiary-dark mt-4' >Daily Specials</h2>
                <h3 className='text-base font-thin mt-2'>Today Special:</h3>
                <p className='font-serif text-sm mt-2'>Every day, our chefs prepare special dishes that highlight seasonal ingredients and unique flavors. Check out today’s specials and indulge in a culinary surprise.</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="flex flex-wrap items-center justify-around md:justify-between px-4 pt-14">
                <div className=" shadow-md rounded-lg p-4 border-gray-300 border-4 border-l border-t w-full md:w-64 h-56 scale-animation ">
                <Link href='/Menu'>
                <PiLockKeyFill  className='hover:-translate-y-2 text-yellow-500 text-7xl mx-auto mb-4' />
                </Link>
                            {/* <PiLockKeyFill  className='hover:-translate-y-2 text-yellow-500 text-7xl mx-auto mb-4' /> */}
                            <h2 className="text-xl font-bold text-center ">Event & Private Dining </h2>
                            <p className='text-xs text-center'>Our Hotel are opoen all days.We take reservation for lunch for any size for party and in the evening for groups of or more </p>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className=" shadow-md rounded-lg p-4 border-gray-300 border-4 border-l border-t w-full md:w-64 h-56 scale-animation">
                        <Link  href='/Menu'>

                        <FaClock className='hover:-translate-y-2 text-yellow-500 text-6xl mx-auto mb-4 ' />
                        </Link>
                        <h2 className="text-xl font-bold mb-4 text-center">Opening Hours</h2>
                        <p className='text-xs text-center'>Monday to saturday Noon -11pm</p>
                        <span className='text-xs text-center'>sunday Noon 10pm</span>  <br />
                        <span className='text-xs text-center'>Monday faimly style super 6pm</span>
                    </div>
                      {/*  */}
                        {/*  */}

                    <div className="shadow-md rounded-lg p-4 border-gray-300 border-4 border-l border-t  w-64 h-56 scale-animation">
                    <Link href='/Menu'>

                    <FaPenToSquare className='hover:-translate-y-2 text-yellow-500 text-6xl mx-auto mb-4 '/>
                    </Link>
                    <h2 className="ttext-xl font-bold mb-4 text-center">Reservation</h2>
                    <p className='text-xs text-center'>Reservation taken by telephone only on ********** for general enquires please email khan123@.com</p>
                </div>
            </div>
            {/*  */}
            <div className="mx-auto w-96 my-10">
          <Link href='/Menu' className='bg-primary text-white hover:scale-110 duration-400 border-4 border-gray-300 border-t border-r transition-all  shadow-primary text-lg font-serif font-extrabold rounded-xl  flex flex-col justify-center items-center py-4'>Go To Menu</Link>
        </div>
            {/*  */}
      <div className=" mt-14 w-5/6">
        <p  className='font-black font-serif text-4xl text-tertiary-dark '>
          What We Offer ?
        </p>
        <h2 className='font-bold mt-4'>Extensive Selection</h2>
        <p className='font-serif'>We offer a diverse range of hotel rooms, from budget-friendly options to luxury suites, ensuring that there something for every traveler and every budget.</p>
        <br />
        <h2 className='font-bold'>Easy Booking Process</h2>
        <p className='font-serif'>Our website features a user-friendly interface that allows you to search for hotel rooms based on your destination, travel dates, and specific preferences. With just a few clicks, you can browse through available options, compare prices, and make your booking securely online.
        </p>
        <br />
        <h2 className='font-bold'>Excellent Customer Service</h2>
        <p className='font-serif'>Our dedicated customer service team is available around the clock to assist you with any questions or concerns you may have before, during, or after your stay. We are committed to providing exceptional service and ensuring that your experience with Hotel Room Booking Website is a positive one</p>
        <br />
      </div>
      <div className="mt-5 w-auto">
                <h2 className='font-bold font-serif text-3xl text-tertiary-dark  '>Ez Hotelzz </h2>
                <p className='font-serif'>Experience the vibrant flavors of Asia with our expertly crafted dishes that blend traditional techniques with modern twists. Enjoy sushi, stir-fries, and more in a contemporary setting.</p>
                <h2 className='font-bold'>ABOUT</h2>
              <p className='font-serif'>we believe that dining is an integral part of the travel experience. Our restaurants offer a variety of culinary options to suit every palate, crafted with the freshest ingredients and served in beautiful settings. Whether you are in the mood for a casual bite, a gourmet meal, or room service, we have something for everyone.Indulge in the flavors of the Mediterranean  Our menu features a delightful selection of fresh seafood, handmade pastas, and seasonal vegetables, all prepared with a touch of Mediterranean flair.Indulge in the flavors of the Mediterranean  Our menu features a delightful selection of fresh seafood, handmade pastas, and seasonal vegetables, all prepared with a touch of Mediterranean flair</p>
              
            </div>
      {/*  */}
      <div className="mt-5">
        <div className='bg-tertiary-light text-white px-4 font-serif border-4 border-gray-300 border-t border-r  rounded-xl md:rounded-[30px] flex flex-col justify-center items-center '>       
        <p className='py-12 px-5'>If you have any questions, feedback, or inquiries, please dont hesitate to get in touch with us. Our friendly team is here to assist you and ensure that your booking experience is smooth and hassle-free.We partner with a wide range of hotels and accommodation providers worldwide to bring you the best selection of options for your travels. Our partnerships allow us to negotiate competitive rates and exclusive deals for our customers, so you can enjoy great savings on your bookings.
          Thank you for choosing Hotel Room Booking Website for your travel needs. We look forward to helping you find the perfect hotel room for your next adventure!
        </p>
        </div>
      </div>

    </div>
  )
}

export default About
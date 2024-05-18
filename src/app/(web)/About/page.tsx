'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <div className='px-6'>
      <div className="">
        <div className="  container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
          <div className="w-4/12">
            <p className='font-black font-serif text-4xl '>
              About Us
            </p>
            <p className='font-serif'>Welcome to Hotel Room Booking Website!</p>
            <br />
            <p className='font-serif text-base'>At  Hotel Room Booking Website ,we are passionate about providing travelers with the perfect accommodations for their journeys. Whether you are planning a business trip, a romantic getaway, or a family vacation, we are here to help you find the ideal hotel room to suit your needs and preferences.</p>
          </div>
          {/*  */}
          <div className="">
            <div className='md:grid hidden gap-6 grid-cols-1 '>
              <div className='rounded-2xl overflow-hidden h-32'>
                <Image
                  alt='gallery'
                  className='img'
                  src='/images/hero-3.jpeg'
                  width={200}
                  height={200}
                />
              </div>

              <div className='grid grid-cols-2 gap-8 h-32'>
                <div className='rounded-2xl overflow-hidden'>
                  <Image
                    src='/images/hero-2.jpeg'
                    alt='hero-2'
                    width={300}
                    height={300}
                    className='img scale-animation'
                  />
                </div>
                <div className='rounded-2xl overflow-hidden'>
                  <Image
                    src='/images/hero-3.jpeg'
                    alt='hero-3'
                    width={300}
                    height={300}
                    className='img scale-animation'
                  />
                </div>
              </div>
            </div>
          </div>


        </div>
        {/*  */}
        <div className=" container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
          <div className='md:grid hidden gap-6 grid-cols-1 '>
            <div className='rounded-2xl overflow-hidden h-56'>
              <Image
                alt='gallery'
                className='img'
                src='/images/hero-7.jpeg'
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="justify-start w-4/12 mt-14">
            <p className='font-black font-serif text-4xl '>
              Our Mission
            </p>
            <p className='font-serif text-base'>Our mission is to make the process of booking hotel rooms simple, convenient, and stress-free. We understand that finding the right accommodation can make or break your travel experience, which is why we arecommitted to offering a seamless booking platform that puts you in control</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" mt-14 w-5/6">
        <p  className='font-black font-serif text-4xl '>
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
      {/*  */}
      <div className="mt-5">
      <div className="mx-auto w-96 my-8">
          <Link href='/rooms' className='bg-primary text-white hover:scale-110 duration-400 border-4 border-gray-300 border-t border-r transition-all  shadow-primary text-lg font-serif font-extrabold rounded-xl  flex flex-col justify-center items-center py-4'>Contect Us</Link>
        </div>
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
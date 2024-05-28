import Image from 'next/image';
import Link from 'next/link';

export const heading1 = (
  <>
    <p className='font-serif text-4xl font-bold mb-0'>Spend Time Your Faimly in Quality hotelzz</p><br />
    <p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg font-semibold'>
    Discover, compare, and book the ideal hotel room for your next getaway hassle-free with Stay Sorted !AND
    Experience the vibrant flavors of Asia with our expertly crafted dishes that blend traditional techniques with modern twists. Enjoy sushi, stir-fries, and more in a contemporary setting
    </p>
    <Link href='/rooms' className='btn-primary font-serif border-4 border-gray-300 border-t border-r'>Get Started</Link>
  </>
);

export const section2 = (
  <div className='md:grid hidden gap-8 grid-cols-1'>
    <div className='rounded-2xl overflow-hidden h-48'>
      <Image
        src='/images/hero-11.jpeg'
        alt='hero-1'
        width={300}
        height={300}
        className='img scale-animation'
      />
    </div>

    <div className='grid grid-cols-2 gap-8 h-48'>
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
);

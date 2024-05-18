import Link from "next/link";

const NewsLetter = () => {
  return (
    <section className='container mx-auto px-2  border-spacing-1'>
      <form className='bg-primary text-white border-4 border-gray-300 border-t border-r  rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-15'>
        <p className='md:font-semibold text-lg md:text-xl text-center mb-3 font-serif'>
          Explore More About Our Hotel
        </p>
        <h6 className='md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center '>
          Sign Up for Our Newsletter
        </h6>

        <div className='flex-col justify-center w-full md:flex-row flex pt-12 font-serif'>
          <input
            type='email'
            placeholder='Your email'
            className='bg-[#026057] h-11 md:h-16 mb-2 md:mb-0 border-4 border-gray-300 border-t border-r rounded-xl pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none'
          />
          <Link href='/About' type='button' className='btn-tertiary font-serif '>
           About Us
          </Link>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;

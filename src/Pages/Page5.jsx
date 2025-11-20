import React from 'react';
import man1 from '../assets/man1.jpg';
import man2 from '../assets/man2.jpg';
import man3 from '../assets/man3.jpg';
import man4 from '../assets/man4.jpg';

function Page5() {
  return (
    <div className='flex flex-col justify-center items-center text-center p-10 bg-gray-200'>

      {/* Heading at the top */}
      <h1 className='text-3xl md:text-4xl text-black font-semibold mb-10 p-10'>
        Success Stories
      </h1>

      {/* Cards Container */}
      <div className='flex flex-col md:flex-row gap-10'>

        {/* Left Column */}
        <div className='flex flex-col gap-8'>
          
          <div className='flex flex-row gap-5'>
            <img src={man1} className='w-20 h-20 rounded-lg' alt='man1' />
            <div className='flex flex-col text-left'>
              <p className='font-semibold'>Rob Pando</p>
              <p className='text-sm'>
                TOP was a perfect match for my learning style. Not walking me
                through an entire project but actually forcing me to figure it out…
              </p>
            </div>
          </div>

          <div className='flex flex-row gap-5'>
            <img src={man2} className='w-20 h-20 rounded-lg' alt='man2' />
            <div className='flex flex-col text-left'>
              <p className='font-semibold'>Rob Pando</p>
              <p className='text-sm'>
                TOP was a perfect match for my learning style. Not walking me
                through an entire project but actually forcing me to figure it out…
              </p>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className='flex flex-col gap-8'>
          
          <div className='flex flex-row gap-5'>
            <img src={man3} className='w-20 h-20 rounded-lg' alt='man3' />
            <div className='flex flex-col text-left'>
              <p className='font-semibold'>Rob Pando</p>
              <p className='text-sm'>
                TOP was a perfect match for my learning style. Not walking me
                through an entire project but actually forcing me to figure it out…
              </p>
            </div>
          </div>

          <div className='flex flex-row gap-5'>
            <img src={man4} className='w-20 h-20 rounded-lg' alt='man4' />
            <div className='flex flex-col text-left'>
              <p className='font-semibold'>Rob Pando</p>
              <p className='text-sm'>
                TOP was a perfect match for my learning style. Not walking me
                through an entire project but actually forcing me to figure it out…
              </p>
            </div>
          </div>

        </div>

      </div>


      <p className='flex justify-center items-center text-2xl text-black p-20 underline decoration-black mt-10'>Read more success stories</p>

   {/*buttons part */}
      <div className='flex flex-col p-18'>
        <div className='flex flex-col justify-center items-center text-center gap-5'>
            <h2 className='text-black font-bold text-3xl'>Support us!</h2>
            <p>The Odin Project is funded by the community. Join us in empowering <br /> learners around the globe by supporting The Odin Project! </p>
        </div>
        <div className='flex flex-row justify-center items-center text-center gap-5 p-7'>
            <button className='rounded-md bg-white border shadow-md w-32 h-10 hover:cursor-pointer transition-transform duration-300 hover:scale-110'>Learn More</button>
            <button className='rounded-md bg-gray-600 text-white  shadow-sm w-32 h-10 hover:cursor-pointer transition-transform duration-300 hover:scale-110'>Donate Now →</button>
        </div>

      </div>
    </div>
  );
}

export default Page5;

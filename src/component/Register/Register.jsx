import React, { useState } from 'react';
import { registerImg } from '../../Data/HomePageData';

const Register = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className='w-full flex flex-col lg:flex-row gap-2 items-center bg-black pt-12 lg:pt-0 h-screen px-4 xl:px-30 z-4'>
      <div className='w-[50%] text-white'>
        <h2 className='text-2xl font-bold mb-4'>BBC Register</h2>
        <p className='mb-4'>
          You must be 18 or over to register for a BBC account
        </p>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='p-3 mb-4 text-zinc-300 outline-none border-b border-white'
          />
          <button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg'
          >
            Continue
          </button>
        </form>
        <p className='mt-4 text-sm'>
          Already have a BBC account?{' '}
          <a href='#' className='text-blue-400'>
            Sign in now
          </a>
        </p>
      </div>

      <div className='flex justify-center mt-6 lg:mt-0'>
        {<img className='lg:w-[30%] lg:fixed h-[300px]  lg:h-[70%] lg:top-30 lg:right-0' src={registerImg.image} alt='' />}
        </div>

    </div>
  );
};

export default Register;

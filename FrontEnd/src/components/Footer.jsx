import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
    <div className='md:mx-10'>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ----left section ---*/}
        <div className="">
<img className='mb-5 w-40' src={assets.logo} alt="" />
<p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Adipisci praesentium nesciunt natus deserunt illum rerum 
     repellat aperiam voluptate alias corporis.</p>
        </div>
          {/* ----Center section ---*/}
          <div className="">
<p className='text-xl font-medium mb-5'>Company</p>
<ul className='flex flex-col gap-2 mb-5'>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Privacy policy</li>
</ul>
</div>
  {/* ----Right section ---*/}
  <div className="">
<p className='text-xl font-medium mb-5'> Get In Touch</p>
<ul className='flex flex-col gap-2 mb-5'>
    <li>09994384930</li>
    <li>Demo@gmail.com</li>
</ul>
</div>

      </div>
        {/* ---copy right --- */}

      <div className="">
        <hr />
        <p className='p-5 text-center'>copy right @ 2024</p>
      </div>
    </div>
  )
}

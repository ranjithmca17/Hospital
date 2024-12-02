// import React from 'react'
// import { specialityData } from '../assets/assets';
// import {Link} from "react-router-dom";

// export default function Speciality() {
//   return (
//     <div id='#speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
//         <h1 className='text-3xl font-medium'>Fid By Speciality</h1>
//         <p className='sm:w-1/3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, est!</p>
//         <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
// {
//     specialityData.map((item,index)=>(
//         <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center cursor-pointer text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctor/${item.speciality}`}>
//             <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
//             <p>{item.speciality}</p>
//         </Link>
//     ))
// }
//       </div>      
//     </div>
//   )
// }



import React from 'react';
import { specialityData } from '../assets/assets'; // Importing speciality data
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation

export default function Speciality() {
  return (
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find By Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, est!
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo(0, 0)} // Scroll to the top when clicked
            className="flex flex-col items-center cursor-pointer text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt={item.speciality} />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}


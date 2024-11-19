// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { AppContext } from '../context/Context';

// const Doctors = () => {
//   const {speciality}=useParams();
// console.log(speciality);

// const {doctors}=useContext(AppContext)
//   const [filterDoc,setFillerDoc]=useState([]);

//   const applyFilter=()=>{
//     if(speciality){
//       setFillerDoc(doctors.filter(doc=>doc.speciality===speciality))
//     }else{
//       setFillerDoc(doctors)
//     }
//   }

//   useEffect(()=>{
// applyFilter();
//   },[doctors,speciality])

//   return (
//     <div>
//     <p>Browse through the doctors speciality</p>

//     <div className="">
//       <div className="">
//         <p>General physician</p>
//         <p>Gynecologist</p>
//         <p>Dermtologist</p>
//         <p>Pediatricians</p>
//         <p>Neurologist</p>
//         <p>Gastroenterologiest</p>

//         <div className="">
//           {
//             filterDoc.map((item,index)=>(
//               <div onClick={()=>navigate(`/appointment/${item._id}`)} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10] transition-all duration-500">
//                   {/* <div className=""> */}
//                   <img src={item.image} alt="" className='bg-blue-50' />
//               {/* </div> */}
//               <div className="p-4 ">
//                   <div className="flex items-center gap-2 text-sm text-center text-green-500">
//                   <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
//               </div>
//               <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//               <p className='text-gray-600 text-sm'>{item.speciality}</p>
//               </div>
//               </div>
//                           ))
//           }
//         </div>
//       </div>
//       </div>  
//     </div>
//   )
// }

// export default Doctors


import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Context';

const Doctors = () => {
  const { speciality } = useParams();  // Extract the 'speciality' from the URL
  const { doctors } = useContext(AppContext);  // Get doctors from context
  const [filterDoc, setFilterDoc] = useState([]);  // State for filtered doctors
  const navigate = useNavigate();  // Hook for navigation

  // Filter doctors based on the speciality
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  // Apply filter whenever doctors or speciality changes
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p>Browse through the doctors speciality</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>

          <div>
            {filterDoc.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10] transition-all duration-500"
              >
                <img src={item.image} alt="" className="bg-blue-50" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;

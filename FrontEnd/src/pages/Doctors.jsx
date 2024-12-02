// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/Context';

// const Doctors = () => {
//   const { speciality } = useParams();  // Extract the 'speciality' from the URL
//   const { doctors } = useContext(AppContext);  // Get doctors from context
//   const [filterDoc, setFilterDoc] = useState([]);  // State for filtered doctors
//   const navigate = useNavigate();  // Hook for navigation

//   console.log(speciality,"  : the uri is ");

//   // Filter doctors based on the speciality
//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   // Apply filter whenever doctors or speciality changes
//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <div>
//       <p>Browse through the doctors speciality</p>
//       <div>
//         <div>
//           <p>General physician</p>
//           <p>Gynecologist</p>
//           <p>Dermatologist</p>
//           <p>Pediatricians</p>
//           <p>Neurologist</p>
//           <p>Gastroenterologist</p>

//           <div>
//             {filterDoc.map((item) => (
//               <div
//                 key={item._id}
//                 onClick={() => navigate(`/appointment/${item._id}`)}
//                 className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10] transition-all duration-500"
//               >
//                 <img src={item.image} alt="" className="bg-blue-50" />
//                 <div className="p-4">
//                   <div className="flex items-center gap-2 text-sm text-center text-green-500">
//                     <p className="w-2 h-2 bg-green-500 rounded-full"></p>
//                     <p>Available</p>
//                   </div>
//                   <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//                   <p className="text-gray-600 text-sm">{item.speciality}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;






import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Context';

const Doctors = () => {
  const { speciality } = useParams();  // Extract the 'speciality' from the URL
  const { value } = useContext(AppContext);  // Get value from context
  const doctors = value?.doctors || [];  // Safely access doctors from context, default to empty array
  const [filterDoc, setFilterDoc] = useState([]);  // State for filtered doctors
  const navigate = useNavigate();  // Hook for navigation

  console.log(speciality, "  : the uri is ");

  // Filter doctors based on the speciality
  const applyFilter = () => {
    if (speciality) {
      // If speciality exists, filter the doctors
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      // If no speciality is provided, show all doctors
      setFilterDoc(doctors);
    }
  };

  // Apply filter whenever doctors or speciality changes
  useEffect(() => {
    if (doctors.length > 0) {
      applyFilter();  // Apply filter only if doctors data is available
    }
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors' specialities</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=>speciality==='General Physician'?navigate('/doctors'):navigate('/doctors/General%20physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>General Physician</p>
          <p  onClick={()=>speciality==='Gynecologist'?navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
          <p onClick={()=>speciality==='Dermatologist'?navigate('/doctors'):navigate('/doctors/Dermatologist')}   className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
          <p onClick={()=>speciality==='Pediatrician'?navigate('/doctors'):navigate('/doctors/Pediatricians')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Pediatrician</p>
          <p onClick={()=>speciality==='Neurologist'?navigate('/doctors'):navigate('/doctors/Neurologist')}   className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
          <p onClick={()=>speciality==='Gastroenterologist'?navigate('/doctors'):navigate('/doctors/Gastroenterologist')}   className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {filterDoc.length > 0 ? (
              filterDoc.map((item) => (
                <div
                  key={item._id}
                  onClick={() => navigate(`/appointment/${item._id}`)} // Navigate to the appointment page for the specific doctor
                  className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
                >
                  <img src={item.image} alt={item.name} className="bg-blue-50" />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-center text-green-500">
                      <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                      <p>Available</p>
                    </div>
                    <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.speciality}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No doctors found for the selected speciality.</p>  
            )}

        </div>
      </div>
    </div>
  );
};

export default Doctors;

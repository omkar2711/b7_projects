// import React from 'react'

// const Card = ({allNote}) => {
//     console.log('allNote in Card:', allNote);
//     return (
//         <div className='bg-[#EFECE3] w-1/4 m-10'>
//             <div  className='flex flex-col gap-4 p-4'>

//             {allNote?.map((note, idx) => (
//                 <div key={note?.id ?? idx} className='border'>
//                     <h3>{note?.title}</h3>
//                     <p>{note?.description}</p>

//                     <div className='flex gap-4 mt-4'>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                             edit
//                         </button>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                             delete
//                         </button>
//                     </div>
//                     </div>
//             ))}
//             </div>
//         </div>
//     )
// }

// export default Card

// // import React, { useState } from 'react';

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleSubMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="sidebar w-full h-screen bg-gray-800 text-white p-4">
// //       <h2 className="text-xl font-bold ">CMS Admin</h2>
// //       <ul className="mt-4">
// //         <li><a href="#" className="block p-2 hover:bg-gray-700">Dashboard</a></li>
// //         <li><a href="#" className="block p-2 hover:bg-gray-700">Ujian</a></li>
// //         <li className="relative">
// //           <a href="#" className="block p-2 hover:bg-gray-700" onClick={toggleSubMenu}>
// //             Management User
// //           </a>
// //           {isOpen && (
// //             <ul className="px-5 absolute top-full left-0 right-10 bg-gray-700 shadow-md py-2 w-full rounded-md">
// //               <li><a href="#" className="block p-2 hover:bg-gray-600">Admin</a></li>
// //               <li><a href="#" className="block p-2 hover:bg-gray-600">Tentor</a></li>
// //               <li><a href="#" className="block p-2 hover:bg-gray-600">Siswa</a></li>
// //             </ul>
// //           )}
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// import React, { useState } from 'react';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSubMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="sidebar w-full h-screen bg-blue-500 text-white p-4">
//       <h2 className="text-xl font-bold ">CMS Admin</h2>
//       <ul className="mt-4">
//         <li><a href="#" className="block p-2 hover:bg-blue-400">Dashboard</a></li>
//         <li><a href="#" className="block p-2 hover:bg-blue-400">Ujian</a></li>
//         <li className="relative">
//           <a href="#" className="block p-2 hover:bg-blue-400" onClick={toggleSubMenu}>
//             Management User
//           </a>
//           {isOpen && (
//             <ul className="px-5 absolute top-full left-0 right-10 bg-blue-400 shadow-md py-2 w-full rounded-md">
//               <li><a href="#" className="block p-2 hover:bg-blue-300">Admin</a></li>
//               <li><a href="#" className="block p-2 hover:bg-blue-300">Tentor</a></li>
//               <li><a href="#" className="block p-2 hover:bg-blue-300">Siswa</a></li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar w-full h-screen bg-blue-500 text-white p-4">
      <h2 className="text-xl font-bold ">CMS Admin</h2>
      <ul className="mt-4">
        <li><a href="#" className="block p-2 hover:bg-blue-400  rounded-md">Dashboard</a></li>
        <li><a href="#" className="block p-2 hover:bg-blue-400  rounded-md">Ujian</a></li>
        <li className="relative">
          <a href="#" className="flex p-2 justify-between hover:bg-blue-400  rounded-md" onClick={toggleSubMenu}>
            Management User
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.292 6.708a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          {isOpen && (
            <ul className="px-5 absolute top-full left-0 right-10 bg-blue-400 shadow-md py-2 w-full rounded-md">
              <li><a href="#" className="block p-2 hover:bg-blue-300">Admin</a></li>
              <li><a href="#" className="block p-2 hover:bg-blue-300">Tentor</a></li>
              <li><a href="#" className="block p-2 hover:bg-blue-300">Siswa</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;



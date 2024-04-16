// import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import dataJurusan from './dataJurusan';


// const Home = () => {
//   const {jurusan} = dataJurusan()
//   const handlePostData = async (universitas) => {
//     try {
//       const response = await axios.post('http://localhost:3000/jurusan', universitas);
//       console.log("sukses submit");
//     } catch (error) {
//       console.error('Error posting data:', error);
//     }
//   };

//   const handlePostAllData = () => {
//     jurusan.forEach((item) => {
//       // handlePostData(item);
//     });

//   };

//   return (
//     <div>
//       <button onClick={handlePostAllData}>POST All Data</button>
//       <br />
//       <Link to="/cms/ujian/event">TO CMS ADMIN</Link>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import dataJurusan from './data/dataUniversitas';

const Home = () => {
  const { jurusan } = dataJurusan();

  const handlePostData = async (universitas) => {
    try {
      const response = await axios.post('http://localhost:3000/jurusan', universitas);
      console.log("sukses submit");
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handlePostAllData = () => {
    jurusan.forEach((item, index) => {
      setTimeout(() => {
        handlePostData(item);
      }, 100 * index); // Delay 10ms for each item
    });
  };

  return (
    <div>
      {/* <button onClick={handlePostAllData}>POST All Data</button> */}
      <br />
      <Link to="/cms/ujian/event">TO CMS ADMIN</Link>
    </div>
  );
};

export default Home;



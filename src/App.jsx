// import { useState,useEffect } from 'react'
// // import './App.css'
// import axios from 'axios';
// import NewsApp from './Components/NewsApp'

// const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
// const API_Key =`913977b5e0d5d2e1548ccb2006aa83e7`; 
// function App() {
//    const [latitude,setLatitude] = useState("");
//   const [longitude,setLongitude] = useState("");
//   const [responseData,setResponseData] = useState({});
//   useEffect(() =>{
//     navigator.geolocation.getCurrentPosition((position) => {
//       // console.log(position.coords);
//       setLatitude(position.coords.latitude);
//       setLongitude(position.coords.longitude);
//     })
//   //   console.log(
//   // `${API_endpoint}
//   //     lat=${latitude}
//   //     &lon=${longitude}
//   //     &exclude=hourly,daily&appid={API_Key}`);
//       let finalApiEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_Key}`;
//       // console.log(finalApiEndPoint);
//       axios.get(finalApiEndPoint)
//       .then((response) =>{
//         // console.log(response.data);
//         setResponseData(response.data);
//       }),[]});

  
    
//  return (
//     <>
//       <NewsApp locateData={responseData}/>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsApp from './Components/NewsApp';

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_Key = `913977b5e0d5d2e1548ccb2006aa83e7`;

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    // Get user's location
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }, (error) => {
      console.error("Error getting location: ", error);
    });
  }, []); // Only runs once when the component mounts

  // Trigger API call when latitude and longitude are set
  useEffect(() => {
    if (latitude && longitude) {
      let finalApiEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_Key}`;
      
      // Fetch weather data
      axios.get(finalApiEndPoint)
        .then((response) => {
          setResponseData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data: ", error);
        });
    }
  }, [latitude, longitude]); // Runs whenever latitude or longitude changes

  return (
    <>
      <NewsApp locateData={responseData} />
    </>
  );
}

export default App;

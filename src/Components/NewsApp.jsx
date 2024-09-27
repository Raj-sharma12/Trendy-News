// // import React, { useEffect, useState } from 'react';
// // import Card from '../Components/Card'

// // const BASE_URL = `https://restcountries.com/v3.1/name/`
// // const fields = `fields=name,capital,population,flags,languages`;
// // const NewsApp =({locateData}) =>{
// //     const [search,setSearch] =useState('india');
// //     const [newsData,setNewsData] =useState(null);
// //     const [selectedCountry, setSelectedCountry] = useState(null);

// //     useEffect(() =>{
// //         countryData();
// //     })
// //     const countryData = async ()=>{
// //         const data =await fetch(`https://restcountries.com/v3.1/all`);
// //         const response =await data.json();
// //         setSelectedCountry(response);
// //     }
// //     //one time render
// //     useEffect(() =>{
// //         getData();
// //         setSearch('india');
// //     },[]);
// //     const API_KEY = "55798f12b37b4611ab213c8a2b68a07d";
// // const getData =async () =>{
// // const response =await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
// // const jsonData= await response.json();
// // // console.log(jsonData.articles);
// // setNewsData(jsonData.articles);
// // }
// // const handleInput = (e) =>{
// //     // console.log(e.target.value);
// //     setSearch(e.target.value);
// // }
// // const userInput =(e) =>{
// // setSearch(e.target.value);

// // }

// //     return (
// //         <>
// //        <div>
// //         <nav>
// //             <div>
// //             <span>
// //                 <h1 className='logo'>Trendy News</h1>
// //             <img  src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/06_1-512.png" width="50px" height="50px"/> {locateData.name} </span>
// //             </div>

// //             {/* create a dropdown */}
// //             <div>
// //       <label htmlFor="country-select">Select your country:</label>
// //       <select id="country-select">
// //         <option value="">--Choose a country--</option>
        
// //         {
// //         selectedCountry.length>0 ?
// //         selectedCountry.map((coun) =>{
// //             return(
// //                 <div>
// //                     <li>{selectedCountry.name.common}</li>
// //                 </div>
// //             )
// // }):<p>data not found!</p>}
// // </select>
      
// //       /* {selectedCountry && <h3>Selected Country: {selectedCountry}</h3>} */
// //     </div>
// //             <ul>
// //                 <a>All News</a>
// //                 <a>Trending</a>
                
// //             </ul>
// //             <div className='searchbar'>
// //                 <input type="text" placeholder='Search News'  value={search} onChange={handleInput}/>
// //                 <button onClick={getData} >Search</button>
// //             </div>
// //         </nav>
// //         <div>
// //             <p className='head' id="slide-right">Stay Update with Trendy News</p>
// //         </div>
// //         <div className='categoryBtn'>
// //             <button onClick={userInput} value="sports">Sports</button>
// //             <button onClick={userInput} value="politics">Politics</button>
// //             <button onClick={userInput} value="entertainment">Entertainment</button>
// //             <button onClick={userInput} value="health">Health</button>
// //             <button onClick={userInput} value="fitness">Fitness</button>
            
// //         </div>
// //         <div>
// //             <Card data ={newsData}/>
// //         </div>
// //        </div>
// //         </>
// //     )
// // }

// // export default NewsApp;


// import React, { useEffect, useState } from 'react';
// import Card from '../Components/Card';

// const BASE_URL = `https://restcountries.com/v3.1/name/`;
// const fields = `fields=name,capital,population,flags,languages`;
// const API_KEY = "55798f12b37b4611ab213c8a2b68a07d";

// const NewsApp = ({ locateData }) => {
//     const [search, setSearch] = useState('india');
//     const [newsData, setNewsData] = useState(null);
//     const [selectedCountry, setSelectedCountry] = useState([]);

//     // Fetch country data
//     useEffect(() => {
//         countryData();
//     }, []); // Add empty array to run only on mount

//     const countryData = async () => {
//         const data = await fetch(`https://restcountries.com/v3.1/all`);
//         const response = await data.json();
//         setSelectedCountry(response);
//     };

//     // Fetch news data
//     useEffect(() => {
//         getData();
//     }, []); // Run on component mount

//     const getData = async () => {
//         const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
//         const jsonData = await response.json();
//         setNewsData(jsonData.articles);
//     };

//     const handleInput = (e) => {
//         setSearch(e.target.value);
//     };

//     const userInput = (e) => {
//         setSearch(e.target.value);
//     };

//     return (
//         <>
//             <div>
//                 <nav>
//                     <div>
//                         <span>
//                             <h1 className='logo'>Trendy News</h1>
//                             <img
//                                 src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/06_1-512.png"
//                                 width="50px"
//                                 height="50px"
//                                 alt="logo"
//                             /> {locateData.name}
//                         </span>
//                     </div>

//                     {/* Create a dropdown */}
//                     <div>
//                         <label htmlFor="country-select">Select your country:</label>
//                         <select id="country-select">
//                             <option value="">--Choose a country--</option>
//                             {selectedCountry.length > 0 ? (
//                                 selectedCountry.map((coun) => (
//                                     <option key={coun.cca2} value={coun.name.common}>
//                                         {coun.name.common}
//                                     </option>
//                                 ))
//                             ) : (
//                                 <option>Data not found!</option>
//                             )}
//                         </select>
//                     </div>

//                     <ul>
//                         <a>All News</a>
//                         <a>Trending</a>
//                     </ul>

//                     <div className='searchbar'>
//                         <input
//                             type="text"
//                             placeholder='Search News'
//                             value={search}
//                             onChange={handleInput}
//                         />
//                         <button onClick={getData}>Search</button>
//                     </div>




import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const BASE_URL = `https://restcountries.com/v3.1/name/`;
const fields = `fields=name,capital,population,flags,languages`;
const API_KEY = "55798f12b37b4611ab213c8a2b68a07d";

const NewsApp = ({ locateData }) => {
    const [search, setSearch] = useState('india');
    const [newsData, setNewsData] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState([]);

    // Fetch country data
    useEffect(() => {
        countryData();
    }, []); // Add empty array to run only on mount

    const countryData = async () => {
        const data = await fetch(`https://restcountries.com/v3.1/all`);
        const response = await data.json();
        setSelectedCountry(response);
    };
    
   
   
    // Fetch news data
    useEffect(() => {
        getData();
    }, []); // Run on component mount

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        setNewsData(jsonData.articles);
    };

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const userInput = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <div>
                <nav>
                    
                        <span>
                            <h1 className='logo'>Trendy News</h1>
                           
                        </span>
                    

                    {/* Create a dropdown */}
                    <span>
                    <img className='image'
                                src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/06_1-512.png"
                                width="50px"
                                height="50px"
                                alt="logo"
                            /> 
                            <p>{locateData.name}</p>
                            </span>
                    <div className='searchbar'>
                        <input
                            type="text"
                            placeholder='Search News'
                            value={search}
                            onChange={handleInput}
                            

                        />
                        <button onClick={getData}>Search</button>
                    </div>
                </nav>

                <div >
                    <p className='head' id="slide-right">Stay Updated with Trendy News</p>
                </div>
                <div className='country-list'>
                <label htmlFor="country-select">Select your country:</label>
                
                <select id="country-select">
                    <option value="">--Choose a country--</option>
                    

                    {selectedCountry.length > 0 ? (
                        
                        selectedCountry.map((coun) => (
                            <option key={coun.cca2} value={coun.name.common}>
                                {coun.name.common}
                            </option>
                        ))
                    ) : (
                        <option>Data not found!</option>
                    )}
                </select>
                </div>


                <div className='categoryBtn'>
                    <button onClick={userInput} value="sports">Sports</button>
                    <button onClick={userInput} value="politics">Politics</button>
                    <button onClick={userInput} value="entertainment">Entertainment</button>
                    <button onClick={userInput} value="health">Health</button>
                    <button onClick={userInput} value="fitness">Fitness</button>
                </div>

                <div>
                    <Card data={newsData} />
                </div>
            </div>
        </>
    );
};

export default NewsApp;

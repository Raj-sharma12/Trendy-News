import React from 'react'
import Shimmer from './Shimmer';
const Card = ({data}) => {
    // console.log(data);
const readMore =(url) =>{
    window.open(url);
} 
if(data == null){
    return (
        <div className='divParent'>
    <Shimmer/>
    </div>)
    }

    return (
        <div className='cardContainer'>
            {
                   data && Array.isArray(data) && data.length > 0 ?(
                data.map((currItem) =>{
                    if(!currItem.urlToImage){
                        return null;
                    }
                    else{
                    return (
                        
                        <div className='card'>
                            <img src={currItem.urlToImage}/>
                            <div className='content'>
                                <a className='title' onClick={() =>window.open(currItem.url)}>{currItem.title}</a>
                                <p>{currItem.description}</p>
                                <button onClick={() => window.open(currItem.url)}>Read More</button>
                            </div>
                            </div>
                    )}
                }))
                :(<p>data not found!</p>)
            }
        </div>
    )
}

export default Card

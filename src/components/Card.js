import React from 'react';


const Card = ({name, image, url, number, frame}) => {
  if (frame==='list'){
    return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <a href={url} style={{color: "red", "text-decoration": "none"}}>
        <img alt='films' src={image}/>
        <div>
          <h2>{name}</h2>
        </div>
        </a>
        <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black"  onClick={()=>{
      fetch('http://localhost:3001/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify ({
          fav: true,
          number: number
        })
      });
      window.location.reload()}}>Add to Favorites</button>
      </div>
      ); 
  } else{
    return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <a href={url} style={{color: "red", "text-decoration": "none"}}>
        <img alt='films' src={image}/>
        <div>
          <h2>{name}</h2>
        </div>
        </a>
      </div>
      ); 
  }
  

   
}
export default Card;
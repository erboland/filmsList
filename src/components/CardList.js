import React from 'react';
import Card from './Card';

const CardList = ({films}) => { 
  return (
    <div>
      {
        films.map((user, i) => {
    return <Card 
      key={i}
      name={films[i].name} 
      image={films[i].artworkUrl100} 
      url={films[i].url}
      fav={films[i].fav}
      number={films[i].number}
      frame='list'
    />
  })
      }
    </div>
    )
}
export default CardList;
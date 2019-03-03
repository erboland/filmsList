import React from 'react';
import Card from './Card';



const FavoriteFilms = ({films}) => { 

    if (films.length===0) {
        return (
            <div>No films(</div>
        )
    } else {
        return (
            <div>
              {
                films.map((user, i) => {
                    if (films[i].fav) {
                        return <Card 
                                key={i} 
                                name={films[i].name} 
                                image={films[i].artworkUrl100} 
                                url={films[i].url}
                                frame='fav'
                                />
                    }
                })
              }
        
            </div>
        )
    }
  
}
export default FavoriteFilms;
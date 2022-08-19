import React from "react";
import { useParams } from "react-router-dom";


function MovieShow({movies}) {
    const params = useParams(); 
    
    const id = parseInt(params.movieId); 

    console.log(movies[id])

  return (
    <div>
      <h3>{movies[id].title}</h3>
    </div>
  );
}

export default MovieShow;
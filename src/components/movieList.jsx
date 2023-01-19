import React from "react";
import { useState } from "react";

const MovieList = (props) => {
  const [visibility, setVisibility] = useState("hidden");
    const [ flag, setFlag] = useState(true);
    function showImg(){
        return setFlag(!flag);
    }
    
    return (
        <div className="movie-app">
            {props.movies.map((movie) => (
                    <div className='image-container'>
                        <img onClick={showImg} src={movie.Poster} alt={movie.Title}></img>
                    
 <div className={flag? visibility : "visible"}>
                <div className="MovieTitle">Title :- {movie.Title}</div>
        <div className="year">Released in: {movie.Year}</div>
                            <button className ="LikeButton" onClick={() => props.handleFavoriteClick(movie)}>{props.name}</button>
                            </div>
                </div>
            ) )}
    </div>
)
}
export default MovieList;

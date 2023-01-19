import React from "react";
const MovieListHeading = (props) => { 
    return (
          <div>
            <h1 className={props.class}>{props.heading}</h1>
        </div>
    )
}
export default MovieListHeading;
import './App.css';
import { useEffect, useState } from 'react';
import MovieList from "./components/movieList";
import MovieListHeading from './components/movieListHeading';
import SearchBox from './components/searchBox';
function App() {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("Harry");
  const [favorite,setFavorite] = useState([]);

  const getMovieRequest = async (searchVal) => {
    const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=ad69844b`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) {
  setMovies(data.Search);
}
  };
  
  useEffect(() => {
    getMovieRequest(searchVal);
  }, [searchVal]);

// to add movie in favorite list
  
  const AddFavoriteMovie = (movie) => { 
    if (!favorite.includes(movie)) {
      const newFavoriteList = [...favorite, movie];
    setFavorite(newFavoriteList);
    } 
  }

// TO remove movie from favorite list

  const removeFavorite = (movie) => {
    const newFavoriteList = favorite.filter((favorite) => favorite.imdbID !== movie.imdbID);
    setFavorite(newFavoriteList);
  };
  return (
    <div>
      <MovieListHeading class="MovieHead" heading={"Movies"} />
      <SearchBox searchVal={searchVal } setSearchVal={setSearchVal } />
      <MovieList name ="Like💗" handleFavoriteClick={ AddFavoriteMovie } movies={movies} />

       <MovieListHeading class ="Favorite" heading={" Favorite Movies"} />
      <MovieList  name = "Remove👎" handleFavoriteClick={ removeFavorite } movies={favorite} />
    </div>
  );
}
export default App;

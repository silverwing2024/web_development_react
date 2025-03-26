import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import '../App.css'

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async - await 
  const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  } //-> 이걸 useEffect에 넣어서 렌더링 될 때 한번만 getMovies 라는 함수를 실행시키겠다. 

  useEffect(() => {
    getMovies();
  }, []);

  return(
    <div>
      
      {loading ? (<h1>Loading....</h1>) : (
        <div>
        {movies.map( movie => 
        
        <Movie
          key={movie.id}
          id = {movie.id}
          cover_image={movie.medium_cover_image} 
          title={movie.title}
          summary={movie.summary}
          genres = {movie.genres} /> 
      )}</div>
      
      )}
    </div>
  );
}

export default Home;
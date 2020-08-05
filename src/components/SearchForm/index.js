import React, { useState } from "react";
import Moment from "react-moment";
import "./style.css";

export default function Search() {
  //useState manage state in a functional component
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]); //initial state is and empty array []

  //stae for movies and update the state appropriately
  const SearchMovies = async event => {
    event.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=6d782442cfa371175a8b9802b7945c3a&language=en-US&query=${query}&page=1&include_adult=false`;

    //Returns a promise to handle it we use async await to wait for code to finish and then return the data
    try {
      // Try this lblock of code, if it doesn't work, throw an error
      const res = await fetch(url);
      const data = await res.json(); //Returns a promise as well, returns the data we fetched.
      console.log("movies", data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={SearchMovies}>
        <label className="label" htmlFor="query">
          Search Movie:&nbsp;
        </label>
        <input
          type="text"
          className="movie-input"
          name="query"
          placeholder="i.e Cape Fear"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search <i className="fas fa-film"></i>
        </button>
      </form>
      <div className="card-list">
        {movies.map(movie => (
          <div className="card" key={movie.id}>
            <h1 className="movie-title">
              <i className="fas fa-video"></i>
              &nbsp;{movie.title}
            </h1>

            <h2 className="release">
              <Moment format="MMM DD, YYYY">{movie.release_date}</Moment>
            </h2>
            <h2 className="ratings">
              <i className="fas fa-star"></i>&nbsp; Rating {movie.vote_average}
              /10 from {movie.vote_count} Ratings
            </h2>
            <h4 className="language">{movie.original_language}</h4>
            <p>{movie.overview}</p>
            <img
              alt={movie.title + "poster"}
              className="card-image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            />
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

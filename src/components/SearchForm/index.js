import React from "react";
import "./style.css";

export default function Search() {
  const SearchMovies = async event => {
    event.preventDefault();
    console.log("submitting search query");
  };

  return (
    <form className="form" onSubmit={SearchMovies}>
      <label className="label" htmlFor="query">
        Movie Title
      </label>
      <input
        type="text"
        className="input"
        name="query"
        placeholder="i.e Fear Lake"
      ></input>
      <button className="button" type="submit">
        Search <i className="fas fa-film"></i>
      </button>
    </form>
  );
}

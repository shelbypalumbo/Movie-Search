import React from "react";
import "./style.css";
import Search from "../../components/SearchForm";

function Home() {
  console.log("home");

  return (
    <div className="container">
      <h1 className="title"> React Movie Search</h1>
      <Search />
    </div>
  );
}
export default Home;

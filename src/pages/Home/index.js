import React from "react";
import "./style.css";
import Search from "../../components/SearchForm";

const Home = () => {
  console.log("home");

  return (
    <>
      <h1 className="title red"> React Movie Search</h1>

      <div className="container">
        <Search />
      </div>
    </>
  );
};
export default Home;

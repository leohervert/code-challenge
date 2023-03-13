import React from "react";
import { Filter } from "../components/Filter";
import { ListOfFilms } from "../components/ListOfFilms";
const Home = () => {
  return (
    <div className="Home-Container">
      <h3 className="Tv-title">My TV Shows</h3>
      <Filter />
      <ListOfFilms />
    </div>
  );
};

export default Home;

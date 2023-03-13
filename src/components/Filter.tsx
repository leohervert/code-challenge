import React, { useEffect, useState } from "react";import { useAppDispatch, useAppSelector } from "../store";
import { show_favorites, update_query } from "../store/slices/films";

export const Filter = () => {
  const [search, setSearch] = useState<string>("");
  const [showFavorites, setShowFavorites] = useState(false);
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.user);
  
  useEffect(() => {
    let temp: number[] = [];
    if (showFavorites) {
      temp = [...favorites];
    }
    dispatch(show_favorites({ films: temp, showFav: showFavorites }));
  }, [showFavorites, favorites, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(update_query(search));
    }, 500);
    return () => clearTimeout(timer);
  }, [search, favorites, dispatch]);

  return (
    <div className="FilterContainer">
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button className="Button DefaultButton FilterButton" onClick={() => setShowFavorites((prevState) => !prevState)}>
        {showFavorites ? "View All" : "View Favorites"}
      </button>
    </div>
  );
};

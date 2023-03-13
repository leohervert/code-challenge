import React from "react";
import { useAppSelector } from "../store";
import { Film } from "./Film";
const ListOfFilmsComponent = () => {
  const { currentFilms } = useAppSelector((state) => state.films);

  return (
    <div className="Films-Container">
      {currentFilms.map((film: FilmModel) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
};

export const ListOfFilms = React.memo(ListOfFilmsComponent);

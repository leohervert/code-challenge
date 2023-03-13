import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import films from "../../state/films.json";

interface FilmsState {
  data: FilmModel[];
  currentFilms: FilmModel[];
}

const INITIAL_STATE = {
  data: films,
  currentFilms: films
} as FilmsState;

export const filmsSlice = createSlice({
  name: "films",
  initialState: INITIAL_STATE,
  reducers: {
    update_query: (state, action: PayloadAction<string>) => {
      const data = [...state.data];
      state.currentFilms = data.filter((x) =>
        x.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    show_favorites: (state, action: PayloadAction<{films: number[], showFav:boolean}>) => {
      const data = [...state.data];
      const { payload } = action;
      if(payload.showFav === false ){
        state.currentFilms = [...data];
        return;
      }
      state.currentFilms = data.filter((x) => payload.films.includes(x.id));
    }
  }
});

export const { update_query, show_favorites } = filmsSlice.actions;

export default filmsSlice.reducer;

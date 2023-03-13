import { createSlice, PayloadAction } from "@reduxjs/toolkit";interface UserInitialState {
  favorites: Array<number>;
}
const INITIAL_STATE: UserInitialState = {
  favorites: []
};

//reducer
const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    add_film: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      const favs = [...state.favorites];
      favs.push(payload);
      state.favorites = [...favs];
    },
    remove_film: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      const favs = [...state.favorites].filter((x) => x !== payload);
      state.favorites = [...favs];
    }
  }
});

export const { add_film, remove_film } = userSlice.actions;

export default userSlice.reducer;

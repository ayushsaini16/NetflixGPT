import { createSlice } from "@reduxjs/toolkit";

const geminiSearchSlice = createSlice({
  name: "gemini",
  initialState: {
    showGeminiSearch: false,
    searchResult: [],
    searchMovieData: [],
  },
  reducers: {
    toggleGeminiSearchView: (state, action) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
    addSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    removeSearchResult: (state) => {
      state.searchResult = null;
    },
    addSearchMovieData: (state, action) => {
      state.searchMovieData = action.payload;
    },
    removeMovieData: (state) => {
      state.searchMovieData = null;
    },
  },
});

export const {
  toggleGeminiSearchView,
  addSearchResult,
  addSearchMovieData,
  removeSearchResult,
  removeMovieData,
} = geminiSearchSlice.actions;
export default geminiSearchSlice.reducer;

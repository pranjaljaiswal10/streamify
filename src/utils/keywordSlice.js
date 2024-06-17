import { createSlice } from "@reduxjs/toolkit";

const keywordSlice = createSlice({
  name: "keyword",
  initialState: {
    keywordButton: "",
  },
  reducers: {
    addKeyword: (state, action) => {
      state.keywordButton = action.payload;
    },
  },
});

export default keywordSlice.reducer;
export const { addKeyword } = keywordSlice.actions;

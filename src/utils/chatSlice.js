import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.unshift(action.payload);
      state.message.splice(LIVE_CHAT_COUNT, 1);
    },
  },
});

export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;

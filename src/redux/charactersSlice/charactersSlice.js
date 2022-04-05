import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters", async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
        console.log(action.payload)
    }
  },
});

export default charactersSlice.reducer;


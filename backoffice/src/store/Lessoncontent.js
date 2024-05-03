import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//all typecontent
export const fetchlessoncontent = createAsyncThunk("fetchlessoncontent", async () => {
  try {
    const response = await axios.get("http://localhost:5000/lesson-content");
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
});

//create typecontent
export const sendlessoncontent = createAsyncThunk("sendlessoncontent", async (body) => {
  const response = await axios.post("http://localhost:5000/type-content", body);
  console.log(response.data, " this is type content");
  return response.data;
});

export const lessoncontentSlice = createSlice({
    name: "lessoncontent",
    initialState: {
        lessoncontent: null,
        lessoncontents: {
            items: [],
            count: 0,
        },
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchlessoncontent.fulfilled, (state, action) => {
            state.lessoncontents.items = action.payload;
        });
         builder.addCase(sendlessoncontent.fulfilled, (state, action) => {
           state.lessoncontent = action.payload;
         });
    }
})
export default lessoncontentSlice.reducer;
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//all typecontent
export const fetchTypeContent = createAsyncThunk("fetchTypeContent", async () => {
  try {
    const response = await axios.get("http://localhost:5000/type-content");
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
});

//create typecontent
export const sendtypecontent = createAsyncThunk("sendtypecontent", async (body) => {
  const response = await axios.post("http://localhost:5000/type-content", body);
  console.log(response.data, " this is type content");
  return response.data;
});

export const typecontentSlice = createSlice({
    name: "typecontent",
    initialState: {
        typecontent: null,
        typecontents: {
            items: [],
            count: 0,
        },
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTypeContent.fulfilled, (state, action) => {
            state.typecontents.items = action.payload;
        });
         builder.addCase(sendtypecontent.fulfilled, (state, action) => {
           state.typecontent = action.payload;
         });
    }
})
export default typecontentSlice.reducer;
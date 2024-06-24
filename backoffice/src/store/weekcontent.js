import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchweekcontents = createAsyncThunk("fetchweekcontents", async () => {
    try {
      const response = await axios.get("http://localhost:5000/week-content");
      return response.data;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
});
  export const fetchweekcontent = createAsyncThunk(
           "fetchweekcontent",
           async (id) => {
             try {
               const response = await axios.get(
                 "http://localhost:5000/week-content/" + id
               );
               return response.data;
             } catch (error) {
               console.error("Error fetching week content:", error);
               throw error;
             }
           }
         );
  
  
  export const deleteweekcontent = createAsyncThunk(
    "deleteweekcontent",
    async (id, { dispatch }) => {
      try {
        const response = await axios.delete(
          "http://localhost:5000/week-content/" + id
        );
  
        dispatch(fetchweekcontents());
        return response.data;
      } catch (error) {
        console.error("Error deleting week content:", error);
        throw error;
      }
    }
);
  
export const updateWeekCntent = createAsyncThunk(
         "updateWeekCntent ",
         async (args, { dispatch }) => {
           const { id, body } = args;
           try {
             const response = await axios.patch(
               "http://localhost:5000/week-content/" + id,
               body
             );

             dispatch(fetchweekcontent(id));
             return response.data;
           } catch (error) {
             console.error("Error updating:", error);
             throw error;
           }
         }
       );
  

  
  export const weekcontentSlice = createSlice({
      name: "weekcontent",
      initialState: {
          weekcontent: null,
          weekcontents: {
              items: [],
              count: 0,
          },
      },
      reducers: {},
      extraReducers(builder) {
          builder.addCase(fetchweekcontents.fulfilled, (state, action) => {
              state.weekcontents.items = action.payload;
          });
          
           builder.addCase(deleteweekcontent.fulfilled, (state, action) => {
             state.weekcontent = action.payload;
           });
        builder.addCase(fetchweekcontent.fulfilled, (state, action) => {
          state.weekcontent = action.payload;
        });
      }
  })
  export default weekcontentSlice.reducer;
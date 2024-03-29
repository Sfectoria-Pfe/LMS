import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchlessons = createAsyncThunk("fetchlessons", async () => {
  try {
    const response = await axios.get("http://localhost:5000/lessons");
    return response.data;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error;
  }
});
// export const fetchprogram = createAsyncThunk("fetchprogram", async (id) => {
//   try {
//     const response = await axios.get("http://localhost:5000/ lessons/" + id);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching program:", error);
//     throw error;
//   }
// });
// //addprogram
// // Action types
// export const PROGRAM_ADDED = "PROGRAM_ADDED";
// export const PROGRAM_ADD_FAILED = "PROGRAM_ADD_FAILED";

// // Action creators
// export const programAdded = (program) => ({
//   type: PROGRAM_ADDED,
//   payload: program,
// });

// export const programAddFailed = (error) => ({
//   type: PROGRAM_ADD_FAILED,
//   payload: error,
// });

// export const addProgram = (programData) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:5000/ lessons",
//       programData
//     );
//     dispatch(programAdded(response.data));
//   } catch (error) {
//     dispatch(programAddFailed(error.message));
//   }
// };

export const  lessonSlice = createSlice({
  name: "lessons",
  initialState: {
    lesson: null,
     lessons: {
      items: [],
      count: 0,
    },
  },

  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchlessons.fulfilled, (state, action) => {
      state. lessons.items = action.payload;
    });
    // builder.addCase(fetchprogram.fulfilled, (state, action) => {
    //   state.program = action.payload;
    // });
    //  builder.addCase(addProgram.fulfilled, (state, action) => {
    //    state.program = action.payload;
    //  });
  },
});
// console.log(counterSlice.actions);

// export const { courses } = counterSlice.actions;
export default  lessonSlice.reducer;

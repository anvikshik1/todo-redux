import { createSlice } from "@reduxjs/toolkit";

const taskDetails = createSlice({
    name:"taskDetails",
    initialState:{
        error:null,
        loading:false,
        task: [],
    },

    reducers: {
        addTask: (state, action) => {
          state.task = [...state.task, action.payload];
        },
        updateTask : (state, action) => {
          state.task = action.payload;
        },
        deleteTask : (state, action) => {
          state.task = action.payload;
        }
    },
})

export default taskDetails.reducer;
export const { addTask, updateTask, deleteTask } = taskDetails.actions;
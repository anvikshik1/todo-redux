import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
    name:"userDetail",
    initialState:{
        error:null,
        loading:false,
        userData: [],
        login: [],
    },
    

    reducers: {
        registerData: (state, action) => {
          state.userData = action.payload;
        },
        loginData: (state, action) => {
          state.login = action.payload;
        },
        clearData: (state, action) => {
          return state.login;
        },
    },
})

export default userDetails.reducer;
export const { registerData, loginData ,clearData} = userDetails.actions;
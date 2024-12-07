import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{},
    reducers:{
        add: ()=>{},
        del:()=>{},
    },

});

export const {add,del} = userSlice.actions;
export default userSlice.reducer;
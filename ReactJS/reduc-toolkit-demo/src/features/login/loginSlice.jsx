import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async(amount) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

const counterSlice = createSlice({
    name : "Login",
    initialState :{
        userName : "",
        email: "",
        password: "",
    },
    reducers:{
        loggedIn : (state) => {
            if(userName == "abc"){
                return "login Success";
            } 
        },
        

    }
})


//export actions
export const {increment , decrement , reset , reset100} = counterSlice.actions;

export default counterSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async(amount) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

const counterSlice = createSlice({
    name : "Counter",
    initialState :{
        value : 0
    },
    reducers:{
        increment : (state) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        },
        reset : (state) => {
            state.value = 0;
        },
        reset100 : (state) => {
            state.value = 100;
        }

    }
})


//export actions
export const {increment , decrement , reset , reset100} = counterSlice.actions;

export default counterSlice.reducer;
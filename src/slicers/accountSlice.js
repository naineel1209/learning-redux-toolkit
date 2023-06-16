import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    amount: 100
}

const accountSlicer = createSlice({
    name: 'account',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1; //immer library rocks
        },
        decrement: (state) => {
            state.amount -= 1; //immer library rocks
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload; //immer library rocks
        }
    }
});

//actions creator
export const {increment, decrement, incrementByAmount} = accountSlicer.actions;

//reducer
export default accountSlicer.reducer;

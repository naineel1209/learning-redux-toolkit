import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    points: 0
}

const bonusSlicer = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {
            state.points += 1; //immer library rocks
        },
        decrement: (state) => {
            state.points -= 1; //immer library rocks
        }
    }
});

//actions creator
export const {increment, decrement} = bonusSlicer.actions;

//reducer
export default bonusSlicer.reducer;

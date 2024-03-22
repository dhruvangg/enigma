import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isTableView: true,
    interviews: []
}

export const interviewSlice = createSlice({
    name: 'interviews',
    initialState,
    reducers: {
        addInterview: (state, action) => {
            state.interviews.push(action.payload)
        },
        removeInterview: (state, { payload }) => {
            state.interviews.splice(payload, 1)
        },
        toggleView: (state) => {
            state.isTableView = !state.isTableView
        }
    }
})

export const { addInterview, removeInterview, toggleView } = interviewSlice.actions;
export default interviewSlice.reducer;
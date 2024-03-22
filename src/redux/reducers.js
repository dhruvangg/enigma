import { combineReducers } from "@reduxjs/toolkit";
import interviewReducer from './feature/interviewSlice'

const rootReducer = combineReducers({
    interviews: interviewReducer
});

export default rootReducer;
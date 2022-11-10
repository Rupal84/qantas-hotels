import { resultsReducer } from "./results.slice";
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    results: resultsReducer
})

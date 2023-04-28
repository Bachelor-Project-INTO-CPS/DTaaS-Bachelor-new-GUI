import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu";

const rootReducer = combineReducers({
    menu: menuSlice
})

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
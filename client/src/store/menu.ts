/* eslint-disable no-param-reassign  */
import { createSlice } from "@reduxjs/toolkit";

interface MenuState{
    open: boolean;
}

const initState: MenuState = {
    open: false,
};


const menuSlice = createSlice({
    name: 'menu',
    initialState: initState,
    reducers: {
        openMenu: (state: MenuState) => {
            state.open = true

        },
        closeMenu: (state: MenuState) => {
            state.open = false
        }
    }
})



export const {openMenu, closeMenu} = menuSlice.actions;
export default menuSlice.reducer;



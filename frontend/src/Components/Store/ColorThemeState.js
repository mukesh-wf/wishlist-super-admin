import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorTheme: localStorage.getItem("theme") === null ? "default-theme" : localStorage.getItem("theme"),
    layoutTheme: localStorage.getItem("layoutTheme") === null ? "left-align-layout" : localStorage.getItem("layoutTheme"),
    navbarTheme: localStorage.getItem("navbarTheme") === null ? "sidebarTheme" : localStorage.getItem("navbarTheme"),

};

const colorThemeSlice = createSlice({

    name: 'colorTheme',
    initialState: initialState,
    reducers: {

        mySelectedTheme(state, action) {
            state.colorTheme = action.payload;
        },

        mySelectedLayoutTheme(state, action) {
            state.layoutTheme = action.payload
        },
        mySelectedNavbarTheme(state, action) {
            state.navbarTheme = action.payload
        }
    }

});


export const colorThemeActions = colorThemeSlice.actions;
export default colorThemeSlice.reducer;


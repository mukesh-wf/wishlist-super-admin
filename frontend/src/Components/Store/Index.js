import { configureStore } from "@reduxjs/toolkit";
import colorThemeReducer from "./ColorThemeState";
import utilsReducer from "./Utils";

const store = configureStore({
    reducer: {
        colorTheme: colorThemeReducer,
        utils: utilsReducer
    },
});

export default store;

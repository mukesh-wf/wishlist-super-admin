import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
    drawer: false,
    refresh: 3,
    status: "",
    role: "",
    plan: "",
    setting: false,
    Navigate: "",
    listViews: "grid",
    listView: localStorage.getItem("listView") === "" || localStorage.getItem("listView") === null ? "grid" : localStorage.getItem("listView"),
    list: [],
    Filter: "topRated",
    displayTask: [],
    layoutStatus: "",
    index: 0,
    isCheck: localStorage.getItem("check") !== null ? JSON.parse(localStorage.getItem("check")) : false,
    display: false

};

const Utils = createSlice({
    name: "colorTheme",
    initialState: initialState,
    reducers: {
        loginPage(state, action) {
            state.username= action.payload.username;
            state.password = action.payload.password
        },

        drawerClick(state, action) {
            state.drawer = action.payload.show
        },

        settingLayout(state, action) {
            state.setting = action.payload
        },

        refresh(state, action) {
            state.refresh = action.payload.postsPerPage;
            state.id = action.payload.id;
            state.Navigate = action.payload.Navigate;
        },

        searchFilter(state, action) {
            state.status = action.payload.status;
            state.role = action.payload.role
            state.plan = action.payload.plan
        },

        listView(state, action) {
            state.listView = action.payload
        },

        listViews(state, action) {
            state.listViews = action.payload
        },

        deleteHanlder(state, action) {
            state.list = action.payload.userDeleted.splice(action.payload.id, 1);
        },

        displayTaskhandler(state, action) {
            state.displayTask = action.payload
        },

        handleClick(state, action) {
            state.Filter = action.payload
        },

        displayLayoutStatus(state, action) {
            state.layoutStatus = action.payload
        },

        handleCheck(state, action) {
            state.isCheck = action.payload
        },

        handleIndex(state, action) {
            state.index = action.payload
        },

        handlePage(state, action) {
            state.display = action.payload
        }
    },
});

export const utils = Utils.actions;
export default Utils.reducer;

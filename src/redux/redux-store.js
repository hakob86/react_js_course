import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reduser";
import dialogsReducer from "./dialogs-reduser ";
import profileReducer from "./profile-reduser";
import sidebarReducer from "./sidebar-reduser ";
import usersReducer from "./users-reduser";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(redusers);

Window.store = store;

export default store;

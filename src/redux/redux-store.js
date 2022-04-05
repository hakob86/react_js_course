import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reduser";
import dialogsReducer from "./dialogs-reduser ";
import profileReducer from "./profile-reduser";
import sidebarReducer from "./sidebar-reduser ";
import usersReducer from "./users-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

Window.store = store;

export default store;

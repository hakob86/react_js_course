import { applyMiddleware, combineReducers, compose, createStore } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

Window.__store__ = store;

export default store;

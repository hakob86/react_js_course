import dialogsReducer from "./dialogs-reduser ";
import profileReducer from "./profile-reduser";
import sidebarReducer from "./sidebar-reduser ";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "it's my first post", likesCount: 11 },
                { id: 3, message: "Barev", likesCount: 11 },
                { id: 4, message: "Hajox", likesCount: 11 },
            ],
            newPostText: "it kamasutra.com",
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Hakob" },
                { id: 2, name: "Harut" },
                { id: 3, name: "Mihran" },
                { id: 4, name: "Hovo" },
                { id: 5, name: "Vaxo" },
                { id: 6, name: "Aram" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" },
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

window.state = store;
export default store;

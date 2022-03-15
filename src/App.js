import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={DialogsContainer} />
                    <Route path="/profile/:userId?" component={ProfileContainer} />
                    <Route path="/users" component={UsersContainer} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

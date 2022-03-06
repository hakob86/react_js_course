import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/MyPosts/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classNames from "classnames";

const App = () => {
    const cn = classNames({ a: true });
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/users" element={<UsersContainer />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

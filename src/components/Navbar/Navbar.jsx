import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink
                    to="/profile"
                    className={(navData) => (navData.isActive ? s.activeLink : "")}
                >
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to="/dialogs"
                    className={(navData) => (navData.isActive ? s.activeLink : "")}
                >
                    Massages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to="/users"
                    className={(navData) => (navData.isActive ? s.activeLink : "")}
                >
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Musik</a>
            </div>
            <div className={s.item}>
                <a>Setings</a>
            </div>
        </nav>
    );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="data:image/png;base64,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" />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import style from './style.module.scss';

const Header = () => (
    <div className={style.header}>
        <h1>JAC Enterprise Mystery Educator</h1>
        <ul className={style.navList}>
            <NavLink to="/">Home</NavLink>
            <NavLink to='/book'>Art Books</NavLink>
            <NavLink to='/art'>Museum Art</NavLink>
            <NavLink to='/video'>Art Videos</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/about'>About</NavLink>
        </ul>
    </div>
);

export default Header;
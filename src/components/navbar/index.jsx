import React from 'react';
import { NavLink } from "react-router-dom"
import './navbar.sass';
import { multiLine } from '../utils.jsx';

const NavbarItem = ({ url, icon, text }) => {
    return (
        <li>
            <NavLink exact key={`menu-${url}`}
                className="navlink"
                activeClassName="selected"
                to={url}>
                <div className="navicon" style={{ backgroundImage: `url(${icon})` }}></div>
                <div className="navtext">{multiLine(text)}</div>
            </NavLink>
        </li>
    );
}

export default ({ items }) => {
    return (
        <ul className="navbar">
            {items.map((p) => (<NavbarItem {...p} key={`menu-${p.url}`} />))}
        </ul>);
}
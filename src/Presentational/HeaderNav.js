import React from 'react';
import logo from '../assets/AOE_TD_LOGO.png';
import {Link} from 'react-router-dom'
const HeaderNav = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="input-group-prepend">
        <Link to="/">
        <button className="btn btn-outline-0 box-shadow-0 form-inline" type="button">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
        </button>
        <button className="btn btn-outline-0 box-shadow-0 navbar-brand" type="button">AoE TD
        </button>
        </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <div class="input-group-prepend">
                <Link to="/info">
                <button class="btn btn-outline-0" type="button">Play</button>
                </Link>
                </div>
            </li>
            <li className="nav-item active">
                <Link to="/help">
                <button class="btn btn-outline-0" type="button">Help</button>
                </Link>
            </li>
            </ul>
            <ul className="navbar-nav mr-2">
            <li className="nav-item active">
                <Link to="/">
                <button class="btn btn-outline-0" type="button">Highscore</button>
                </Link>
            </li>
            </ul>
        </div>
        </div>
        </nav>
    )
}

export default HeaderNav;
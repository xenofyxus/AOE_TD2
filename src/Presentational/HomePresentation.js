import React, { Component } from 'react';
import logo from '../assets/AOE_TD_LOGO.png';
import {Link} from 'react-router-dom'

const HomePresentation=(props)=> {
  return(
    <div className="row text-center">
    <div className="col my-auto">
    <Link to='/info'>
      <button type="button" href="/info" className="btn btn-info">I want to read more!</button>
    </Link>
    </div>
    <div className="col my-5">
      <div className="media-body text-center my-5">
        <h5 className="mt-0">Welcome!</h5>
        <p>
        This game is a classic tower defence game. Place your units on strategic positions to force the incoming waves of enemies to fight them.
        Make sure to keep an eye on your economy so you do not run out of resources.
        </p>
        <img src={logo} width="100" height="100" className="my-auto" alt=""/>
      </div>
    </div>
    <div className="col my-auto">
    <Link to='/game'>
      <button type="button" className="btn btn-success">I want to play!</button>
    </Link>
    </div>
    <div className="col">

    </div>
  </div>
)
};

export default HomePresentation;
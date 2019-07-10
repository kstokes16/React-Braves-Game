import React from "react";
import "./style.css";


function Header(props) {
  return (
    <nav className="navbar">
      <li className="navbar-brand"><img src="https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/05/atlanta_braves_logo_2018-768x312.png" id="braves-logo" alt="Atlanta Braves logo"></img>
      <h5><strong>Lineup Guessing Game</strong></h5></li>
      <li className="navbar-brand"><h5><strong>Your current score: {props.score}</strong></h5> </li>
      <li className="navbar-brand"><h5><strong>Your top score: {props.topScore}</strong></h5></li>
    </nav>
  );
}

export default Header;

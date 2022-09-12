import React from "react";
import logo from "../../logo.svg";

function Header() {
  return (
    <>
      <header className="header d-flex justify-content-between align-items-center">
        <div className="header__left">
          <div className="header__logo d-flex align-items-center">
            <img src={logo} alt="img" />
            <h1>React</h1>
          </div>
        </div>
        <div className="header__right">
          <div className="header__user-info d-flex flex-column justify-content-center align-items-end">
            <span className="text-capitalize">john wick</span>
            <span className="text-capitalize">Developer</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

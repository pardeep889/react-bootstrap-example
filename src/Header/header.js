import React from "react";

const Header = () => {
  return (
    <header className="header nav-down">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/all-login">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/all-login">
                  Procing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/all-login">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

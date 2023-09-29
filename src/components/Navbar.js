import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode==='Light'?'dark':'light'}`} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='Light'?'dark':'light'}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='Light'?'dark':'light'}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='Light'?'dark':'light'}`}>
            <input
            onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode} mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

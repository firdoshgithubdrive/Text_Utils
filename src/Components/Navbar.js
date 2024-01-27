import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
export default function Navbar(props) {

  let styles={
    color:props.theme==='dark'?'white':'black'
    
  }

  return (
    <>
      <nav className={`p-3 mb-2 navbar navbar-expand-lg navbar-${props.theme} `} style={{backgroundColor:props.theme==='dark'?'#2c2b2b':'#eeeeee'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Text Util
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container-fluid collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  {props.name}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch" style={styles}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleTheme} />
              <label htmlFor="flexSwitchCheckDefault">Theme</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propsType={
    name : PropTypes.string
}
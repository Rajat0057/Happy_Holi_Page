import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./holipage.css"

const Holipage = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            <div className="log">Happy Holi By Rajat</div>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="btn btn-light" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  More
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="myinfo">
        <h1 className="holi">Hey there!</h1>
        <h1>i am Rajat</h1>
        <p>Wishing you and your loved ones a very colourful Holi<br />May you forget all your worries and enjoy this day to the fullest.<br /> <h2 className="hue">Happy Holi!</h2></p>

        <a href="#" className="btn btn-danger mr-3 hue">contact</a>
        <a href="#" className="btn btn-light">Login</a>
      </div>

      <video autoPlay loop playsInline muted>
      <source src={require('./Happy Holi 2024 By CWS.mp4')} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
    );
}

export default Holipage;

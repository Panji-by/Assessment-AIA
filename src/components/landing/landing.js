import React, {useState, useEffect} from "react";
import { Container, Button, Row } from "reactstrap";
import "./style/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Image from "../../Image/Cat.png";
import Search from "../search/index";
import AOS from "aos"



const Landing = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* <Container> */}
      <div>
        <div className="search-nav">
          <Search />
        </div>
        <div className="row landing-parent">
          <div className="col-lg-6">
            <div data-aos="fade-left" className="text-bcgrnd">
              <h1>Welcome to Pictagram</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <button className="botton-dwn btn- btn-dark btn-lg">
                <FontAwesomeIcon icon={faApple} /> Download
              </button>
              <button className="botton-dwn btn btn-white btn-lg">
                <FontAwesomeIcon icon={faGooglePlay} /> Download
              </button>
            </div>
          </div>
          <div data-aos="fade-right" className="col-lg-6 landing-child">
            <img  className="favourite-image" src={Image} alt="Cat"></img>
          </div>
        </div>
      </div>
      <div className="container bg-whitesmoke">
        <div className="features row">
          <div className="feature-box col-lg-4">
            <FontAwesomeIcon className="fontIcon fa-4x" icon={faCheckCircle} />
            <h3>Easy to use</h3>
            <p>So easy to use</p>
          </div>
          <div className="fontIcon feature-box col-lg-4">
            <FontAwesomeIcon className="fontIcon  fa-4x" icon={faSearchPlus} />
            <h3>Find a community</h3>
            <p>We connecting all cat lover community</p>
          </div>
          <div className="fontIcon feature-box col-lg-4">
            <FontAwesomeIcon className="fontIcon fa-4x" icon={faCat} />
            <h3>Guaranteed to work</h3>
            <p>Find the cutes cat picture</p>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
};

export default Landing;

import React, { useState } from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
const Home = (props) => {
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const searchGoogle = (e) => {
    e.preventDefault();
    // props.history.push({ pathname: "/search", state: state });
    navigate("/search", { state: state });
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__logo">
          <img src="/img/googleImage.png" alt="LOGO" />
        </div>
        <form className="home__form" onSubmit={searchGoogle}>
          <input
            type="text"
            className="home__input"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <div className="home__group">
            <input className="home__btn" type="submit" value="Google Search" />
          </div>
          <FaSistrix className="search__icon" />
          <FaMicrophone className="microphone" />
        </form>
      </div>
    </div>
  );
};

export default Home;

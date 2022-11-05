import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import { key, cx } from "../api";
import axios from "axios";
import Show from "./Show";
const Search = (props) => {
  const location = useLocation();
  // return <div>{location.state}</div>;
  const [state, setState] = useState(location.state ? location.state : "");
  const [result, setResult] = useState();
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const searchGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
      );
      if (response) {
        console.log(response.data.items, response.data.searchInformation);
        setResult(response.data.items);
        setInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(2222, result);
  useEffect(() => {
    async function getPosts() {
      if (location.state) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
          );
          if (response) {
            console.log(response.data.items, response.data.searchInformation);
            setResult(response.data.items);
            setInfo(response.data.searchInformation);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();
  }, []);
  return (
    <div className="search">
      <div className="search__form">
        <div className="search__form-logo">
          <img src="/img/newimage.png" alt="logo" onClick={goBack} />
        </div>
        <div className="search__form-input">
          <form className="home__form" onSubmit={searchGoogle}>
            <input
              type="text"
              className="home__input"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <FaSistrix className="search__icon" />
            <FaMicrophone className="microphone" />
          </form>
        </div>
      </div>
      <Show result={result} info={info} />
    </div>
  );
};

export default Search;

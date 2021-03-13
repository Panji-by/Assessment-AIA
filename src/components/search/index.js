import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./list";
import Header from "../landing/header";
import SearchBox from "./searchbox";
import { Button, Modal } from "reactstrap";
import LoginForm from '../Login/loginForm'
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=`+process.env.REACT_APP_API_KEY+`&tags=${searchValue}&per_page=10&page=1&format=json&nojsoncallback=1`

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  //modal
  const [modalLogin, setModalLogin] = useState(false);
  const toggleLogin = () => setModalLogin(!modalLogin);

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header className='nav-icon' heading={<FontAwesomeIcon className='fa-2x nav-icon' icon={faCat} />} />
        <SearchBox
          className="searchBox-center"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <button className='btn btn-lg btn-primary bottton' onClick={toggleLogin}>Login</button>
        <Modal isOpen={modalLogin} toggle={toggleLogin}>
          <LoginForm />
        </Modal>
        <button className='btn btn-lg btn-light bottton'>Sign In</button>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Search;

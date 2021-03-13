import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import Images from "../../Image/Cat.png";
import "./assets/search.scss";
import { postSearchAll } from "../../redux/action/searchAction";
import axios from 'axios'

const SearchFlickr = (props) => {
  const dispatch = useDispatch();
  const [pageActive, setPageActive] = useState(1);
  let history = useHistory();
  const [items, setItems] = useState([])
  // let { input } = useParams();

  const [search, setSearch] = useState(null);
  const data = {
    contest: search,
  };
  console.log("INI SEARCH", search)
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(postSearchAll(data, pageActive));
  };

  useEffect (() => {
    const result = axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${search}&format=json&nojsoncallback=true`) 
    .then((response) => {
      console.log(response.data.items);
      this.setState({
          items: response.data.items
      })
    })
    .catch((err) => {
    console.log(err)
    })
  }, []);
  //   const submitSearch = (e) => {
  //     e.preventDefault();
  //     dispatch(postSearchAll(data, pageActive));
  //   };
  // const dataSearch = useSelector((state) => state.postSearchAll.dataJson);
  // const loading = useSelector((state) => state.postSearchAll.loading);
  // const totalResult = useSelector((state) => state.postSearchAll.total);
  // const totalPages = useSelector((state) => state.postSearchAll.pages);
  // console.log(search, "SEARCH");
  // console.log(dataSearch, "SEARCH DATA");
  // if (data.length === 0) {
  //     setResult("Sorry Data Not Found");
  //   }else {
  //     setResult("")
  //   }
  return (
    <>
      <div className="form-group form-center">
        <input
          value={search}
          className="search-input form-control"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginLeft: "0", width: "377px" }}
        />
        <button className='btn btn-lg' onClick={submitSearch}></button>
      </div>
      <div className="card-search">
        <div className="col-auto m-md-0 mx-auto pb-2">
          <img
            className="cardx"
            src={data.photo.photo}
          ></img>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  let actions = bindActionCreators({});
  return {
    ...actions,
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFlickr);

import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import {Container, Card} from 'reactstrap'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      input: "cat"
    };
  }

  componentDidMount(){
    this.SearchImage();
  }

  SearchImage = () => {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
        process.env.REACT_APP_API_KEY +
        "&tags="+this.state.input+"&per_page=100&page=1&format=json&nojsoncallback=1"
    )
      .then(function (response) {
        return response.json();
      })
      .then(
        function (j) {
          let picArray = j.photos.photo.map((pic) => {
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              ".jpg";
            return <img className='card-img-top col-md-4' style={{maxHeight:'250px'}} alt="dogs" src={srcPath}></img>;
          });
          this.setState({ pictures: picArray });
        }.bind(this)
      );
  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
  }

  Delay = (function() {
    var timer = 0;
    return function(callback, ms){
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  render() {
    return (
      <>
      <Container>
        <div className="form-group form-center">
          <input
            // value={search}
            className="search-input form-control"
            type="text"
            placeholder="Search"
            // onChange={(e) => setSearch(e.target.value)}
            style={{ marginLeft: "0", width: "377px" }}
            onChange={this.handleChange}
            onKeyUp = {() => this.Delay(function(){
              this.SearchImage();
            }.bind(this), 1000)}
          />
          <button className="btn btn-lg"></button>
        </div>
        <div className="card-search">
        <LazyLoad height={683} offsetTop={200}>
          <div className='row cardx'>
           <div className='' >
           {this.state.pictures}
           </div>
           </div> 
         </LazyLoad>
            {/* <div className="cardx">{this.state.pictures}</div> */}
          {/* </div> */}
        </div>
        </Container>
      </>

      //   <div className="App">
      //     <p className="App-intro">
      //       {this.state.pictures}
      //     </p>
      //   </div>
    );
  }
}

export default App;

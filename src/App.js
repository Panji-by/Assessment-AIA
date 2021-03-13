import './App.css';
import Routes from "./routers/router";
import Search from './components/search/index'
import Landing from './components/landing/landing'
import {Provider} from 'react-redux';
import SearchFlickr from './components/Search Login/searching'

import store from './redux/store';

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes />
    </Provider>
    </>
  );
}

export default App;

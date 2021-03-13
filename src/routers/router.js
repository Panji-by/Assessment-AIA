import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from '../components/landing/index';
import Search from '../components/Search Login/index'
import App from '../App'
import NotFound from '../components/not found/notfound'

const Routes = () => {
    return(
        <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/Search" exact>
          <Search />
        </Route>
        <Route path="/app" exact>
          <App />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        </Switch>
        </Router>
    )
}

export default Routes;
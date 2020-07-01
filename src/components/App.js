import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import CharactersCard from "../pages/CharactersCard";

import Layout from "./Layout";

/*import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddeware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const rootReducer = combineReducers(reducers);
const store =createStore(rootReducer, composeWithDevTools(applyMiddeware(thunk)))*/

function  App () {
    return (
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/badges"  component={Badges} />
              <Route exact path="/badges/new" component={BadgeNew} />
              <Route exact path="/characters" component={CharactersCard} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter> 
    )
}

export default App;
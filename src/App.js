import React from 'react';
import Layout from "./Components/Layout/Layout"
import Home from './Pages/home/Home'
import FourFour from './Pages/FourFour';
import Mac from './Pages/mac/Mac';
import Store from './Pages/store/Store'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
     <Layout>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>

          <Route path="/Store">
              <Store />
          </Route>

          <Route path="/Mac">
              <Mac />
          </Route>

          <Route path="*">
              <FourFour />
          </Route>
        </Switch>
     </Layout>
     </BrowserRouter>
  )
};


export default App;
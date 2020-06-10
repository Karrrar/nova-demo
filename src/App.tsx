import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootswatch/dist/sketchy/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com for current theme names.)
import "./App.css";
import Navbar from "./Navbar";
import ProductInput from "./Componets/ProductInput/ProductInput";
import BatchNumberValidator from "./Componets/BatchNumberValidator/BatchNumberValidator";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/addproduct">
            <ProductInput />
          </Route>

          <Route path="/">
            <BatchNumberValidator />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

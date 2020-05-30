import React from "react";
import logo from "./logo.svg";
import "bootswatch/dist/sketchy/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com for current theme names.)
import "./App.css";
import Navbar from "./Navbar";
import ProductInput from "./Componets/ProductInput/ProductInput";
import BatchNumberValidator from "./Componets/BatchNumberValidator/BatchNumberValidator";
import CustomerInput from "./Componets/CustomerInput/CustomerInput";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <CustomerInput />
      </header>
    </div>
  );
}

export default App;

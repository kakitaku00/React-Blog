import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Top from "./pages/Top";
import Create from "./pages/Create";
import Article from "./pages/Article";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <Top />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/:id">
              <Article />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

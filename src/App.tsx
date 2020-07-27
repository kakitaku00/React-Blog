import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import Create from "./components/Create";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <ArticleList />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

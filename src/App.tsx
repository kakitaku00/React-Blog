import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <PostList />
      <Footer />
    </div>
  );
};

export default App;

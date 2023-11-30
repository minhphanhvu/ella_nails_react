import React from "react";
import NavigationComponent from "components/NavigationComponent";
import Home from "components/Home";
import About from "components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

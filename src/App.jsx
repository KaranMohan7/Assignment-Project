import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
  <div className="w-full min-h-screen bg-gradient-to-r from-indigo-100 to-gray-50">
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </div>
  );
};

export default App;

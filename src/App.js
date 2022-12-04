import Signup from "./Screens/Signup";
import Login from "./Screens/Signin";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Signin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

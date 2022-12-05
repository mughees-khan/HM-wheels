import Signup from "./Screens/Signup";
import Login from "./Screens/Signin";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Postadd from "./Screens/Postadd";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Signin" element={<Login />} />
        <Route path="postadd" element={<Postadd />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

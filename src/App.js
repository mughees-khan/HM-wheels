import Signup from "./Screens/Signup";
import Login from "./Screens/Signin";
import Videos from "./Screens/Videos";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Postadd from "./Screens/Postadd";
import Newcars from "./Screens/Newcars";
import Detail from "./Screens/Home/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/postadd" element={<Postadd />} />
        <Route path="/video" element={<Videos />} />
        <Route path="/new" element={<Newcars />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

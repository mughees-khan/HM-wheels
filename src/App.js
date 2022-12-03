import './App.css';
import Header from './Components/Header';
import Signup from './Screens/Signup';
import Login from './Screens/Signin';
import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import Home from './Screens/Home';
function App() {
  return (
    <BrowserRouter>
    {URL==="Signup"? null: <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Signup' element={<Signup />} />
        <Route path='Signin' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


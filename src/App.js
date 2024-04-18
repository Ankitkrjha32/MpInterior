import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


import Navbar from "./components/Navbar";
import Contact from "./pages/contact"
import About from "./pages/About";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="  flex flex-col max-h-[screen] w-screen py-2 h-full bg-[#ffffff] ">
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />}></Route>
       
        <Route
          path="/about"
          element={<About/>}
        ></Route>
        

        <Route
          path="/contact"
          element={<Contact/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

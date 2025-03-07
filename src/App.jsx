import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componets/Login";
import SignUp from "./componets/Signup";
import Hero from "./componets/Hero";
import { Toaster } from "react-hot-toast";
import Cookies from "universal-cookie";
import { useState } from "react";

const cookies = new Cookies();

const App = () => {
  const [room, setRoom] = useState("");
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  if (!isAuth) {
    return (
      <div>
        <Login />
      </div>
    );
  }else if(isAuth){
    return(
    <div>
      <Hero/>
    </div>
    )
  }
  return (
    <Router>
      
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </Router>
  );
};

export default App;

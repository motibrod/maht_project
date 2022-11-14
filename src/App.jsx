import React from "react";
import "./App.css";
import Details_page from "./Details_page";
import LoginPage from "./Regisrtaition/Login_page2.0";
import Login from "./Regisrtaition/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path="/"></Route>
          <Route element={<Details_page />} path="/Details"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

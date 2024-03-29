import React from "react";
import "./App.css";
import DetailsPage from "./Details_page";
import LoginPage from "./Regisrtaition/Login_page2.0";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "./Payment";
import Admin from "./Admin";
import Couple_names from "./componens/Couple_names";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path="/"></Route>
          <Route element={<DetailsPage />} path="/Details"></Route>
          <Route element={<Payment />} path="/Payment"></Route>
          <Route element={<Admin />} path="/Admin"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

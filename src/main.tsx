import React from "react";
import ReactDOM from "react-dom";
import "./globals.css";
// import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import OnlineSchedule from "./Pages/Online-Schedule/Online";
import OutdoorSchedule from "./Pages/Outdoor-Schedule/Outdoor";
import Profile from "./Pages/Profile/Profile";
import MondayOutdoor from "./Pages/Outdoor-Monday/MondayOutdoor";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/online" element={<OnlineSchedule />} />
        <Route path="/outdoor" element={<OutdoorSchedule />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/monday-outdoor" element={<MondayOutdoor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

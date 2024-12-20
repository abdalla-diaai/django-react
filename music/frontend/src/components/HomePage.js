import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import RoomJoin from "./RoomJoin";
import CreateRoomPage from "./CreateRoomPage";

const HomePage = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to the Music App!</p>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/join" element={<RoomJoin />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default HomePage;
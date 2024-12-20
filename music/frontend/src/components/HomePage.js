import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import RoomJoin from "./RoomJoin";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

const HomePage = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<div>
            <h1>Music App</h1>
            <h4>Home Page</h4>
            </div>} />
          <Route path="/join" element={<RoomJoin />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/room/:roomCode" element={<Room />} />
        </Routes>
      </Router>
    </div>
  );
};

export default HomePage;
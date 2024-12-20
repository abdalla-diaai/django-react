import React, { useState } from "react";
import { Button, Grid, Typography, TextField, } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const RoomJoin = () => {

  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const roomButtonPressed = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: roomCode }),
    };
    const response = await fetch("/api/join-room", requestOptions);
    if (response.ok) {
      navigate(`/room/${roomCode}`);
    } else {
      setError("Room not found.");
    }
  };

  return (
    <Grid container spacing={1} alignItems={"center"}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={!!error}
          label="Code"
          placeholder="Enter a Room Code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          helperText=" "
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={roomButtonPressed}>
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" to="/" component={Link}>
          Back
        </Button>
      </Grid>

    </Grid>

  );
};

export default RoomJoin;

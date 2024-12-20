import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
    const defaultVotes = 2;
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [votesToSkip, setVotesToSkip] = useState(defaultVotes);
    const [isHost, setIsHost] = useState(false);
    let roomCode = useParams().roomCode;

    const getRoomDetails = () => {
        fetch('/api/get-room' + '?code=' + roomCode)
            .then((response) => {
                if (!response.ok) {
                    props.leaveRoomCallback();
                    props.history.push('/');
                }
                return response.json();
            })
            .then((data) => {
                setVotesToSkip(data.votes_to_skip);
                setGuestCanPause(data.guest_can_pause);
                setIsHost(data.is_host);
            });
    };

    getRoomDetails();

    return (
        <div>
            <h3>{roomCode}</h3>
            <p>Votes: {votesToSkip}</p>
            <p>Guest can pause: {guestCanPause}</p>
            <p>Host: {isHost}</p>
        </div>
    );
};

export default Room;
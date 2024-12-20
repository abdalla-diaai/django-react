import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Room = () => {
    const defaultVotes = 2;
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [votesToSkip, setVotesToSkip] = useState(defaultVotes);
    const [isHost, setIsHost] = useState(false);
    const { roomCode } = useParams(); // Destructuring roomCode from useParams
    const navigate = useNavigate();

    const getRoomDetails = () => {
        fetch(`/api/get-room?code=${roomCode}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch room details');
                }
                return response.json();
            })
            .then((data) => {
                setVotesToSkip(data.votes_to_skip);
                setGuestCanPause(data.guest_can_pause);
                setIsHost(data.is_host);
            })
            .catch((error) => {
                console.error(error);
                navigate('/'); // Navigate to home page on error
            });
    };

    useEffect(() => {
        if (roomCode) {
            getRoomDetails(); // Fetch room details when roomCode changes
        } else {
            navigate('/'); // Redirect to home if no roomCode is found
        }
    }, [roomCode, navigate]);

    return (
        <div>
            <h3>Room Code: {roomCode}</h3>
            <p>Votes to Skip: {votesToSkip}</p>
            <p>Guest Can Pause: {guestCanPause.toString()}</p>
            <p>Is Host: {isHost.toString()}</p>
        </div>
    );
};

export default Room;

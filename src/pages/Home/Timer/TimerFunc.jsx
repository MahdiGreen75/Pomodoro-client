/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import sound from "../../../assets/ring.mp3.mp3";
import ProgressBar from '@ramonak/react-progress-bar';
// import ProgressBar from "@ramonak/react-progress-bar";
// import finishSound from "../../../assets/complete.mp3.mp3";

function TimerFunc({ toStop }) {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        let timerInterval;

        // Start the timer
        const startTimer = () => {
            timerInterval = setInterval(() => {
                setCurrentTime((prevTime) => {
                    if (prevTime + 1 >= toStop) {
                        clearInterval(timerInterval);
                        playSong(); // Play the song when the timer reaches 'interval'
                        //if the song is played then 
                        console.log("played the song");
                        return toStop; // Reset the timer
                    } else {
                        return prevTime + 1;
                    }
                });
            }, 1000); // Update every 1000 milliseconds (1 second)
        };

        // Play the song
        const playSong = () => {
            const audio = new Audio(sound);
            audio.play().catch(error => {
                // Handle the error (e.g., display a message to the user)
                console.error("Error playing audio:", error.message);
            });
        };
        startTimer();

        return () => {
            clearInterval(timerInterval);
        };
    }, [toStop]);

    return (
        <div>
            <p className='text-white font-bold text-xs mb-2'>Time remaining: {toStop - currentTime} seconds</p>
            <ProgressBar
                className='border-2  rounded-lg border-violet-600 drop-shadow-2xl'
                completed={currentTime}
                height="30px"
                borderRadius="5px"
                isLabelVisible={false}
                labelColor="#ffffff"
                labelSize="8px"
                maxCompleted={toStop}
            />
        </div>
    );
}

export default TimerFunc;
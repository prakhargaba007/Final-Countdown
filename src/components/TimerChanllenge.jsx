import { useState, useRef } from "react"
import ResultModal from "./ResultModal"

function TimerChallenge(props) {

    // let [timerStarted, setTimerStarted] = useState(false)
    // let [timerExpired, setTimerExpired] = useState(false)



    // function handleStart() {
    //     timer.current = setTimeout(() => {
    //         // setTimerExpired(true)
    //         dialog.current.open()
    //     }, props.targetTime * 1000);

    //     setTimerStarted(true)
    // }

    // function handleStop() {
    //     clearTimeout(timer.current)
    //     setTimerStarted(false)
    //     // setTimerExpired(false)
    // }

    // function handleClose() {
    //     setTimerStarted(false)
    // }

    let timer = useRef()
    let dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(props.targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < props.targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(props.targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return <>
        <ResultModal
            remainingTime={timeRemaining}
            ref={dialog}
            targetTime={props.targetTime}
            // result='YOU LOST!!!' 
            onReset={handleReset}
        />

        <section className="challenge" >

            <h2>{props.title}</h2>
            <p className="challenge-time">
                {props.targetTime} second{props.targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    </>
}

export default TimerChallenge


import { useState, useRef } from "react";


export default function Player() {

  let playerName = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState(null)
  // const [submited, setSubmited] = useState(false)

  // function handleChange(event) {
  //   setSubmited(false)
  //   setEnterdPlayerName(event.target.value)
  // }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ''
    // playerName.current.
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          placeholder="Enter Name"
        />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import './App.css';
import TriggerButton from './comonents/TriggerButton';
import shyaboi from './sounds/shyaboi.mp3'

function App() {

  const [numberOfButtons, setNumberOfButtons] = useState(9)
  const [buttonassignment, setButtonAssignment] = useState([])
  const [buttState, setButtState] = useState([])


  // useEffect(() => {

  //   const res = [...Array(numberOfButtons)].map((_, i) => {
  //     buttonassignment.push(i)
  //     return i;
  //   });
  // }, [])

  const plusOne = ()=>{
    setNumberOfButtons(numberOfButtons + 1)
  }

  let index = 0
  let thing = []
  useEffect(()=>{
      while(index < numberOfButtons) {
        index++
        thing.push(<TriggerButton soundz={shyaboi} label={'shyaboi mp3'} />)
      }
      setButtState(thing)
  },[buttState, numberOfButtons])

  return (
    // button should have a SETUP mode to set the sound, the trigger key/midi channel
    <>
    <h2>
      Number of Buttons: {numberOfButtons}
    </h2>
      <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-blue-800" onClick={plusOne} >+1</button>
    <div className="grid place-items-center grid-cols-3 h-screen">
    {buttState.map(butt => {
    return (
      butt
    )
  })}
      {/* <TriggerButton soundz={shyaboi} label={'shyaboi mp3'} /> */}
    </div>
    </>
  );
}

export default App;

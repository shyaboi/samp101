import React, { useEffect, useState } from 'react';
import './App.css';
import TriggerButton from './comonents/TriggerButton';
import shyaboi from './sounds/shyaboi.mp3'

function App() {

  const [numberOfButtons, setNumberOfButtons] = useState(6)
  const [buttonassignment, setButtonAssignment] = useState([])
  const [buttState, setButtState] = useState([])

  const plusOne = () => {
    setNumberOfButtons(numberOfButtons + 1)
  }

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      localStorage.setItem('mp3,1', reader.result);
    };
  }


  function getFile(e) {
    let file = e.target.files[0];
    getBase64(file);
  }


  let index = 0
  let thing = []

  useEffect(() => {
    while (index < numberOfButtons) {
      index++
      thing.push(<TriggerButton soundz={shyaboi} label={'shyaboi mp3'} />)
    }
    setButtState(thing)
  }, [numberOfButtons])

  return (
    // button should have a SETUP mode to set the sound, the trigger key/midi channel
    <>
      <h2>
        Number of Buttons: {numberOfButtons}
      </h2>
      <button className="h-12 px-9 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-blue-800" onClick={plusOne} >+1</button>
      <div className="flex justify-center">
        <div className="mb-3 w-96">
          <label for="formFile" className="form-label inline-block mb-2 text-gray-700">Default file input example</label>
          <input className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
            onChange={getFile}
          />
        </div>
      </div>
      <div className="grid place-items-center grid-cols-6 h-screen">
        {buttState.map(butt => {
          return (
            butt
          )
        })}
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';

const playThing = (e) => {
  let soundz = e.target.getAttribute('data-sound');
  var sound = new Howl({
    src: [soundz]
  });

  sound.play();
}


function TriggerButton({ soundz, label, keyAssined }) {
  
  useEffect(() => {
    const listener = event => {
      if (event.code) {
        console.log(event.code);
        event.preventDefault();
        // callMyFunction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (

    // button should have a SETUP mode to set the sound, the trigger key/midi channel
    // TODO add control section to change pitch, add effects
    <>
      <button className="h-20 px-20 m-3 text-xl text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" data-sound={soundz} onClick={playThing} buttonAssignment={keyAssined} >{label}</button>
    </>
  );
}

export default TriggerButton;
import React from 'react'

function Tremolo() {
return (
  <div className ='info-container'>
  <div className= 'pedalCard'>
    <div className= 'title'>
  <h1>Tremolo</h1>

  <p> Tremolo is an effect in which an LFO to cut the signal volume by a rate, depth, and specific waveform.
    It is a feature on many amplifiers, however in the 1950's, Fender famously mislabelled the effect as vibrato, leading to 
   a well known confusion within the guitar community. From a subtle sine-wave on and old soul record, to the fully cut square wave of a "wub-wub" effect, tremolo has many different uses and sounds.
  
  </p>

  </div>

  <h2>Songs Featuring Tremolo</h2>
  <ul>
    <li>Link Wray - Rumble </li>
    <li>The Rolling Stones - Gimme Shelter</li>
    <li>John Lennon and the Plastic Ono Band - Hold On</li> 
  </ul>

  <h2> Noted Pedals</h2>
  <li>Boss TR-2</li>
  <li>Electro Harmonix Stereo Pulsar </li>
  <li>Earthquaker Devices Nightwire </li>

  </div>
  </div>
  )
}

export default Tremolo
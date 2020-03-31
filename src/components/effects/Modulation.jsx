import React from 'react'
import { Link } from 'react-router-dom'


function Modulation() {
    return (
        <div className ='info-container'>
    <div className = 'pedalCard'>

    <div className ='title'>
     <h1>Modulation</h1>



    <p> Modulation is a form of effect that alters the waveform of the signal. 
        It can be done in a number of ways, including running a copy of the signal out of phase, or moving the signal in and out of tune with itself.
        Modulation effects were popularized in the late 1960's with the rise of psychadelic rock music. From subtle and smooth to a vicious maelstrom of sound, Modulation has many ways to change your tone and shape your style 
    </p>
    </div>

    

<div className ='links'>
<Link to= '/modulation/Phaser' className ='nav-link'> <button><h4>Phaser</h4></button>  </Link>
<Link to= '/modulation/Flanger'className ='nav-link'> <button><h4>Flanger</h4></button>   </Link>
<Link to= '/modulation/Chorus' className ='nav-link'><button><h4>Chorus</h4></button>   </Link>
<Link to= '/modulation/Vibrato' className ='nav-link'>  <button><h4>Vibrato</h4></button>  </Link>
</div>

    </div>
    </div>
    )
}

export default  Modulation
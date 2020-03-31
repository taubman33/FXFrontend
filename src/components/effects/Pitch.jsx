import React from 'react'
import { Link } from 'react-router-dom'


function Pitch (props) {
return (
    <div className ='info-container'>
    <div className = 'pedalCard'>
   <div className = 'title'>
    <h1> Pitch Effects </h1>
    <p> Pitch effects effect the pitch of the tone being produced. 
        Some of the earliest examples of Pitch Shifting were done by physically altering the speed of the tape being recorded and played, famously used in the piano solo in Beatles "In My Life", and Frank Zappa's "Peaches en Regalia".
        Today many pedals can recreate this effect through a number of different methods, such as by adding additional octaves or harmonics over the signal.
        These can be used to replicate the sound of a bass guitar, or a 12 or 18 string. They can also emulate the sounds of a steel drum, koto, or synthesizer, as well as mocking the sound of several guitar players playing in unison.
        This "Harmonizer" effect is a hallmark of many 1980's guitar solos. In the 2000's this sound was appropriated into pop music with the Auto Tune effect, which everyone hates for a good reason.
    </p>
    
    </div>

    <div className ='links'>
<Link to='/pitch/Octave' className ='nav-link'> <button><h4>Octave</h4></button>   </Link>
<Link to= '/pitch/Harmonizer'className ='nav-link'><button><h4>Harmonizer</h4></button>    </Link>
<Link to='/pitch/Whammy'className ='nav-link'> <button><h4>Wah-Wah</h4></button>   </Link>
</div>



    </div>

    </div>
    )
  }

  export default Pitch
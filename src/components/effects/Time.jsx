import React from 'react'
import { Link } from 'react-router-dom'


function Time () {
return (
    <div className ='info-container'>
    <div className= "pedalCard">
    <div className= "title">
   <h1>Time and Space Effects</h1>
    <p> There are many ways to give the instrument's signal a sense of space and time, with Delay, Echo and Reverb being the most preventlent. Reverb was originally created by simply recording the ambience of a room or concert hall. Studios like Abbey Road and Muscle Shoals are famous for the warm, subtle reverb that their rooms naturally produce.
        Of course, not everyone can record in the same room that Rubber Soul was, so a number of devices and methods have been made to mimic this sound. Many amplifiers have a reverb function built in, based off of the old spring tank sound that Fender used in their amps in the 1950's.  
        Most producers and recording engineers will put some form of reverb and echo on the individual tracks, and the song as a whole. It is far easier to name songs that feature this effect, than those that do not.    
    </p>
    </div>

    <div className ='links'>
<Link to='/time/Delay' className ='nav-link'> <button><h4>Delay</h4></button>   </Link>
<Link to= '/time/Echo' className ='nav-link'> <button><h4>Echo</h4></button>   </Link>
<Link to= '/time/Reverb' className ='nav-link'> <button><h4>Reverb</h4></button>   </Link>
</div>
    </div>
    </div>
    )
  }

  export default Time


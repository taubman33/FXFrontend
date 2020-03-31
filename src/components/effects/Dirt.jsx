import React from 'react'
import { Link } from 'react-router-dom'




function Dirt () {
    return (
        <div className ='info-container'>
        <div className = 'pedalCard'>
        <div className = 'title'>
        <h1>Dirt Effects </h1>
        <p> Ever since the blues greats of the 1940's, people have loved the sounds of a loud, dirty guitar. 
            Before the advent of the effect pedal, this tone was created either by cranking an amplifier loud enough to overdrive the vaccuum tubes powering it, or by cutting the speakers with scissors.
            Luckily we no longer have to cause physical damage to our equipment to get that sweet sound, 
            as pedals that dirty up the guitar sound are probably the most common and most diverse of the all categories. 
            From a warm, tight blues lead to the horrifying shriek of heavy metal thunder, there are plenty of ways to shape up your guitar's tone using 'Dirt' effects.
            
        </p>

        </div>   

        <div className ='links'>
        <Link to='/dirt/Overdrive' className ='nav-link'> <button><h4>Overdrive</h4></button>  </Link> 
        <Link to='/dirt/distortion' className ='nav-link'><button><h4>Distortion</h4></button>   </Link>
        <Link to='/dirt/fuzz' className ='nav-link'><button><h4>Fuzz</h4></button>    </Link>
        </div>
        </div>
     </div>
    )
}

export default Dirt
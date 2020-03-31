import React from 'react'
import { Link } from 'react-router-dom'

function  Volume (){
return (
   <div className ='info-container'>
<div className= 'pedalCard'>

   <div className = 'title'>
<h1> Volume Effects</h1>
<p> Ever since the advent of the amplified electric guitar, players have used several methods to shape the volume of their guitar.
   Two of the main forms of effect that alter the volume of the signal are Tremolo, and Compression. These effects are used to change the volume without effecting the tone of the signal.
</p>
</div>

<div className = 'links'>
<Link to= '/Volume/Tremolo' className ='nav-link'><button><h4>Tremolo</h4></button>   </Link>
<Link to= '/Volume/Compressor' className ='nav-link'><button><h4>Compressor</h4></button>   </Link>
<Link to= '/Volume/Boost' className ='nav-link'><button><h4>Boost</h4></button>   </Link>
</div>


</div>
</div>
)
}

export default Volume
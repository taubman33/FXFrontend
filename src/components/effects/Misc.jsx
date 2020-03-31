import React from 'react'
import { Link } from 'react-router-dom'


function Misc() {
    return(

      <div className ='info-container'>
        <div className= "pedalCard">

        <div className="title">
        <h1>Miscellaneous Effects</h1>

        <p>There are a number of other ways to effect an instruments signal, with many new ones being developed within the past decade.
          Especially with the advent of digital audio processing, there are now effects that the guitar can run through that would have been impossible 50 years ago.
          Turn your guitar into a synthesizer, make it speak, or turn it into a transistor radio. 
          The limits of guitar effect processing are being pushed constantly in the 21st century.


        </p>
        </div>

        <div className ='links'>
        <Link to='/misc/Synth' className ='nav-link'><button><h4>Synthesizer</h4></button> </Link>
        <Link to='/misc/Bitcrusher' className ='nav-link'><button><h4>Bit Crusher</h4></button> </Link>
        <Link to='/misc/Talkbox' className='nav-link'><button><h4>Talk Box</h4></button></Link>
        <Link to='/misc/Looper' className='nav-link'><button><h4>Looper</h4></button></Link>
       </div>

        </div>
        </div>
      )
}




export default Misc
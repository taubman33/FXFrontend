import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'



function Aside (props) {
return (

<div className= 'asideComponent'>


<div className= 'searchbar'>
  <h2> Search Pedals DB</h2>
<Searchbar 
  handleSearchInput={props.handleSearchInput}
  handleSearchSubmit={props.handleSearchSubmit}
  searchFormData={props.searchFormData} />
</div>


  <h2> Add a pedal </h2>
   <Link to='/CreatePedal' className='nav-link'><button><h4>Add Pedal</h4></button></Link>
   
   {/* <h2> Edit a pedal </h2>
  <Link to='/EditPedal' className='nav-link'><button><h4>Edit Pedal</h4></button></Link> */}


<h2> Effect Types</h2>
            <div className= 'links'>     
            <Link to='/Dirt' className ='nav-link'><button><h4>Dirt</h4></button> </Link>
            <Link to= '/Modulation' className ='nav-link'><button><h4>Modulation</h4></button> </Link>
            <Link to= '/Time' className ='nav-link'> <button><h4>Time</h4></button> </Link>
            <Link to='/Pitch' className ='nav-link'> <button><h4>Pitch</h4></button></Link>
            <Link to= '/Volume' className ='nav-link'><button><h4>Volume</h4></button> </Link>
            <Link to= '/Misc' className ='nav-link'><button><h4>Misc</h4> </button></Link>
            </div>


            



</div>   
)
}

export default Aside
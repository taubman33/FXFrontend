import React, { Component } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom'


class PedalInfo extends Component {
constructor(props){
    super(props)

  }

 
   handleDelete =  ()=>{
    
     let token = localStorage.getItem('authToken');
   axios({
      url: 'http://localhost:3000/pedals/' + this.props.pedalInfo[0].id,
      method: "DELETE",
      headers: {'authorization': `Bearer ${token}`}
    })
  
    this.props.history.push('/')
  }

  render() {
  
    if (this.props.pedalInfo === null) {
    return (
      <div> </div>
     ) 
    }
    else {
    
    const pedal  = this.props.pedalInfo
    return (
      
      <div className ='info-container'>
            <div className='pedalCard'>
            
              <div className='pedalInfo'>
                <h1>{this.props.pedalInfo && this.props.pedalInfo[0].name}</h1> 
              <h2>Manufacturer: </h2>  <h3>{this.props.pedalInfo && this.props.pedalInfo[0].maker}</h3>
              <h2>Effect Type: </h2> <h3> {this.props.pedalInfo && this.props.pedalInfo[0].effect_subtype} </h3>
              <h2>Notable Users: </h2> <h3> {this.props.pedalInfo && this.props.pedalInfo[0].notable_users} </h3>
              <h2>Songs Used On: </h2> <h3>{this.props.pedalInfo && this.props.pedalInfo[0].songs_used_on}</h3>
              </div>

              <div className='pedalImage'>
              <img alt={this.props.pedalInfo && this.props.pedalInfo[0].name} src={this.props.pedalInfo && this.props.pedalInfo[0].photo} />
              </div>
        
              <button onClick={this.handleDelete}> <h4>Delete Pedal</h4></button>

             
              <Link to ={`/EditPedal/${this.props.pedalInfo && this.props.pedalInfo[0].id}`} className='nav-link'><button><h4>Edit Pedal</h4></button></Link>

              
            </div>

           
        </div>      
    )
    }
  }
}


export default PedalInfo

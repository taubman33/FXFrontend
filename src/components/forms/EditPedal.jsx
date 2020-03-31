import React, { Component } from 'react';
import axios from "axios";
import {updatePedal} from '../../services/api-helper'


class EditPedal extends Component {

  state = {
    name: '',
    maker: '',
    effect_type: '',
    effect_subtype: '',
    notable_users: '',
    songs_used_on:''

  }


    componentDidMount(){ 

    this.getPedalInfo()
}

  getPedalInfo = async () =>
  {
    const idParams = this.props.match.params.id
    const res = await axios.get("http://localhost:3000/pedals/" + idParams)
        const {name, maker, effect_subtype, notable_users, songs_used_on, photo} = res.data.pedal;
       
        this.setState({
            name,
            maker,
            effect_subtype,
            notable_users,
            songs_used_on,
            photo
        })
  }

  handleFormChange = (e)=> {
    const { name, value } = e.target;
    this.setState({
        [name]: value
      })
    }

    onSubmit = async (evt) =>{
        evt.preventDefault()    
        const idParams = this.props.match.params.id
        let res = updatePedal(idParams,this.state)
        this.props.history.push('/pedals/' + idParams )
    }


  render() {
    //   controlled component form that statefully updates pedal
    return (
      <div className = "crud-form-Container">
        <div className="create-form" >
          <h2>  Update Pedal in Database</h2>
          
          <form onSubmit={this.onSubmit}>
          <div className="form" >

            <label>Pedal Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleFormChange} />
              <br/>

              <label>Manufacturer: </label>
            <input
              type="text"
              name="maker"
              value={this.state.maker}
              onChange={this.handleFormChange} />
              <br/>

              <label>Effect Type: </label>
            <input
              type="text"
              name="effect_subtype"
              value={this.state.effect_subtype}
              onChange={this.handleFormChange} />
              <br/>

              <label>Notable Users: </label>
            <input
              type="text"
              name="notable_users"
              value={this.state.notable_users}
              onChange={this.handleFormChange} />
              <br/>

              <label>Songs Used On: </label>
            <input
              type="text"
              name="songs_used_on"
              value={this.state.songs_used_on}
              onChange={this.handleFormChange} />
              <br/>

              <label>Image: </label>
            <input
              type="text"
              name="photo"
              value={this.state.photo}
              onChange={this.handleFormChange} />
              <br/>

            </div>
          
            <button><h4>Submit</h4></button>
          </form>
        </div>
       </div>
    )
  }   
}

export default EditPedal;
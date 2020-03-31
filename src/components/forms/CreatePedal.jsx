  import React, { Component } from 'react';
  import axios from "axios";
  
  
  class CreatePedal extends Component {
  
    state = {
      name: '',
      maker: '',
      effect_type: '',
      effect_subtype: '',
      notable_users: '',
      songs_used_on:''

    }
  
    async componentDidMount(){
      if (!this.props.isUpdateForm){
          return 
      }
  
      const idParams = this.props.match.params.id
     console.log(this.props)
      if (this.props.currentPedal.id !== idParams){
          const res = await axios.get("http://localhost:3000/pedals/" + idParams)
          const {name, maker, effect_subtype, notable_users, songs_used_on} = res.data.pedal;
         
          this.setState({
              name,
              maker,
              effect_subtype,
              notable_users,
              songs_used_on
          })
      } else {
          const {name, maker, effect_subtype, notable_users, songs_used_on} = this.props.currentPedal
          this.setState({
            name,
            maker,
            effect_subtype,
            notable_users,
            songs_used_on
          })
      }
      
  }
  
    handleFormChange = (e)=> {
      const { name, value } = e.target;
      this.setState({
          [name]: value
        })
      }
  
      onSubmit = async (evt) =>{
          evt.preventDefault()
          
    
          let token = localStorage.getItem('authToken');
          let res = await axios({
            url: 'http://localhost:3000/pedals/',
            method: "POST",
            data: this.state,
            headers: {'authorization': `Bearer ${token}`}
          })
       
          const pedal = res.data
        
          // this.props.setPedal(pedal)
     
          this.props.history.push('/pedals/' + pedal.id )
      }
  

    render() {
      //   controlled component form that statefully updates name and photo
      return (
        <div className = "crud-form-Container">
         
            <div className="create-form">
            <h2> Add a Pedal to the Database</h2>
         
            <form onSubmit={this.onSubmit}>
            <div className="form" >
              <label>Pedal Name:</label>
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
                value={this.state.make}
                onChange={this.handleFormChange} />
                <br/>

                <label>Effect Type: </label>
              <input
                type="text"
                name="effect_subtype"
                value={this.state.effect_subtype}
                onChange={this.handleFormChange} />
                <br/>

                <label>Notable Users:</label>
              <input
                type="text"
                name="notable_users"
                value={this.state.notable_users}
                onChange={this.handleFormChange} />
                <br/>

                <label>Songs Used On:</label>
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
  
  export default CreatePedal;

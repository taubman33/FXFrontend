import React, { Component } from "react";
import { BrowserRouter as  Route, withRouter, Switch } from "react-router-dom";
import axios from "axios";

import {
  createPedal,
  updatePedal,
  getAllPedals,
  destroyPedal,
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'

import Main from './components/Main'
import Form from './components/Form'
import PedalInfo from './components/PedalInfo'

import Dirt from './components/effects/Dirt'
import Fuzz from './components/effects/subeffects/Dirt/Fuzz'
import Distortion from './components/effects/subeffects/Dirt/Distortion'
import Overdrive from './components/effects/subeffects/Dirt/Overdrive'

import Modulation from './components/effects/Modulation'
import Phaser from './components/effects/subeffects/Modulation/Phaser'
import Flanger from './components/effects/subeffects/Modulation/Flanger'
import Chorus from './components/effects/subeffects/Modulation/Chorus'
import Vibrato from './components/effects/subeffects/Modulation/Vibrato'

import Time from './components/effects/Time'
import Delay from './components/effects/subeffects/Time/Delay'
import Echo from './components/effects/subeffects/Time/Echo'
import Reverb from './components/effects/subeffects/Time/Reverb'

import Pitch from './components/effects/Pitch'
import Octave from './components/effects/subeffects/Pitch/Octave'
import Harmonizer from './components/effects/subeffects/Pitch/Harmonizer'
import Whammy from './components/effects/subeffects/Pitch/Whammy'

import Volume from './components/effects/Volume'
import Boost from './components/effects/subeffects/Volume/Boost'
import Compressor from './components/effects/subeffects/Volume/Compressor'
import Tremolo from './components/effects/subeffects/Volume/Tremolo'

import Misc from  './components/effects/Misc'
import Synth from './components/effects//subeffects/Misc/Synth'
import Bitcrusher from './components/effects//subeffects//Misc/Bitcrusher'
import Talkbox from './components/effects//subeffects/Misc/Talkbox'
import Looper from './components/effects//subeffects/Misc/Looper'

import './App.css';

import Register from "./components/forms/Register";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    users: [],
    userForm: {
      username: "",
    },
    currentUser: null,
    authFormData: {
      username: "",
      email: "",
      password: ""
    },
    searchbar: ""
  }
  
  this.getAllPedals = this.getAllPedals.bind(this)
  }

async componentDidMount() {
  this.getPedals();
  const currentUser = await verifyUser();
  if (currentUser) {
    this.setState({ currentUser })
  }
}


//getting pedals from db
getPedals = async () => {
  const pedal = await getAllPedals();
  this.setState({
    pedal
  })
}

//Create pedal
newPedal = async (e) => {
  e.preventDefault();
  const pedal = await createPedal(this.state.pedalForm);
  this.setState(prevState => ({
    pedal: [...prevState.pedals, pedal],
    userForm: {
     name:"",
     maker:"",
     effect_type:"",
     effect_subtype: "",
     notable_users: "",
     songs_used_on: "",
    }
  }))
}

//edit pedal in db
editPedal = async () => {
  const { userForm } = this.state
  await updatePedal(userForm.id, userForm);
  this.setState(prevState => (
    {
      users: prevState.users.map(user => user.id === userForm.id ? userForm : user),
    }
  ))
}


//delete pedal from db
deletePedal = async (id) => {
  await destroyPedal(id);
  this.setState(prevState => ({
    pedals: prevState.pedal.filter(pedal => pedal.id !== id)
  }))
}

handleFormChange = (e) => {
  const { name, value } = e.target;
  this.setState(prevState => ({
    userForm: {
      ...prevState.userForm,
      [name]: value
    }
  }))
}


//function to get all pedals (not being used )
getAllPedals = () => {
    axios.get("http://localhost:3000/").then(jsonRes => {
      this.setState({
        pedal: jsonRes.data.pedals,
        pedalsLoaded: true
      });
    });
  };

  //to get individual pedals
  getPedal = (pedal) => {
    this.setState({
      currentPedal: pedal
    });
  };

//search bar input
handleSearchInput = (e) =>{
  let value = e.target.value
  this.setState(
    {searchbar: value}
  ) 
}

//search bar submit
handleSearchSubmit = (e) =>{
  e.preventDefault()
  let pedal_name = this.state.searchbar
  axios.get (`http://localhost:3000/search/${pedal_name}`).then(jsonRes => {
    this.setState({
      pedals: jsonRes.data.pedals,
      pedalsLoaded: true
    });
  });
  this.props.history.push('/search')
  } 

 // -------------- AUTH ------------------

//log in button 
 handleLoginButton = () => {
  this.props.history.push("/login")
}

handleLogin = async () => {
  const currentUser = await loginUser(this.state.authFormData);
  this.setState({ currentUser });
}

handleRegister = async (e) => {
  e.preventDefault();
  const currentUser = await registerUser(this.state.authFormData);
  this.setState({ currentUser });
}


handleLogout = () => {
  localStorage.removeItem("jwt");
  this.setState({
    currentUser: null
  })
}


authHandleChange = (e) => {
  const { name, value } = e.target;
  this.setState(prevState => ({
    authFormData: {
      ...prevState.authFormData,
      [name]: value
    }
  }));
}
  
 render () {
  return (
    <div className="App">

       <Main 
            {...this.props}
             handleSearchInput={this.handleSearchInput}
             searchFormData={this.state.searchbar}
             handleSearchSubmit={this.handleSearchSubmit}
              pedalInfo={this.state.pedals}>



          <div className = 'pedalinfo'>
          <PedalInfo 
            pedalInfo={this.state.pedal}/>
          </div>

          </Main>

     <Switch>
          <Route exact path= '/form'>
       <Form   handleLogin={this.handleLogin} formData ={ this.state.authFormData} authHandleChange={this.authHandleChange}/>
       </Route>
       <Route exact path= '/register'>
       <Register   handleRegister={this.handleRegister} formData ={ this.state.authFormData} authHandleChange={this.authHandleChange}/>
       </Route>
 
     
    
    <Route exact path= '/form'>
       <Form   handleLogin={this.handleLogin} formData ={ this.state.authFormData} authHandleChange={this.authHandleChange}/>
       </Route>
       <Route exact path= '/register'>
       <Register   handleRegister={this.handleRegister} formData ={ this.state.authFormData} authHandleChange={this.authHandleChange}/>
       </Route>
       </Switch>



   <div className="effects">
       <Route exact path= '/dirt' component= { ()=> <Dirt/>  }/>

                    <Route exact path= '/dirt/Overdrive'component= { ()=> <Overdrive/> }/>

                    <Route exact path= '/dirt/Distortion'component= { ()=> <Distortion/> }/>

                    <Route exact path= '/dirt/Fuzz'component= { ()=> <Fuzz/> }/>

       <Route exact path= '/modulation' component= { ()=> <Modulation/> }/>

                    <Route exact path= '/modulation/Phaser' component= { ()=> <Phaser/> }/>

                    <Route exact path= '/modulation/Chorus'component= { ()=> <Chorus/> }/>

                    <Route exact path= '/modulation/Flanger' component= { ()=> <Flanger/> }/>

                    <Route exact path= '/modulation/Vibrato' component= { ()=> <Vibrato/> }/>

        <Route exact path= '/time' component= { ()=> <Time/> }/>

                  <Route exact path= '/time/Echo' component= { ()=> <Echo/> }/>

                  <Route exact path= '/time/Delay'component= { ()=> <Delay/> }/>

                  <Route exact path= '/time/Reverb' component= { ()=> <Reverb/> }/>

        <Route exact path= '/pitch' component= { ()=> <Pitch/> }/>    

                 <Route exact path= '/pitch/Harmonizer' component= { ()=> <Harmonizer/> }/>  

                 <Route exact path= '/pitch/Octave' component= { ()=> <Octave/> }/>  

                 <Route exact path= '/pitch/Whammy' component= { ()=> <Whammy/> }/>  



        <Route exact path= '/volume' component= { ()=> <Volume/> }/>

                <Route exact path= '/Volume/Boost' component= { ()=> <Boost/> }/>

                <Route exact path= '/Volume/Tremolo' component= { ()=> <Tremolo/> }/>

                <Route exact path= '/Volume/Compressor' component= { ()=> <Compressor/> }/>


        <Route exact path= '/misc' component= { ()=> <Misc/>  }/> 

                <Route exact path= '/misc/Talkbox' component= { ()=> <Talkbox/>  }/> 

                <Route exact path= '/misc/Synth' component= { ()=> <Synth/>  }/> 

                <Route exact path= '/misc/Bitcrusher' component= { ()=> <Bitcrusher/>  }/> 
                <Route exact path= '/misc/Looper' component= { ()=> <Looper/>  }/> 
                </div>

   
    </div>
  );
 }
}

export default withRouter(App);

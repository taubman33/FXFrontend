import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'
import PedalInfo from './PedalInfo'
import CreatePedal from './forms/CreatePedal'
import EditPedal from './forms/EditPedal'
import Form from './Form'
import Register from './forms/Register'


import Dirt from './effects/Dirt'
import Fuzz from './effects/subeffects/Dirt/Fuzz'
import Distortion from './effects/subeffects/Dirt/Distortion'
import Overdrive from './effects/subeffects/Dirt/Overdrive'

import Modulation from './effects/Modulation'
import Phaser from './effects/subeffects/Modulation/Phaser'
import Flanger from './effects/subeffects/Modulation/Flanger'
import Chorus from './effects/subeffects/Modulation/Chorus'
import Vibrato from './effects/subeffects/Modulation/Vibrato'

import Time from './effects/Time'
import Delay from './effects/subeffects/Time/Delay'
import Echo from './effects/subeffects/Time/Echo'
import Reverb from './effects/subeffects/Time/Reverb'

import Pitch from './effects/Pitch'
import Octave from './effects/subeffects/Pitch/Octave'
import Harmonizer from './effects/subeffects/Pitch/Harmonizer'
import Whammy from './effects/subeffects/Pitch/Whammy'

import Volume from './effects/Volume'
import Boost from './effects/subeffects/Volume/Boost'
import Compressor from './effects/subeffects/Volume/Compressor'
import Tremolo from './effects/subeffects/Volume/Tremolo'

import Misc from  './effects/Misc'
import Synth from './effects//subeffects/Misc/Synth'
import Bitcrusher from './effects//subeffects//Misc/Bitcrusher'
import Talkbox from './effects//subeffects/Misc/Talkbox'
import Looper from './effects//subeffects/Misc/Looper'



function Main (props) {

  return ( 
    <div className = 'main'>

          <div className = 'header'>
          <Header />
          </div>

      <div className= 'mainPart'>  


            
            <div className = 'aside'>
            <Aside 
            handleSearchInput={props.handleSearchInput}
            handleSearchSubmit={props.handleSearchSubmit}
            searchFormData={props.searchFormData} />    
            </div>  
        
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


          

            <Route path='/search'>
            <div className = 'pedalInfo'>
            <PedalInfo 
            {...props}
            pedalInfo={props.pedalInfo}/>
            </div>  
            </Route>  

            <Route path='/createPedal'>
            <div className = 'pedalForm'>
            <CreatePedal
            {...props} />
            </div>
            </Route>

             <Route path='/EditPedal/:id' render={(props)=>(
            <div className = 'pedalForm'>
            <EditPedal 
            {...props}/>
            </div>

            )}/>
 

      </div>
 

    <div className = 'footer'>
    <Footer />
    </div>
    

</div>
</div>

  )
}
export default Main
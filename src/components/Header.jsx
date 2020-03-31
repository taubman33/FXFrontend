import React  from 'react'
import Nav from './Nav'

function Header (props) {
        return (
          <div className="header">

            <div className="header-text">
            <h1> F  X  D  B</h1>
            </div>

            <div className="header-bottom">
              <h2> The Guitar Effects Database</h2>
            </div>
            
         <div className ="headernav" >
         <Nav />
           </div>   


     </div>
   )
  }

export default Header

import React  from 'react'
import { Link } from 'react-router-dom'


function Nav (props) {
        return (
          <div className="nav">

           
            <div className="headerContainer">
                  <div className="navbar-link">
                  <Link to= '/'><h4> Return Home</h4> </Link>
                  </div>

                  <div className="navbar-link">
                  <Link to='/form' className='nav-link'><h4>Log in</h4></Link>
                  </div>

                  <div className="navbar-link">
                  <Link to='/register' className='nav-link'><h4>Register</h4></Link>
                  </div>

            </div>

          </div>
         );
       }

export default Nav
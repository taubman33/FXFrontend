import React from 'react'
import Login from './forms/Login'



function Form (props) {
return (
  <div className="form-Container">
        <div className = 'LR_form'>

        <Login handleLogin={props.handleLogin} formData={props.formData} handleChange={props.authHandleChange}/>

        </div>

 </div>
)

}
export default Form
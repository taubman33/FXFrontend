  import React from 'react';

// This component will handle our user register form
const Register = (props) => {

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <hr />
      <form onSubmit={props.handleRegister} onChange={props.authHandleChange} >
        <p>Username: </p>
        <input name="username" type="text"  value={props.formData.username} onChange={props.handleChange}/>
        <p>Email: </p>
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <p>Password: </p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <hr/>
        <button><h4>Register</h4></button>
      </form>
    </div>
  );
}

export default Register;
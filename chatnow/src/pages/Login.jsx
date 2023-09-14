import React from 'react'
import '../styles/styles.scss'
const Login = () => {
  return (
   <div className='formcontainer'>
    <div className='formwrapper'>
      <span className='logo'>Chat with Martin</span>
      <span className='title'>Login</span>
      <form>
        <input type='email' placeholder='Email address'/>
        <input type='password' placeholder='Password'/>
        <button>Login</button>

      </form>
      <p> You don't have an account? Register </p>
    </div>

   </div>
  )
}

export default Login
import React from 'react'
import '../styles/styles.scss'
const Register = () => {
  return (
    <div className='formcontainer'>
<div className='formwrapper'>
    <span className='logo'>Chat with Martin</span>
    <span className='title'>Register</span>
    <form>
        <input type='text' placeholder='Name'/>
        <input type='email' placeholder='Email address'/>
        <input type='password' placeholder='Password'/>
        <input type='file' id='file'
        style={{display:'none'}}/>
        <label htmlFor='file'><i class="ri-user-add-line"></i>
        </label>
        <button> Sign Up</button>
    </form>
    <p>You do have an account ? Login </p>
</div>
    </div>
  )
}

export default Register
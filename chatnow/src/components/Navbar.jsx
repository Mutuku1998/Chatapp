import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
<span className='logo'>Chat with Martin</span>
<div className='user'>
    <img src=' https://images.pexels.com/photos/17459731/pexels-photo-17459731/free-photo-of-low-angle-shot-of-a-man-wearing-a-cap-posing-by-a-decorative-metal-gate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'alt=''/>
    <span> Kioko</span>
    <button>Logout</button>
</div>
    </div>
  )
}

export default Navbar
import React from 'react'

const Input = () => {
  return (
    <div className='input'>
        <input  type='text' placeholder='Message...'/>
       <div className='send'>
       <i class="ri-attachment-2"></i>
         <input type='file' style={{display:'none'}} id='file'/>
         <label htmlFor='file'>
         <i class="ri-image-add-fill"></i>
         </label>
         <button> send </button>
        </div> 
    </div>
  )
}

export default Input
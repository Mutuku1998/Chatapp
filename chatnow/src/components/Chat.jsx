import React from 'react'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
        <div className='chatInfo'>
         <span>Kioko</span> 
         <div className='chatIcons'>
         <i class="ri-live-line"></i>
         <i class="ri-user-add-line"></i>
         <i class="ri-more-fill"></i>
</div> 
   
        </div>
        <Messages/> 
            <Input/>
    </div>
  )
}

export default Chat
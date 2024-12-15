import React from 'react'
import './Chat.css'

const Chat = () => {
  return (
    <div className='Chat-container'>
      <messageList />
      <messageInput/>
      
    </div>
  )
}

export default Chat

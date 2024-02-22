import React from 'react'
import { io } from 'socket.io-client'

const socket = io('http://127.0.0.1:8000')
console.log('socket', socket)

function Main() {
  socket.on('connection', () => {
    console.log('connected🚀')
  })

  const data = {
    username: 'biniruu',
    message: 'Hey you!',
  }

  socket.emit('sendMessage', data)

  socket.on('disconnected', () => {
    console.log('disconnected👋🏻')
  })

  return <div>Main</div>
}

export default Main

import { io } from 'socket.io-client'

const path = 'http://localhost:5000'
const options = {
  autoConnect: false,
}

export const socket = io(path, options)

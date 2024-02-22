import type { ClientToServerEvents, Data, InterServerEvents, ServerToClientEvents, SocketData } from './types/socket'

import { Server } from 'socket.io'
import cors from 'cors'
import express from 'express'
import http from 'http'

const app = express()
const server = http.createServer(app)

app.use(cors())

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server)

io.on('connection', socket => {
  console.log('connected🚀')

  socket.on('sendMessage', (data: Data) => {
    console.log(data)
  })

  socket.on('disconnect', () => {
    console.log('disconnected👋🏻')
  })
})

server.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 8000.')
})

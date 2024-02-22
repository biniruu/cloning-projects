// import { createServer } from 'http'

// import express from 'express'
import { Server } from 'socket.io'

import { posts } from './mock/data'
import { type UserData } from './types/data'
import {
  type ClientToServerEvents,
  type InterServerEvents,
  type ServerToClientEvents,
  type SocketData,
} from './types/socket'

interface UserInfo extends UserData {
  userName: string
  socketId: string
}

// const app = express()
// const httpServer = createServer(app)

const option = {
  cors: {
    origin: 'http://localhost:3000',
  },
}

// const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer, option)
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(4000, option)

const users: UserInfo[] = []

const hasUserName = (userName: string) => {
  return users.some(user => user.userName === userName)
}

const addUserInfo = (userName: string, socketId: string) => {
  const userInfo = users.unshift({
    ...posts[Math.floor(Math.random() * 5)],
    userName,
    socketId,
  })

  return userInfo
}

const addNewUser = (userName: string, socketId: string) => {
  !hasUserName(userName) && addUserInfo(userName, socketId)
}

const getUser = (userName: string) => {
  return users.find(user => user.userName === userName)
}

io.use((socket, next) => {
  const userName = socket.handshake.auth.userName as string

  if (!userName) {
    console.error('An error occurred.')

    return next(new Error('invalid userName'))
  }

  socket.data.userName = userName
  next()
})

io.on('connection', socket => {
  // eslint-disable-next-line no-console
  console.log('connected')

  addNewUser(socket.data.userName as string, socket.id)

  socket.on('userList', () => {
    io.sockets.emit('user-list', users)
  })

  socket.on('sendNotification', ({ senderName, receiverName, type }) => {
    const receiver = getUser(receiverName)

    io.to(receiver!.socketId).emit('getNotification', {
      senderName,
      type,
    })
  })

  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('logout')
  })
})

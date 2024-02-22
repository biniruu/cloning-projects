import http from 'http'
import path from 'path'

import express from 'express'
import Websocket from 'ws'

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '..', '/client', '/views'))

app.use('/dist', express.static(path.join(__dirname, '..', '/client', '/dist')))

app.get('/', (_, res) => {
  res.render('index')
})
// app.get('/*', (_, res) => res.redirect('/'))

const handleListen = () => console.log('Listening on http://localhost:3000')

const server = http.createServer(app)
const wss = new Websocket.Server({ server })

const handleConnection = socket => console.log(socket)

wss.on('connection', handleConnection)

server.listen(3000, handleListen)

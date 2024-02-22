// eslint-disable-next-line no-undef
const socket = io()

const welcome = document.getElementById('welcome')
const form = welcome.querySelector('form')
const room = document.getElementById('room')

room.hidden = true

let roomName

const addMessage = message => {
  const ul = room.querySelector('ul')
  const li = document.createElement('li')
  li.innerHTML = message
  ul.appendChild(li)
}

const handleMessageSubmit = event => {
  event.preventDefault()
  const input = room.querySelector('#msg input')
  const value = input.value
  socket.emit('new_message', value, roomName, () => {
    addMessage(`You: ${value}`)
  })
  input.value = ''
}

const handleNicknameSubmit = event => {
  event.preventDefault()
  const input = room.querySelector('#name input')
  const value = input.value
  socket.emit('nickname', value)
  input.value = ''
}

const showRoom = () => {
  welcome.hidden = true
  room.hidden = false
  const h3 = room.querySelector('h3')
  h3.innerText = `Room ${roomName}`
  const msgForm = room.querySelector('#msg')
  const nameForm = room.querySelector('#name')
  msgForm.addEventListener('submit', handleMessageSubmit)
  nameForm.addEventListener('submit', handleNicknameSubmit)
}

const handleRoomSubmit = event => {
  event.preventDefault()
  const input = form.querySelector('input')
  socket.emit('enter_room', input.value, showRoom)
  roomName = input.value
  input.value = ''
}

form.addEventListener('submit', handleRoomSubmit)

socket.on('welcome', (userNickname, newCount) => {
  const h3 = room.querySelector('h3')
  h3.innerText = `Room ${roomName} (${newCount})`
  addMessage(`${userNickname} arrived!`)
})

socket.on('bye', (userNickname, newCount) => {
  const h3 = room.querySelector('h3')
  h3.innerText = `Room ${roomName} (${newCount})`
  addMessage(`${userNickname} left 😭`)
})

socket.on('send_message', msg => {
  addMessage(msg)
})

socket.on('room_change', rooms => {
  const roomList = welcome.querySelector('ul')
  roomList.innerHTML = ''
  if (rooms.length === 0) {
    return
  }
  rooms.forEach(room => {
    const li = document.createElement('li')
    li.innerText = room
    roomList.append(li)
  })
})

import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from 'utils/context'
import { socket } from 'utils/socket/socket'

function LoginContainer() {
  const navigate = useNavigate()
  const { dispatch } = useContext(Context)
  const [user, setUser] = useState('')

  useEffect(() => {
    socket.on('connect_error', err => {
      if (err.message === 'invalid username') {
        console.log('error')
      }
    })
  }, [])

  const setUserNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.currentTarget.value)
  }

  return <div>LoginContainer</div>
}

export default LoginContainer

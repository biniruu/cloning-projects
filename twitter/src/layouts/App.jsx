import Footer from 'components/Footer'
import Header from 'components/Header'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { auth } from 'utils/fbase'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      const hasUser = !!user
      setIsLoggedIn(hasUser)
      setUserObj(hasUser ? user : null)
      return
    })
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      const isAuthPage = location.pathname === '/auth'
      isAuthPage && navigate('/')
      return
    }
    const isPagesExceptForMain = location.pathname !== '/'
    isPagesExceptForMain && navigate('/auth')
  }, [isLoggedIn])

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main style={{ marginBottom: '2rem' }}>
        <Outlet context={userObj} />
      </main>
      <Footer />
    </>
  )
}

export default App

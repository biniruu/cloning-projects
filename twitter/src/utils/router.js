import { onAuthStateChanged } from 'firebase/auth'
import App from 'layouts/App'
import { Route, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom'
import Auth from 'routes/Auth'
import EditProfile from 'routes/EditProfile'
import Home from 'routes/Home'
import Profile from 'routes/Profile'
import { auth } from 'utils/fbase'

const getAuthState = async () => {
  let isAuth = false
  await onAuthStateChanged(auth, user => {
    isAuth = !!user
  })
  return isAuth
}

const redirectTo = path => {
  const isAuth = getAuthState()

  if (path === 'main') {
    return isAuth ? redirect('/') : null
  }
  if (path === 'auth') {
    return isAuth ? null : redirect('/auth')
  }
  return null
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} loader={() => redirectTo('auth')} />
      <Route path="profile" element={<Profile />} loader={() => redirectTo('auth')} />
      <Route path="edit-profile" element={<EditProfile />} loader={() => redirectTo('auth')} />
      <Route path="auth" element={<Auth />} loader={() => redirectTo('main')} />
    </Route>,
  ),
)

export default router

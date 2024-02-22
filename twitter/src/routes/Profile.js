import { signOut } from 'firebase/auth'
import { auth } from 'utils/fbase'

const Profile = () => {
  const clickLogout = async () => {
    try {
      signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Profile</h1>
      <button style={{ textTransform: 'capitalize' }} onClick={clickLogout}>
        log out
      </button>
    </>
  )
}

export default Profile

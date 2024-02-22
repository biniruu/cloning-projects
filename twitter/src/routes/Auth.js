import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from 'utils/fbase'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    errMsg && setErrMsg('')
  }, [newAccount])

  const createAccount = async () => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password)
      data.user && setNewAccount(false)
    } catch (error) {
      setErrMsg(error.message)
    }
  }

  const authAccount = async () => {
    //
  }

  const handleChange = e => {
    const val = e.target.value
    const isEmail = e.target.name === 'email'
    isEmail ? setEmail(val) : setPassword(val)
  }

  const handleSubmit = e => {
    e.preventDefault()
    newAccount ? createAccount() : authAccount()
  }

  const signInWithSocialAccount = async e => {
    const name = e.target.name
    const providers = {
      google: new GoogleAuthProvider(),
      github: new GithubAuthProvider(),
    }
    const provider = providers[name]

    const result = await signInWithPopup(auth, provider)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} required />
        <input type="submit" value={newAccount ? 'Create Account' : 'Login'} />
      </form>
      {errMsg && <p>{errMsg}</p>}
      <div style={{ display: 'flex' }}>
        <button name="google" onClick={signInWithSocialAccount}>
          Continue with Google
        </button>
        <button name="github" onClick={signInWithSocialAccount}>
          Continue with Github
        </button>
      </div>
    </>
  )
}

export default Auth

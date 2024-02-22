import { addDoc, collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { db } from 'utils/fbase'

const Home = () => {
  const [nweet, setNweet] = useState('')
  const [nweets, setNweets] = useState([])

  const userObj = useOutletContext()

  useEffect(() => {
    const q = query(collection(db, 'nwitter'))
    onSnapshot(q, querySnapshot => {
      const result = querySnapshot.docs.map(doc => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        }
        return obj
      })
      setNweets(result)
    })
  }, [])

  const handleChange = e => {
    setNweet(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'nwitter'), {
        text: nweet,
        createAt: Date.now(),
        creatorId: userObj.uid,
      })
      setNweet('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nweet"
          id="nweet"
          onChange={handleChange}
          placeholder="What's on your mind?"
          value={nweet}
          style={{ margin: '0 0.25rem' }}
        />
        <input type="submit" value="nweet" style={{ textTransform: 'capitalize', margin: '0 0.25rem' }} />
      </form>
      <ul>
        {nweets.map(nweet => (
          <li key={nweet.id}>{nweet.text}</li>
        ))}
      </ul>
    </>
  )
}

export default Home

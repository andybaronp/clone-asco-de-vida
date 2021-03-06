import { onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { getDataPost } from '../utils/useApi'
import Post from './Post'
const Posts = () => {
  const [data, setData] = useState({})

  const getDataPosts = async () => {
    // getdata firebase
    const posts = await getDataPost()

    onSnapshot(posts, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    })
  }
  useEffect(() => {
    getDataPosts()
  }, [])

  return (
    <div className=' sm:w-4/5'>
      {data.length > 0
        ? data.map((post) => <Post key={post.id} data={post.data} />)
        : null}
    </div>
  )
}

export default Posts

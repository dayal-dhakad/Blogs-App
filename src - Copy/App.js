import React, { useContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './components/context/AppContext'


const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts()
  }, [])
  

  return (
    <div>
      <Navbar/>
      <Blogs/>
      <Pagination/>
      

    </div>
  )
}

export default App
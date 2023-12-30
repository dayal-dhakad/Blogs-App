import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Spinner from './Spinner'
import Card from './Card'

const Blogs = () => {

  //consuming context 

  const {loading, posts} = useContext(AppContext)

  return (
    <div className=' w-[55%] mx-auto mt-12 mb-12 '>
    {
      loading ? (<Spinner/>) : (
        posts.length === 0? (<div>No posts Found</div>) : 
                            ( posts.map((post)=>( <div key={post.id} className='flex flex-col justify-center bg-slate-100 p-2 my-3 rounded-lg' >
          <h1 className='font-semibold'>{post.title}</h1>
          <p className='text-xs italic'>By {post.author} on {post.category} </p>
          <p className='text-sm mb-1'>Posted on {post.date}</p>
        
          <p className='mb-1'>{post.content}</p>
          <p className='text-xs text-blue-700 font-bold'>{post.tags.map((tag)=>(<span key={tag}> #{tag}</span>))}</p>
    </div>)))
      )
    }
    </div>
  )
}

export default Blogs
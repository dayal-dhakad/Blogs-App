import React from 'react'

const Card = ({title, author, category, content, date, id, tags, img}) => {
  return (
    
    <div className='flex flex-col justify-center bg-slate-100 p-2 my-3 rounded-lg' >
          <h1 className='font-semibold'>{title}</h1>
          <p className='text-xs italic'>By {author} on {category} </p>
          <p className='text-sm mb-1'>Posted on {date}</p>
        
          <p className='mb-1'>{content}</p>
          <p className='text-xs text-blue-700 font-bold'>{tags.map((tag)=>(<span key={tag}> #{tag}</span>))}</p>
    </div>
   
  )
}

export default Card;
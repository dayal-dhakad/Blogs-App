import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

const Pagination = () => {
  const{page, handlePageChange, totalPages} = useContext(AppContext)
  return (
    

    <div className='fixed bottom-0 bg-white w-full '>
    <div className='border-t border-black flex justify-around p-2'>
        <div className='flex gap-4'> 

        {
           page>1 &&
          (<button onClick={()=>handlePageChange(page-1)}>Previous</button>)
        }
        {
          page<totalPages &&
          (<button onClick={()=>handlePageChange(page+1)}>Next</button>)
        }
         
         
        </div>

         <p>Page {page} of {totalPages}</p>
    </div>
    </div>
  )
}

export default Pagination
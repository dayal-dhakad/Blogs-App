import { createContext, useState } from "react";
import { baseUrl } from "../../baseUrl";



//Step 1
export const AppContext = createContext();

// to get claarity of below children go in index.js. this children is App.js
export default function AppContextProvider({children}){
        const [loading, setLoading] = useState(false);
        const [page, setPage] = useState(1);
        const [posts, setPosts] = useState([]);
        const [totalPages, setTotalPages] = useState(null)

// data filling pending

async function fetchBlogPosts(page=1){ 
    setLoading(true)

    let url = `${baseUrl}?page=${page}`
    
    try{
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);

        setPosts(data.posts);
        setTotalPages(data.totalPages);
        setPage(data.page)
      
       
    }
    catch(error){
            console.log("Error in fetching data")
            setPosts([]);
        setTotalPages(null);
        setPage(1)
    }

    setLoading(false)
    
   }



    function handlePageChange(page){
         setPage(page)
         fetchBlogPosts(page)
    }

        const value = {
            loading,
            setLoading,
            page,
            setPage,
            posts, 
            setPosts,
            totalPages, 
            setTotalPages,
            fetchBlogPosts,
            handlePageChange
        }


        //step 2
        return <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
}


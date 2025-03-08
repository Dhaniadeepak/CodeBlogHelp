 import { Children, createContext, use, useState } from "react";
import App from "../App";
import { baseurl } from "../baseurl";

 export const AppContext=createContext();

 function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    //data filling
    async function fetchBlogsPosts(page=1) {
        setLoading(true)
        try{
            const result= await fetch(`${baseurl}?page=${page}`)
            const data= await result.json()
            console.log(data)
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error){
            console.log("data not found");
            setPage(1);
            setPosts([]);
            setTotalPages(null)
        }
        setLoading(false);
    }
 
    //handlepage
    function handlepage(page){
        setPage(page);
        fetchBlogsPosts(page);
    }

    const value= {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogsPosts,
        handlepage
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    }
    export default AppContextProvider;
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Pagination() {
  const {page,totalPages,handlepage}=useContext(AppContext)
  function handle(){
  }
  return (
    <div style={{display:"flex", flex:"row", justifyContent:"center", alignItems:"center", position:"fixed",border:"1px solid grey", boxShadow:"0px 0px 1px 1px grey", bottom:"0px", gap:"5px", backgroundColor:"white", width:"100%"}}>
      { page>1
      &&<button onClick={()=>handlepage(page-1)}>previous</button>
      }
      {page<totalPages&&
      <button onClick={()=>handlepage(page+1)}>next</button>
      }  
      <p>page {page} of {totalPages}</p>
    </div>
  )
}

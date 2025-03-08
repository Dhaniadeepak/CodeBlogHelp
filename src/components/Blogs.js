import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './spinner';

const Blogs = () => {

    //consume
    const {posts,loading}=useContext(AppContext);
  return (
    <div style={{width:"550px", margin:"100px auto",textAlign:"justify"}}>{
            loading?
            (<Spinner/>):
            (posts.length===0?(
              <div>
                <p>No Data Found</p>
              </div>
            ):(
              posts.map((post)=>(
                <div key={post.id}>
                  <p style={{fontWeight:"bold"}}>{post.title}</p>
                <div>
                  <p style={{fontSize:"13px"}}>By<span>{post.author}</span>on <span style={{fontWeight:"600",textDecoration:"underline"}}>{post.category}</span></p>
                </div>
                <div>
                  <p style={{fontSize:"13px"}}>Posted on {post.date}</p>
                </div>
                <div>
                  <p>{post.content}</p>
                </div>
                <div style={{display:"flex",gap:"3px"}}>{
                  post.tags.map((tag,index)=>{
                    return <span key={index} style={{color:"blue",textDecoration:"underline",display:"flex",flex:"column",font:"13px bold"}}>{`#${tag}`}</span>
                  })
                  }</div>
                </div>
              )
              )
            )
            )};
        
    </div>
  )
}
export default Blogs

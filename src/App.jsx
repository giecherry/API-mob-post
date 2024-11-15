import { useState, useEffect } from 'react'
import Post from "./components/Post.jsx"
import './App.css'

function App() {

  let [showPost,setShowPost]=useState(false)
  let [post, setPost] = useState(null)
  
  useEffect (() => {getPost();},[])  
  const getPost= async()=>{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/4")
    let json = await response.json()
    console.log(json)
    setPost(json);
  }


  return (
    <>
      <h1>Post App</h1>
      <button onClick={()=>{setShowPost(!showPost)}}>{showPost ? "Hide post" : "Show post"}</button>
      {showPost && <Post {...post} />}
    </>
  )
}

export default App

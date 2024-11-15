import UserInfo from "./UserInfo.jsx"
import { useState } from "react"
function Post({body, title}) {

    let [showUserInfo, setShowUserInfo] = useState(false)
    return (
        <>
        <h2>Posts</h2>
        <h4>{title}</h4>
        <p>{body}</p>
        <button onClick={()=>{setShowUserInfo(!showUserInfo)}}>{showUserInfo ? "Hide user" : "Show user"}</button>
        {showUserInfo && <UserInfo />}
        </>
    )
}

export default Post
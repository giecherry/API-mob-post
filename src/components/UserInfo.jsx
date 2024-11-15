import { useState, useEffect } from "react"

function UserInfo() {

    let [userInfo, setUserInfo] = useState([])

    useEffect (() => {getUserInfo();},[])  
    const getUserInfo= async()=>{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/4")
        let json = await response.json()
        console.log(json)
        setUserInfo(json);
    }

    return (
        <>
        <h2>User Info</h2>
        <p>Username: {userInfo.username}</p>
        <p>E-mail: {userInfo.email}</p>
        </>
    )
}

export default UserInfo
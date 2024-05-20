import { useState } from "react";
import PostContainer from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";


export default function App4(){
    const [userData,setUserData] = useState({
        id:1,
        username:'i dont know',
        email:'idontknow@gmail.com',
        displayName:'I dont know developer',
    }) 

    return(
        <UserContext.Provider value={{...userData,setUserData}}>
            <div>
                <PostContainer />
            </div>
        </UserContext.Provider>
    );
}
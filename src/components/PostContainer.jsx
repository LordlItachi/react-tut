import { useContext } from "react";
import PostContent from "./PostContent";
import { UserContext } from "../utils/contexts/UserContext";

export default function PostContainer(){
    const {id,username,setUserData} = useContext(UserContext)
    
    return <div>
        <h3>{id}</h3>
        <button onClick={()=>(
            setUserData((currentState)=>({...currentState,username:'I do know now'}))
        )}>Click Me </button>
        <PostContent />
        <div>{username}</div>
    </div>
}
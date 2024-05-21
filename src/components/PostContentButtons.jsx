import { useContext } from "react"
import { UserContext } from "../utils/contexts/UserContext"

export default function PostContentButtons(){
    const user = useContext(UserContext)
    return <div>
        <p>{user.email}</p>
    </div>
}
import { useEffect, useState } from "react";
import PostContainer from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";
import useFetchUser from "./utils/hooks/useFetchUser";


export default function App4(){

    let {user,loading,error} = useFetchUser(2);
    const [userData,setUserData] = useState() 

    useEffect(()=>{
        if(!loading && !error && user){
            setUserData(user);
        }
    },[loading,error,user])

    return(
        <div>
            <UserContext.Provider value={{...userData,setUserData}}>
                <div>
                    {loading?"loading ...":<PostContainer />} 
                </div>
            </UserContext.Provider>
        </div>
    );
}
import { useEffect, useState } from "react";

const userAPIUrl = "https://jsonplaceholder.typicode.com/users"

export default function useFetchUser(userId){

    const [userData, setUserData] = useState({})
    const [loading,setLoading]=useState(false);
    const [error,setError] = useState();


    useEffect(()=>{

        const controller = new AbortController()
        setLoading(true);
        fetch(`${userAPIUrl}/${userId}`,{signal:controller.signal})
            .then((res)=>{
                if(!res.ok){
                    throw new Error("Network Response was not Ok ")
                }
                return res.json()
            })
            .then((data)=>{ 
                setUserData(data);
                setError(undefined);
            } )
            .catch((err)=>{ setError(err) } )
            .finally(()=>{ setLoading(false) } )
        
        return ()=>{
            controller.abort();
            setLoading(false);
        }
    },[userId])

    return {user:userData, loading,error}
}
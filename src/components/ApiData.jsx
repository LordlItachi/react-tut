import { useState ,useEffect } from "react";


export default function ApiData(){

    const [data , setData] = useState([])
    useEffect(()=>{

        const controller =  new AbortController();
        async function fetchUsers(){
            try{            
                const response = await fetch("https://jsonplaceholder.typicode.com/posts",
                { signal:controller.signal});
                const json = await response.json();
                setData(json);
                console.log(json);
            }
            catch(err){
                console.log(err);
            }
        }
        // const da = fetch("https://jsonplaceholder.typicode.com/posts");
        fetchUsers();

        return ()=>{
            controller.abort();
            console.log(controller.signal);
        }

    },[]);
    
    return (
    <div className="Father">
        {data.map((obj ,index)=>(
            <p key={index}>{obj.title}</p>
    ))}
    </div>
    )
    
}


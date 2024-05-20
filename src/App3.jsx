import { useEffect } from "react";
import { useDocumentClick } from "./utils/hooks/useDocumentClick";

export default function App3(){
    const resizeEventHandler = ()=>{
        console.log("window/viewport changed! ");
    }
    useEffect(()=>{
        window.addEventListener("resize",resizeEventHandler);

        return ()=>{
            window.removeEventListener("reseize", resizeEventHandler);
        }
    },[])
    useDocumentClick();

    return <div>
        <form action="">
            <button >Toggle</button>
        </form>
    </div>
}
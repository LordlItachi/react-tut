import { useEffect } from "react";

export function useDocumentClick(){
    useEffect(()=>{
        console.log("useDocumentClick hook used");
        const handleDocumentClick = ()=>{
            console.log("Clicked Document");
        }
        document.addEventListener('click',handleDocumentClick)

        return ()=>{
            console.log('unregistering the click event');
            removeEventListener('click',handleDocumentClick);
        }
    },[])
}
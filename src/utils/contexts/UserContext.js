import { createContext } from "react";

export const UserContext = createContext({
    id:0,
    username:'',
    email:'',
    name:'',
    address:{},
    phone:'',
    website:'',
    company:'',
    setUserData:()=>{},
});
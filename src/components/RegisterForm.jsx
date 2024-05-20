import { useState } from "react"

export function RegisterForm(){
    const [formFields,setformFields]=useState({
        username:"",
        password:"",
        displayName:""
    });

    return <form >
        <p>REGISTER NOw </p>
        <div>
            <label htmlFor="usernameInput">
                <span>Username</span><br />
                <input type="text" id="usernameInput" value={formFields.username} onChange={(e)=>{
                    setformFields((currentState)=>({...currentState,username:e.target.value}))
                }} />
            </label>
        </div>

        <div>
            <label htmlFor="passwdInput">
                <span>Password</span><br />
                <input type="password" value={formFields.password} onChange={(e)=>{
                    setformFields((currentState)=>({...currentState, password:e.target.value}))
                }}/>
            </label>
        </div>

        <div>
            <label htmlFor="displayNameInput">
                <span>Display Name</span><br />
                <input type="text"  id="displayNameInput" value={formFields.displayName} onChange={(e)=>{
                    setformFields((currentState)=>({...currentState, displayName:e.target.value}))
                }}/>
            </label>
        </div>

        <div>
            <button type="submit">Login</button>
        </div>
        <div>
            <p>Username : {formFields.username}</p>
            <p>Password : {formFields.password}</p>
            <p>Display Name : {formFields.displayName}</p>

        </div>
        

    </form>
}
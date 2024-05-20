import style from './users.module.scss';

export default function LoginForm(){
    return <div>
    <form className={style.LoginForm} onSubmit={
        (e)=>{
            e.preventDefault();
            const formdata = new FormData(e.target);
            console.log("Username:" , formdata.get("usernameInput"));
            console.log("supposed Password: ",formdata.get("userPasswordInput"));
        }
    }>
        <label htmlFor="userLogin">
            <span>Username</span><br />
            <input type ='text' name='usernameInput' id="userLogin" />
            
        </label><br />
        <label htmlFor="userPassword">
            <span>password</span><br />
            <input type ='password' name='userPasswordInput' id="password" />
            
        </label><br />
        <label htmlFor="submitButton"><br />
            <button type="submit" id ="submitButton">Login</button>
        </label>
    </form>
    </ div>
   

}
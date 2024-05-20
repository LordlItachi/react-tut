import ApiData from "./components/ApiData"
import LoginForm from "./components/LoginForm"
import { RegisterForm } from "./components/RegisterForm"
import UpdateBlog from "./components/UpdateBlog"
import { UserProfile } from "./components/UserProfile"


export default function App(){
    const callME=()=>{
        console.log("hello")
    }
    return <div className="Container">
        <div  className="subContainer">        
            <article className="sections">
            <h1 className="style-makeitlean"> Root Component </h1>
            <UserProfile  username="supamen" age={20} callME={callME} /> 
        </article>       
        <article className="sections">
            <img id="arcade-img" src="/arcade.png" alt="Arcade Machine Img"/>
        </article>
        </div><br />
        <div className="Container">
            <LoginForm />
        </div>
        <br />
        <div className="Container">
            <RegisterForm />
        </div>
        <div className="Grandfather">
          <ApiData />
        </div>

    </div>
}
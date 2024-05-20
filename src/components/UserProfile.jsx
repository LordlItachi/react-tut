
import PropTypes from "prop-types"
import { UserFavouriteFoods } from "./UserFavouriteFoods"
import { UserUsername } from "./UserUsername"


export function UserProfile(props){

    console.log(props)
    props.callME();
    return <div id="user-profile">
        <UserUsername username={props.username} />
        <b className="style-makeitlean">Age : </b>
        <span>{props.age}</span>
        <div>
            <span>Email : </span>
            <span>idotnknow@hotmail.com</span>
        </div>
        <UserFavouriteFoods />
    </div>
}

UserProfile.propTypes ={
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    callME: PropTypes.func.isRequired
}


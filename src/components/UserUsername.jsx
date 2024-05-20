import PropTypes from 'prop-types';

export function UserUsername(props){
return <div>
    <b className="style-makeitlean">Username : </b>
    <span>{props.username}</span>
</div>
}

UserUsername.propTypes={
    username: PropTypes.string.isRequired
}
    
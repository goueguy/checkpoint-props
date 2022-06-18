import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({profession,bio,fullName,children}) => {
    const handleName = (e)=>{
        alert(fullName);
    }
    return (
        <div>
            <p>FULLNAME:{fullName}</p>
            <p>BIO:{bio}</p>
            <p>PROFESSION:{profession}</p>
            <img src={children} style={{height:"100px",width:"100px"}} alt="Logo"/><br/>
            <button onClick={(e)=>handleName(e)}>SHOW HANDLE FULLNAME</button>
        </div>
    );
}

Profile.defaultProps =  {
    fullName:"GRAVEN"
}
Profile.propTypes =  {
    fullName: PropTypes.string,
    bio:PropTypes.string,
    profession: PropTypes.string
}
export default Profile;

import React from 'react';

function UserInput (props) {
    return (
        <input type="text" onChange={props.onUserNameChange}/>
    );
}

export default UserInput;
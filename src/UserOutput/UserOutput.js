import React from 'react';

function UserOutput(props) {
    const style = {
        background : 'red'
    }
    return (
        <div>
            <p style={style}>User Input  : {props.userName}</p>
        </div>
    );
}

export default UserOutput;
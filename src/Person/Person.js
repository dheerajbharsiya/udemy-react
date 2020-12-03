import React from 'react';

function Person(props) {
    return (
        <div>
            <h2>
                Person component
            </h2>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;

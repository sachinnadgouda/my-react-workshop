import React from 'react';

// stateless
const person = ( props ) => {
    return (
        <div>
            <p onClick={props.changeStateHandler}> I am {props.name} and {props.age} years old.</p>
            <p> {props.children} </p>
        </div>
    )
};

export default person;
import React from 'react';
import './Person.css';

// stateless
const person = ( props ) => {
    return (
        <div className="person">
            <p onClick={props.changeStateHandler}> I am {props.name} and {props.age} years old.</p>
            <p> {props.children} </p>
            <input type="text" value={props.name} onChange={props.changeNameHandler}/>
        </div>
    )
};

export default person;
import React from 'react';
import './Person.css';
import Radium from 'radium';

// stateless
const person = ( props ) => {
    const personStyle = {
        '@media (min-width: 500px)': {
            width: '200px'
        }
    };
    return (
        <div className="person" style={personStyle}>
            <p onClick={props.deletePersonHandler}> I am {props.name} and {props.age} years old.</p>
            <p> {props.children} </p>
            <input type="text" value={props.name} onChange={props.changeStateHandler}/>
        </div>
    )
};

export default Radium(person);
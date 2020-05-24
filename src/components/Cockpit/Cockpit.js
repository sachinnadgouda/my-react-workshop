import React from 'react';
import './Cockpit.css';

// stateless
const cockpit = (props) => {
    let buttonText = 'Show Persons';
    let buttonClass = 'showButton';
    let info = '';

    if (props.show) {
        buttonText = 'Hide Persons';
        buttonClass = 'hideButton';
        info = <p> Showing { props.persons.length } persons</p>;
    }

    return (
        <div>
            <p> { props.title } </p>
            <button className={buttonClass} onClick={props.filterResultsHandler}>{buttonText}</button>
            { info }
        </div>
    )
};

export default cockpit;
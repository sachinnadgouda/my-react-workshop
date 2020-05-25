import React, { useEffect } from 'react';
import './Cockpit.css';

// stateless
const cockpit = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
    }, [props.persons]);
    // keep deps array blank if you want it to render only once else it will render every time deps change

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
            <h1> { props.title } </h1>
            <button className={buttonClass} onClick={props.filterResultsHandler}>{buttonText}</button>
            { info }
        </div>
    )
};

export default cockpit;
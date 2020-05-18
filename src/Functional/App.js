import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// function component way
const App = ( props ) => {
    const [ state, setPersonState] = useState({
            persons: [
                {name: 'sachin', age: 28},
                {name: 'Chaitra', age: 29},
                {name: 'Test', age: 30}
            ],
            otherAttr: "test"
        }
    );

    const changeSetHandler = () => {
        const state = {
            persons: [
                {name: 'sachin', age: 27},
                {name: 'Chaitra', age: 27},
                {name: 'Test', age: 37}
            ]
        };
        setPersonState({state});
    };


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button onClick={changeSetHandler}>Change State</button>
                <Person name={state.persons[0].name} age={state.persons[0].age}>My hobbies: Cricket and
                    Football</Person>
                <Person name={state.persons[1].name} age={state.persons[1].age}/>
                <Person name={state.persons[2].name} age={state.persons[2].age}/>

            </header>
        </div>
    );

};

export default App;
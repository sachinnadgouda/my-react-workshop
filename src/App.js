import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// Stateful
class App extends Component {
    state = {
        persons: [
            {name: 'sachin', age: 28},
            {name: 'Chaitra', age: 29},
            {name: 'Test', age: 30}
        ]
    };

    changeStateHandler = () => {
        const state = {
            persons: [
                {name: 'sachin', age: Math.floor( Math.random() * 30 )},
                {name: 'Chaitra', age: Math.floor( Math.random() * 30 )},
                {name: 'Test', age: Math.floor( Math.random() * 30 )}
            ]
        };
        this.setState({...state});
        console.log("was clicked");
    };

    render() {
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
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        changeStateHandler={this.changeStateHandler}
                    >
                        My hobbies: Cricket and Football
                    </Person>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        changeStateHandler={this.changeStateHandler}
                    />
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        changeStateHandler={this.changeStateHandler}
                    />
                </header>
            </div>
        );
    }
}

export default App;

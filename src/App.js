import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// Stateful
class App extends Component {
    state = {
        persons: [
            {name: 'sachin', age: 28},
            {name: 'Chaitra', age: 29},
            {name: 'Test', age: 30}
        ],
        showPersons: false,
    };

    changeStateHandler = (newName) => {
        const state = {
            persons: [
                {name: newName, age: Math.floor(Math.random() * 30)},
                {name: 'Chaitra', age: Math.floor(Math.random() * 30)},
                {name: 'Test', age: Math.floor(Math.random() * 30)}
            ]
        };
        this.setState({...state});
        console.log("was clicked");
    };

    changeNameHandler = (event) => {
        const state = {
            persons: [
                {name: event.target.value, age: Math.floor(Math.random() * 30)},
                {name: 'Chaitra', age: Math.floor(Math.random() * 30)},
                {name: 'Test', age: Math.floor(Math.random() * 30)}
            ]
        };
        this.setState({...state});
        console.log("was clicked");
    };

    filterResultsHandler = () => {
        this.setState({showPersons: !this.state.showPersons})
    };

    render() {
        const style = {
            color: 'blue',
        };
        return (
            <div className="App">
                <h1 style={style}>This is a react app</h1>
                <button onClick={this.filterResultsHandler}>Filter</button>
                { this.state.showPersons ?
                    <div >
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                            changeStateHandler={() => this.changeStateHandler("Test 1")}
                            changeNameHandler={this.changeNameHandler}
                        >
                            My hobbies: Cricket and Football
                        </Person>
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            changeStateHandler={this.changeStateHandler.bind(this, "Test 2")}
                            changeNameHandler={this.changeNameHandler}
                        />
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                            changeStateHandler={this.changeStateHandler.bind(this, "Test 3")}
                            changeNameHandler={this.changeNameHandler}
                        />
                    </div> : null
                }
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// Stateful
class App extends Component {
    state = {
        persons: [
            { id: 'person_1', name: 'sachin', age: 28 },
            { id: 'person_2', name: 'Chaitra', age: 29 },
            { id: 'person_3', name: 'Test', age: 30 }
        ],
        showPersons: false,
    };

    changeStateHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex( p => { return p.id === personId });
        // const person = this.state.persons.find(p => { return p.id === personId});
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
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

    deletePersonHandler = (index) => {
        // const persons = [...this.state.persons]
        const persons = this.state.persons.slice();
        persons.splice(index, 1);
        this.setState({persons: persons})
    };

    filterResultsHandler = () => {
        this.setState({showPersons: !this.state.showPersons})
    };

    render() {
        let buttonText = 'Show Persons';
        let buttonStyle = {
            color: 'white',
            backgroundColor: 'green',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if ( this.state.showPersons ) {
            buttonText = 'Hide Persons';
            let classes = [];
            if(this.state.persons.length <= 2){
                classes.push('red');
            }
            if(this.state.persons.length <= 1){
                classes.push('bold');
            }
            buttonStyle.backgroundColor = 'red';
            buttonStyle[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            };
            persons = (
                <div>
                    <h1 className={classes.join(' ')}>Showing {this.state.persons.length} persons</h1>
                    <div>
                        {
                            this.state.persons.map((person, index) => {
                                return (
                                    <ErrorBoundary key={person.id} >
                                        <Person
                                            name={person.name}
                                            age={person.age}
                                            changeStateHandler={(event) => this.changeStateHandler(event, person.id)}
                                            deletePersonHandler={() => this.deletePersonHandler(index)} />
                                    </ErrorBoundary>
                                )
                            })
                        }
                    </div>
                </div>
            );

        }

        return (
            <div className="App">
                <button style={buttonStyle} onClick={this.filterResultsHandler}>{buttonText}</button>
                { persons }
            </div>
        );
    }
}

export default App;

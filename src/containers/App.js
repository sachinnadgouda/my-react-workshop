import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

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
        let persons = null;

        if ( this.state.showPersons ) {
            persons =
                <div>
                    <Persons
                        persons={this.state.persons}
                        changeStateHandler={this.changeStateHandler}
                        deletePersonHandler={this.deletePersonHandler}
                    />
                </div>;

        }

        return (
            <div className="App">
                <div>
                    <Cockpit
                        show={this.state.showPersons}
                        persons={this.state.persons}
                        filterResultsHandler={this.filterResultsHandler}
                    />
                </div>
                { persons }
            </div>
        );
    }
}

export default App;

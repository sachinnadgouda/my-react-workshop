import React, {Component} from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component {

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
    }

    render (){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <ErrorBoundary key={person.id}>
                    <Person
                        name={person.name}
                        age={person.age}
                        changeStateHandler={(event) => this.props.changeStateHandler(event, person.id)}
                        deletePersonHandler={() => this.props.deletePersonHandler(index)}/>
                </ErrorBoundary>
            )
        });
    }
}

export default Persons;
import React, {PureComponent} from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // should be deep checked, this is shallow check
    //     // works because we changed persons by creation of new array in App.js changeStateHandler
    //     return nextProps.persons !== this.props.persons;
    // }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
    }

    render () {
        console.log('[Persons.js] rendering...');
        return (
            this.props.persons.map((person, index) => {
                return (
                    <ErrorBoundary key={person.id}>
                        <Person
                            id={person.id}
                            name={person.name}
                            age={person.age}
                            changeStateHandler={(event) => this.props.changeStateHandler(event, person.id)}
                            deletePersonHandler={() => this.props.deletePersonHandler(index)}/>
                    </ErrorBoundary>
                )
            })
        );
    };
}

export default Persons;
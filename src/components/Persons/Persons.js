import React from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = (props) => (
    props.persons.map((person, index) => {
        return (
            <ErrorBoundary key={person.id} >
                <Person
                    name={person.name}
                    age={person.age}
                    changeStateHandler={(event) => props.changeStateHandler(event, person.id)}
                    deletePersonHandler={() => props.deletePersonHandler(index)} />
            </ErrorBoundary>
        )
    })
);

export default persons;
import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import AuthContext from '../context/auth-context'
import classes from './App.css';
import Layout from "../components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

// Stateful
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            persons: [
                { id: 'person_1', name: 'sachin', age: 28 },
                { id: 'person_2', name: 'Chaitra', age: 29 },
                { id: 'person_3', name: 'Test', age: 30 }
            ],
            showPersons: false,
            authenticated: false
        };
        console.log("[App.js] constructor", this.state);
    }

    static  getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    loginHandler = () => {
      this.setState({authenticated: true});
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
        console.log('[App.js] rendering...');
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
            <div className={classes.App}>
                <Layout>
                    <BurgerBuilder></BurgerBuilder>
                </Layout>
                {/*<AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>*/}
                {/*    <div>*/}
                {/*        <Cockpit*/}
                {/*            title={this.props.title}*/}
                {/*            show={this.state.showPersons}*/}
                {/*            persons={this.state.persons}*/}
                {/*            filterResultsHandler={this.filterResultsHandler}*/}
                {/*            authenticate={this.loginHandler}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    { persons }*/}
                {/*</AuthContext.Provider>*/}
            </div>
        );
    }
}

export default App;

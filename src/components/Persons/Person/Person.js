import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

const StyledDiv = styled.div`
            width: 40%;
            max-height: 40px;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 60px;
            text-align: center;
            @media (min-width: 500px): {
                width: 200px;
            }
        `;

// stateless
class Person extends Component {


    componentDidMount() {
        console.log('[Person.js] componentDidMount');
        if(this.inputElement !== undefined){
            this.inputElement.focus();
        }
    }

    render () {
        console.log('[Person.js] rendering...');
        return (
            <AuthContext.Consumer>
                {
                    (context) =>
                        <StyledDiv>
                            <p> {context.authenticated ? "Authenticated" : "Please Authenticate"} </p>
                            <p onClick={this.props.deletePersonHandler}>
                                I am {this.props.name} and {this.props.age} years old.
                            </p>
                            <p> {this.props.children} </p>
                            <input
                                key={this.props.id}
                                ref={(inputElement) => {
                                    this.inputElement = inputElement
                                }}
                                type="text"
                                value={this.props.name}
                                onChange={this.props.changeStateHandler}
                            />
                        </StyledDiv>
                }
            </AuthContext.Consumer>
        );
    }
}

Person.propTypes = {
    id: PropTypes.string,
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;
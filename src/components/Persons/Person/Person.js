import React from 'react';
import styled from 'styled-components';

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
const person = ( props ) => {
    return (
        <StyledDiv>
            <p onClick={props.deletePersonHandler}> I am {props.name} and {props.age} years old.</p>
            <p> {props.children} </p>
            <input type="text" value={props.name} onChange={props.changeStateHandler}/>
        </StyledDiv>
    )
};

export default person;
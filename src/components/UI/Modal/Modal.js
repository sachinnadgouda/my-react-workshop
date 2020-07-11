import React from "react";
import classes from './Modal.css';
import Aux from '../../../hoc/Auxillary';
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} hide={props.hide}/>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                <p style={{ position: 'absolute', top: '0px', right: '20px', cursor: 'pointer'}} onClick={props.hide}><b>X</b></p>
                { props.children }
            </div>
        </Aux>
    )
};

export default modal;
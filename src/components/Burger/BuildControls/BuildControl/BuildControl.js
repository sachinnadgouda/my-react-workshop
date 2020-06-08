import React from "react";
import classes from './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.ingredientName}</div>
            <button className={classes.Less} onClick={props.removed} disabled={props.isDisabled()}>Less</button>
            <button className={classes.More} onClick={props.added}> More</button>
        </div>
    )
};

export default BuildControl;
import React from "react";
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p> Total Price: <strong>{ props.price.toFixed(2) }</strong> </p>
            {
                controls.map(
                item => <BuildControl
                    key={item.label}
                    ingredientName={item.label}
                    added={() => props.ingredientsAdded(item.type)}
                    removed={() => props.ingredientsRemoved(item.type)}
                    isDisabled={() => props.isLessDisabled(item.type)}
                />
                )
            }
        </div>
    )
};

export default BuildControls;
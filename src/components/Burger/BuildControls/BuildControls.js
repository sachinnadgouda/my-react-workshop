import React from "react";
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";
import Price from "../../UI/Price/Price";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p> <Price price={props.price} /> </p>
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
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchasing}
            >Order Now</button>
        </div>
    )
};

export default BuildControls;
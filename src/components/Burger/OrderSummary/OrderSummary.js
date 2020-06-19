import React from "react";
import Aux from '../../../hoc/Auxillary';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKeys => {
            return <li key={igKeys}><span style={{textTransform: 'capitalize'}}>{igKeys}</span>: {props.ingredients[igKeys]}</li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your burger with following ingredients:</p>
            <ul>
                { ingredientsSummary }
            </ul>
            <p>Continue to checkout</p>
        </Aux>
    )
};

export default OrderSummary;
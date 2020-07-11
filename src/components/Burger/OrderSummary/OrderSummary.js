import React from "react";
import Aux from '../../../hoc/Auxillary';
import Button from "../../UI/Button/Button";
import Price from "../../UI/Price/Price";

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
            <p><Price price={props.price} /></p>
            <p>Continue to checkout</p>
            <Button clicked={props.cancel} buttonType='Danger'>CANCEL</Button>
            <Button clicked={() => {alert()}} buttonType='Success'>CONTINUE</Button>
        </Aux>
    )
};

export default OrderSummary;
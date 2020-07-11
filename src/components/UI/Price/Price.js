import React from "react";

const price = (props) => {
    return (
        <span>Total Price: <strong>{ props.price.toFixed(2) }</strong></span>
    )
};

export default price;
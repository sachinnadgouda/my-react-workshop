import React from "react";
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    let ingredients = null;

    const getIngredientStructure = (className) => {
        return <div className={className}/>
    };

    // const getClassNameFromProp = (propType) => {
    //     const className = ""
    //     if(propType.toString().includes("-")){
    //         propType.toString()
    //     } else {
    //         propType.toString()
    //     }
    //     return className
    // };

    switch (props.type) {
        case('bread-bottom'):
            ingredients = getIngredientStructure(classes.BreadBottom);
            break;
        case('bread-top'):
            ingredients = (<div className={classes.BreadTop}>
                <div className={classes.Seeds1}/>
                <div className={classes.Seeds2}/>
            </div>);
            break;
        case('cheese'):
            ingredients = getIngredientStructure(classes.Cheese);
            break;
        case('salad'):
            ingredients = getIngredientStructure(classes.Salad);
            break;
        case('meat'):
            ingredients = getIngredientStructure(classes.Meat);
            break;
        case('bacon'):
            ingredients = getIngredientStructure(classes.Bacon);
            break;
        default:
            ingredients = null;
            break;

    }

    return ingredients;

};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;
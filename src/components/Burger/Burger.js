import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.css';

const Burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr,el) => {
             return arr.concat(el)
        }, []);
    ingredients = ingredients.length > 0 ? ingredients : "Please add some ingredients";
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            { ingredients }
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
};

export default Burger;
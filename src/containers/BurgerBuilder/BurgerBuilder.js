import React, {Component} from "react";
import Aux from '../../hoc/Auxillary';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 1,
  cheese: 2,
  meat: 3,
  bacon: 1.5
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            'salad': 0,
            'bacon': 0,
            'cheese': 0,
            'meat': 0
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients})
    };

    removeIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        if(this.state.ingredients[type] <= 0) {
            return;
        }
        updatedIngredients[type] = this.state.ingredients[type] - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients})
    };

    isLessDisabled = (type) => {
      return this.state.ingredients[type] <= 0;
    };

    render () {

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientsAdded={this.addIngredientHandler}
                    ingredientsRemoved={this.removeIngredientHandler}
                    isLessDisabled={this.isLessDisabled}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
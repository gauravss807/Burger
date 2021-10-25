import React, {Component} from "react";
import classes from "./BurgerIngredient.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component 
{
    render()
    {
        let ingredent = null;
        switch(this.props.type){
        case "bread-bottom":
            ingredent = <div className={classes.BreadBottom}></div>;
            break;
        case "bread-top":
            ingredent = <div className={classes.BreadTop}></div>;
            break;
        case "Seeds1":
            ingredent = <div className={classes.Seeds1}></div>;
            break;
        case "Seeds2":
            ingredent = <div className={classes.Seeds2}></div>;
            break;
        case "Meat":
            ingredent = <div className={classes.Meat}></div>;
            break;
        case "Cheese":
            ingredent = <div className={classes.Cheese}></div>;
            break;
        case "Salad":
            ingredent = <div className={classes.Salad}></div>;
            break;
        case "Bacon":
            ingredent = <div className={classes.Bacon}></div>
            break;
        default:
            ingredent = null;
        }
    return ingredent;
    }
}
BurgerIngredient.PropTypes={
    type:  PropTypes.string.isRequired,
};
export default BurgerIngredient;
import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from ".//BurgerIngredient/BurgerIngredient";

export const Burger = () =>{
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="Meat"/>
            <BurgerIngredient type="Cheese"/>
            <BurgerIngredient type="Meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};
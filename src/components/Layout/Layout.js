import React from "react";
import ReactAux from "../../hoc/ReactAux";
import classes from "./Layout.css";

export const Layout = (props) =>
{
    return (
    <ReactAux>
        <div className={classes.content}>Toolbar, SideDrawer, BackDrop</div>
        <div>{props.children}</div>
    </ReactAux>
    )
}
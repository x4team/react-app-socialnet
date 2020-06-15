import React from "react";
import d from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={d.dialog + ' ' + d.active}>
        <NavLink to={path}><img src={props.avatar} className={d.img}/><a className={d.name}>{props.name}</a></NavLink>
    </div>
};

export default DialogItem;
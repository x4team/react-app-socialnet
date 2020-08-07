import styles from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.gif";
import React from "react";

let Preloader = (props) => {
    return <img className={styles.preloader} src={preloader}/>
}

export default Preloader;

import React from 'react';
import classes from "./image3.module.scss";
import images from "../images/Group (3).png";

const Image3 = () => {
    return (
        <div>
            <img className={classes.Img} src={images}/>
        </div>
    );
};

export default Image3;
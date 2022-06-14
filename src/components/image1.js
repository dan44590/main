import React from 'react';
import classes from "./image.module.scss";
import images from "../images/Group (1).png";

const Image1 = () => {
    return (
        <div>
            <img className={classes.Img} src={images}/>
        </div>
    );
};

export default Image1;
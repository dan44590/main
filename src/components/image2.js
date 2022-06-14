import React from 'react';
import classes from "./image2.module.scss";
import images from "../images/Group (2).png";

const Image2 = () => {
    return (
        <div>
            <img className={classes.Img} src={images}/>
        </div>
    );
};

export default Image2;
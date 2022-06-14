import React from 'react';
import classes from './image.module.scss';
import images from '../images/Group.png'

const Image = () => {
    return (
        <div>
           <img className={classes.Img} src={images}/>
        </div>
    );
};

export default Image;
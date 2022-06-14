import classes from './App.module.scss';
import images from './images/image 1.jpg'
import {useEffect, useState} from "react";
import Image from "./components/image";
import Image1 from "./components/image1";
import Image2 from "./components/image2";
import Image3 from "./components/image3";

function App() {
    const [text, setText] = useState('');

    useEffect(() => {
        console.log(text)
    })
    return (
        <div className={classes.App}>
            <header className={classes.App_header}>
                <img className={classes.App_header__img} src={images}/>
            </header>
            <div className={classes.App_block}>
                <input className={classes.App_block__inp} type={'text'} placeholder={'find pokemon'}
                       onChange={(event) => setText(event.target.value)}/>
                <button className={classes.App_block__btn}>search</button>
            </div>
            <div className={classes.App_image}>
                <div className={classes.App_image__img1}>
                    <Image className={classes.App_image__icon}/>
                    <p>Ditto</p>
                </div>
                <div className={classes.App_image__img2}>
                    <Image1/>
                    <p>Bulbasaur</p>
                </div>
                <div className={classes.App_image__img3}>
                    <Image2/>
                    <p>Weedle</p>
                </div>
                <div className={classes.App_image__img4}>
                    <Image3/>
                    <p>Beedrill</p>
                </div>
            </div>


        </div>
    );
}

export default App;

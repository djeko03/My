import React, {useState} from 'react';
import css from './index.module.css'

export const Slider = () => {
    const images = [
        {id: 1, img: 'img/slider/react.png'},
        {id: 3, img: 'img/slider/mobx_logo.png'},
        {id: 2, img: 'img/slider/redux_logo.png'},
        {id: 4, img: 'img/slider/Typescript_logo.svg.png'},
        {id: 5, img: 'img/slider/html.jpg'},
        {id: 6, img: 'img/slider/css.jpg'},
        {id: 7, img: 'img/slider/mongo.jfif'},
        {id: 8, img: 'img/slider/postgresql.jpg'},
        {id: 9, img: 'img/github-logo.png'},
        {id: 10, img: 'img/slider/figma.jpg'},

    ]
    const [imgPosition, setImgPosition] = useState(0)

    const handleSwitchLeft = () => {
        setImgPosition(imgPosition + 400)
        if (imgPosition === 0) {
            setImgPosition(-1200)
        }
    }
    const handleSwitchRight = () => {
        setImgPosition(imgPosition - 400)
        if (imgPosition === -1200) {
            setImgPosition(0)
        }
    }


    return (
    <div className={css.container}>
        <div className={css.carousel}>
            <button className={css.left} onClick={handleSwitchLeft}></button>
            <div className={css.carouselContainer} style={{transform:`translateX(${String(imgPosition)}px)`}}>
                {images.map(image => <img width={200} height={150} key={image.id} className={css.image} src={image.img} alt=""/>)}
            </div>
            <button className={css.right} onClick={handleSwitchRight}></button>
        </div>
    </div>
    );
};


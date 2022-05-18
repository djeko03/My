import React, {useState} from 'react';
import css from './index.module.css'
import {Modal} from "../modal";

export const Notebook = ({
    title,
    link,
    description,
    image,

}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className={css.container}>
            <p className={css.title}>{title}</p>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div className={css.monitor} onClick={() => setShowModal(!showModal)}>
                    <img style={{width:'100%'}} src={image} alt=""/>
                </div>

                <div className={css.keyboard}>
                    <div className={css.button}></div>
                </div>
            </div>
            <p className={css.description}>{description}</p>
            <a className={css.link} rel="noreferrer" target="_blank" href={link}>Ссылка</a>
            <Modal show={showModal} setShow={setShowModal}>
                <div style={{width:'88vw', border:'10px solid black', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
                    <img src={image} style={{width:'100%'}} alt=""/>
                </div>
            </Modal>

        </div>

    );
};


import React from 'react';
import css from './index.module.css'

export const Footer = () => {
    return (
        <div className={css.container}>
                <div className={css.git}>
                    <img src="/img/github-logo.png" width={50} alt=""/>
                    <a  rel="noreferrer" target='_blank' href="https://github.com/djeko03">github.com/djeko03</a>
                </div>
                <div className={css.phone}>
                    <img src="img/phone.png" width={50} alt=""/>
                    <p>+ 7 (952) 666-19-97</p>
                </div>
        </div>
    );
};


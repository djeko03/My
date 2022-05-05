import React from 'react';
import css from './index.module.css'
import {MainLayout} from "../main-layout";
import {Slider} from "../slider";

export const Home = () => {
    return (
        <MainLayout>
            <main className={css.container}>
                <section >
                    <div className={css.information}>
                        <div style={{display:'flex', alignItems:'flex-start'}}>
                            <div className={css.myImage}>
                                <img src="img/650824175.jpeg" width={80}  alt=""/>
                            </div>
                            <div className={css.myName}>
                                <h1>Ruslan <br/> Gurbanov</h1>
                            </div>
                        </div>
                        <div className={css.myInfo}>
                            <p>Junior Frontend developer</p>
                            <p>24 years old, Saint-Petersburg, Russia</p>
                        </div>
                    </div>
                    <div className={css.imageWrapper}>
                        <img style={{width:'100%'}} src="img/home.png" alt=""/>
                    </div>
                </section>

                <section className={css.about}>
                    <h2 className={css.aboutTitle}>About me</h2>
                    <p className={css.aboutText}>Hi, I'm Ruslan – JavaScript developer from Saint-Petersburg, Russia. I'm interested in web/mobile development and everything connected with it</p>
                    <p className={css.aboutText}>I studied at St. Petersburg`s State University of Aerospace Instrumentation</p>
                    <p className={css.aboutText}>Now I want to develop and improve my skills as a Frontend developer, but i am also interested in Backend</p>
                    <p className={css.aboutText}>Ready to implement excellent and interesting projects with wonderful people.</p>
                </section>
                <h3 className={css.favorites}>Favorite technologies</h3>
                <Slider/>

            </main>
        </MainLayout>
    );
};


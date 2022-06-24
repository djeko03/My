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
                            <div className={css.myName}>
                                <h1>Руслан <br/> Гурбанов</h1>
                            </div>
                        </div>
                        <div className={css.myInfo}>
                            <p>Junior Frontend разработчик</p>
                            <p>25 лет, Санкт-Петербург, Россия</p>
                        </div>
                    </div>
                </section>

                <section className={css.about}>
                    <h2 className={css.aboutTitle}>Обо мне</h2>
                    <p className={css.aboutText}>Привет, я Руслан – JavaScript разработчик из Санкт-Петербурга. Интересуюсь веб/мобильной разработкой и всем, что с этим связано.</p>
                    <p className={css.aboutText}>Учился в Санкт-Петербургском государственном университете аэрокосмического приборостроения.</p>
                    <p className={css.aboutText}>Сейчас я хочу развиваться и совершенствовать свои навыки в качестве Frontend-разработчика, но меня также интересует Backend.</p>
                    <p className={css.aboutText}>В планах изучение Angular и React Native.</p>
                    <p className={css.aboutText}>Готов реализовать классные и интересные проекты с замечательными людьми.</p>
                </section>
                <h3 className={css.favorites}>Любимые технологии</h3>
                <Slider/>

            </main>
        </MainLayout>
    );
};


import React from 'react';
import css from './index.module.css'
import {MainLayout} from "../main-layout";

export const Skills = () => {
    return (
        <MainLayout>
            <main className={css.container}>

                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img src="/img/skills.png" width={50} alt=""/>
                    <h1 className={css.title}>Навыки</h1>
                </div>

                <p className={css.name}>Frontend :</p>
                <ul className={css.enumeration}>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>MobX > Redux</li>
                </ul>
                <div className={css.comment}>
                    <p>Комментарий :</p>
                    <p className={css.text}>Знаю React hooks (useEffect, useMemo, useState, useRef).
                        Использую стэйт менеджеры MobX и Redux, но если выбирать между ними, то предпочту MobX.</p>
                </div>

                <p className={css.name}>Верстка :</p>
                <ul className={css.enumeration}>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>flex/grid</li>
                </ul>
                <div className={css.comment}>
                    <p>Комментарий :</p>
                    <p className={css.text}>
                        Знаком с методологией БЭМ, но при работе на React, использую module.
                        Нравится препроцессор SCSS за его вложенность, возможность импорта и много других инструментов.
                        Люблю красивые эффекты и анимации.
                    </p>
                </div>

                <p className={css.name}>Инструменты :</p>
                <ul className={css.enumeration}>
                    <li>npm</li>
                    <li>Git</li>
                </ul>

                <p className={css.name}>Графические редакторы :</p>
                <ul className={css.enumeration}>
                    <li>Figma</li>
                    <li>DiagramIO</li>
                </ul>

                <p className={css.name}>Другое :</p>
                <p style={{marginTop:'10px'}}>
                    Знаком с NodeJS, есть опыт работы с базами данных MongoDB и PostgreSQL. <br/> Использовал библиотеку Express для написания API по регистрации/авторизации,
                    получению/добавлению/изменению/удалению данных. <br/> Работал с cookie и JWT токеном.
                </p>

            </main>
        </MainLayout>
    );
};


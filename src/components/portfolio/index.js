import React from 'react';
import css from './index.module.css'
import {MainLayout} from "../main-layout";
import {Notebook} from "../notebook";

export const Portfolio = () => {

    return (
        <MainLayout>
            <main className={css.container}>

                <section>
                    <Notebook
                        title='Интернет магазин'
                        image='/img/skills/online-store.jpg'
                        description='
                        Front-часть интернет магазина, без серверного приложения и базы данных. Есть функция добавления/удаления товаров в корзине и рассчёт их стоимости.
                        В данном проекте был использован React/Mobx, немного типизации на Typescript, а также Next-routing, Next-image.
                        '
                        link='https://github.com/djeko03/online-store-react-ts'
                    />

                    <Notebook
                        title='Шахматы'
                        image='/img/skills/chess.jpg'
                        description='
                        Шахматы React/TypeScrips.
                        Ссылка на GitHub (https://github.com/djeko03/chess)
                        '
                        link='https://chess-blue.vercel.app/'
                    />

                    <Notebook
                        title='Телефонные номера'
                        image='/img/skills/phone-numbers.jpg'
                        description='
                        Приложение для ввода телефонных номеров и вывода списка введенных номеров.
                        Реализовано с помощью ReactJS/Redux, NodeJS/Express и PostgreSQL.
                        '
                        link='https://github.com/djeko03/phone-numbers-test'
                    />

                    <Notebook
                        title='Список дел'
                        image='/img/skills/todo-list.jpg'
                        description='
                        Приложение по добавлению задач и сортировке их по разделам. Реализовано с помощью Drag and drop.
                        Ссылка на GitHub (https://github.com/djeko03/todo-list).
                        '
                        link='https://todo-list-beige-iota.vercel.app/'
                    />

                    <Notebook
                        title='Сайт'
                        image='/img/skills/buh-one.jpg'
                        description='
                        Первый сайт который я сверстал, с него началось моё знакомство с HTML/CSS и тем, что такое адаптивная верстка.
                        '
                        link='https://github.com/djeko03/Buh'
                    />

                    <Notebook
                        title='Фото-карточки'
                        image='/img/skills/cards.jpg'
                        description=''
                        link='https://github.com/djeko03/Photo-cards'
                    />

                </section>

            </main>
        </MainLayout>
    );
};


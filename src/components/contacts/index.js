import React from 'react';
import css from './index.module.css'
import {MainLayout} from "../main-layout";
import {Header} from "../header";
import {Maps} from "../maps";

export const Contacts = () => {
    return (
        <div>
            <Header/>
            <main className={css.container}>
                <div className={css.title}>
                    <img style={{marginRight:'10px'}} src="/img/contacts.png" width={50} alt=""/>
                    <h1>Контакты</h1>
                </div>
                <div className={css.contact}>
                    <img src="img/phone.png" width={50} alt=""/>
                    <p className={css.phone}>+ 7 (952) 666-19-97</p>
                </div>
                <div className={css.contact}>
                    <img src="/img/github-logo.png" width={50} alt=""/>
                    <a className={css.link} rel="noreferrer" target='_blank' href="https://github.com/djeko03">github</a>
                </div>
                <div className={css.contact}>
                    <img src="/img/hh-logo.png" width={50} alt=""/>
                    <a className={css.link} rel="noreferrer" target='_blank' href="https://spb.hh.ru/resume/f9d81217ff09cba60d0039ed1f593451327552">headhunter</a>
                </div>

                <p className={css.others}>Другие мессенджеры, которыми я пользуюсь</p>
                <div style={{display:'flex', alignItems:'center', marginTop:"10px"}}>
                    <div className={css.contact}>
                        <img src="/img/whatsapp.png" width={60} alt=""/>
                        <p className={css.whatsapp}>Whatsapp </p>
                    </div>
                    <div className={css.contact}>
                        <img src="/img/telegram.png" width={40} alt=""/>
                        <p>Telegram</p>
                    </div>
                </div>

                <Maps/>
            </main>
        </div>
    );
};


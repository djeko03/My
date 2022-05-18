import React, {useState} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import {MenuBurger} from "../menu-burger";


export const Header = () => {

    const [burgerActive, setBurgerActive] = useState(false);
    return (
        <div className='container'>
            {/*<ul className='navigation'>*/}
            {/*    <li>*/}
            {/*        <NavLink className='home' to="/" data-text="&nbsp;&nbsp;Home">&nbsp;&nbsp;Home&nbsp;</NavLink>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <a className={css.about} href="#" data-text="&nbsp;&nbsp;About">&nbsp;&nbsp;About&nbsp;</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <a className='skills' href="#" data-text="&nbsp;&nbsp;Skills">&nbsp;&nbsp;Skills&nbsp;</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <a className='portfolio' href="#" data-text="&nbsp;&nbsp;Portfolio">&nbsp;&nbsp;Portfolio&nbsp;</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <NavLink className='contacts' to="/contacts" data-text="&nbsp;&nbsp;Contacts">&nbsp;&nbsp;Contacts&nbsp;</NavLink>*/}
            {/*    </li>*/}
            {/*</ul>*/}

            <ul className='navigation'>
                <li>
                    <NavLink className='home' to="/">Главная</NavLink>
                </li>
                <li>
                    <NavLink className='skills' to="/skills">Навыки</NavLink>
                </li>
                <li>
                    <NavLink className='portfolio' to="/portfolio">Работы</NavLink>
                </li>
                <li>
                    <NavLink className='contacts' to="/contacts">Контакты</NavLink>
                </li>
            </ul>

            <button className='button' onClick={() => setBurgerActive(!burgerActive)}>Menu</button>
            <MenuBurger active={burgerActive} setActive={setBurgerActive}/>

        </div>
    );
};


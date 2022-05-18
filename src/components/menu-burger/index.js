import React from 'react';
import css from './index.module.css'
import cn from 'classnames'
import {NavLink} from "react-router-dom";

export const MenuBurger = ({active, setActive}) => {
    return (
        <div className={cn(css.menu, [active && css.active])} onClick={() => setActive(false)}>
            <div className={cn(css.blur, [active && css.active])}/>
            <div className={css.content} onClick={e => e.stopPropagation()}>


                <ul className={css.links}>
                    <li className={css.link}>
                        <NavLink className={css.name} to='/'>Главная</NavLink>
                    </li>
                    <li className={css.link}>
                        <NavLink className={css.name} to='/skills'>Навыки</NavLink>
                    </li>
                    <li className={css.link}>
                        <NavLink className={css.name} to='/portfolio'>Работы</NavLink>
                    </li>
                    <li className={css.link}>
                        <NavLink className={css.name} to='/contacts'>Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};


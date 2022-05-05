import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";


export const Header = () => {
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
                    <NavLink className='home' to="/" data-text="&nbsp;&nbsp;Home">&nbsp;&nbsp;Home&nbsp;</NavLink>
                </li>
                <li>
                    <a className='skills' href="#" data-text="&nbsp;&nbsp;Skills">&nbsp;&nbsp;Skills&nbsp;</a>
                </li>
                <li>
                    <a className='portfolio' href="#" data-text="&nbsp;&nbsp;Portfolio">&nbsp;&nbsp;Portfolio&nbsp;</a>
                </li>
                <li>
                    <NavLink className='contacts' to="/contacts" data-text="&nbsp;&nbsp;Contacts">&nbsp;&nbsp;Contacts&nbsp;</NavLink>
                </li>
            </ul>
        </div>
    );
};


import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Portal } from '../portal';
import css from './index.module.css';



export const Modal = ({
                                            children,
                                            show,
                                            classname,
                                            setShow,
                                            closeClickAway = true,
                                        }) => {

    const contentRef = useRef(null);
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        return ()=> document.body.style.overflow = 'visible';

    }, [show]);

    const handleClickContainer = (e)=> {
        if (!setShow || !closeClickAway){
            return;
        }
        // eslint-disable-next-line react/no-find-dom-node
        const domNode = ReactDOM.findDOMNode(contentRef.current);
        if (!domNode || !domNode.contains(e.target)) {
            setShow(false);
        }
    };

    if (!show) {
        return null;
    }

    return (
        <Portal>
            <div onClick={handleClickContainer} className={css.container}>
                <div ref={contentRef} className={classname}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styleContainer.container}>
            <div className={style.footer}>
                <h3>Ivanov Ivanov</h3>
                <div className={style.elements}>
                    <div><img src={'http://kaplya-ua.com/wp-content/themes/Kaplya/images/grey.png'}/></div>
                    <div><img src={'http://kaplya-ua.com/wp-content/themes/Kaplya/images/grey.png'}/></div>
                    <div><img src={'http://kaplya-ua.com/wp-content/themes/Kaplya/images/grey.png'}/></div>
                    <div><img src={'http://kaplya-ua.com/wp-content/themes/Kaplya/images/grey.png'}/></div>
                </div>
                <span>© 2022 All rights reserved</span>
            </div>

        </div>
    );
};

export default Footer;
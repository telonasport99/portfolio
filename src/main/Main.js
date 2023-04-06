import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={styleContainer.container}>
            <div className={style.main}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>Vadim Telonasport</h1>
                    <p>A React Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;
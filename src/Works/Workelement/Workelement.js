import React from 'react';
import style from './Workelement.module.scss'
const Workelement = (props) => {
    return (
            <div className={style.work}>
                <div className={style.image} style={props.style}>
                    <a className={style.viewBtn}>Watch</a></div>
                <div className={style.worksInfo}>
                <h3 className={style.workTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
                </div>
            </div>
    );
};

export default Workelement;
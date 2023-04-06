import React from 'react';
import style from './Skillelement.module.css'

const SkillElement = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default SkillElement;
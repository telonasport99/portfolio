import React from 'react';
import style from 'src/Works/Workselement/Workelement.module.css'
const Workelement = (props) => {
    return (
        <div>
            <div className={style.work}>
                <div className={style.icon}></div>
                <h3>{props.title}</h3>
                <span className={style.description}></span>
            </div>
        </div>
    );
};

export default Workelement;
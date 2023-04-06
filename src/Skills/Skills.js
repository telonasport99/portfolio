import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import SkillElement from "./Skillelement/Skillelement";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={styleContainer.container} >
            <div className={style.skills}>
                <Title title={'My skills'}/>
                <div className={style.skillsElements}>
                    <SkillElement title={'js'} description={'123'}/>
                    <SkillElement title={'css'} description={'321'}/>
                    <SkillElement title={'react'} description={'333'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
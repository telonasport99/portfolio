import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Works.module.scss'
import Workelement from "./Workelement/Workelement";
import Title from "../common/components/title/Title";
import todoImage from ".././assets/image/to-do-list-apps.png"
import socialImage from ".././assets/image/social.png"

const Works = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const todo = {
        backgroundImage: `url(${todoImage})`,
    }
    return (

        <div className={styleContainer.container}>
            <div className={style.works}>
                <Title title={'My works'}/>
                <div className={style.worksElements}>
                    <Workelement    style={social}
                        title={'Todolist'} description={'blabla'}
                                 />
                    <Workelement style={todo} title={'Social-network'} description={'blabla'}
                                 />
                </div>
            </div>
        </div>
    );
};

export default Works;
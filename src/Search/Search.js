import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from "./Search.module.css"

const Search = () => {
    return (
        <div className={styleContainer.container}>
            <div className={style.search}>
            <h2>Search to work</h2>
                <button className={style.hire} onClick={()=>alert('FIRE ME')}>Hire Me!</button>
            </div>
        </div>
    );
};

export default Search;